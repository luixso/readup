import { Readability } from "@mozilla/readability";
import { parseHTML } from "linkedom";
import { isAllowedUrl } from "./sources";
import type { DocBlock, DocLink, ExtractedDoc, Inline } from "./types";

const MAX_BLOCKS = 800;
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "IMG", "FIGURE", "BUTTON", "NAV", "FORM", "IFRAME"]);
const CODE_TAGS = new Set(["CODE", "KBD", "SAMP", "TT"]);

type El = {
  nodeType: number;
  tagName: string;
  textContent: string | null;
  childNodes: ArrayLike<El>;
  getAttribute(name: string): string | null;
  querySelectorAll(sel: string): ArrayLike<El>;
};

const clean = (s: string) => s.replace(/\s+/g, " ");

function inlinesOf(node: El, out: Inline[] = [], inCode = false): Inline[] {
  for (const child of Array.from(node.childNodes)) {
    if (child.nodeType === 3) {
      const t = clean(child.textContent ?? "");
      if (t) push(out, { t, ...(inCode ? { code: true as const } : {}) });
    } else if (child.nodeType === 1) {
      if (SKIP_TAGS.has(child.tagName)) continue;
      // Nested lists inside list items are handled by the caller.
      if (child.tagName === "UL" || child.tagName === "OL") continue;
      if (child.tagName === "BR") {
        push(out, { t: " " });
        continue;
      }
      inlinesOf(child, out, inCode || CODE_TAGS.has(child.tagName));
    }
  }
  return out;
}

function push(out: Inline[], item: Inline) {
  const last = out[out.length - 1];
  if (last && !!last.code === !!item.code) last.t += item.t;
  else out.push(item);
}

function trimInlines(inlines: Inline[]): Inline[] {
  const result = inlines.map((i) => ({ ...i }));
  if (result[0]) result[0].t = result[0].t.trimStart();
  const last = result[result.length - 1];
  if (last) last.t = last.t.trimEnd();
  // Quitar marcas de edición de MediaWiki como "[edit]" y notas "[1]".
  for (const i of result) if (!i.code) i.t = i.t.replace(/\[(edit|\d+|citation needed)\]/gi, "");
  return result.filter((i) => i.t.length > 0);
}

const hasText = (inlines: Inline[]) => inlines.some((i) => /[A-Za-z]{2}/.test(i.t));

function walk(node: El, blocks: DocBlock[]) {
  for (const child of Array.from(node.childNodes)) {
    if (blocks.length >= MAX_BLOCKS) return;
    if (child.nodeType === 3) {
      const t = clean(child.textContent ?? "").trim();
      if (t.length > 40) blocks.push({ type: "paragraph", inlines: [{ t }] });
      continue;
    }
    if (child.nodeType !== 1 || SKIP_TAGS.has(child.tagName)) continue;
    const tag = child.tagName;

    if (/^H[1-6]$/.test(tag)) {
      const text = clean(child.textContent ?? "").replace(/\[edit\]/gi, "").trim();
      if (text) blocks.push({ type: "heading", level: Number(tag[1]), text });
    } else if (tag === "P" || tag === "DT" || tag === "DD") {
      const inlines = trimInlines(inlinesOf(child));
      if (hasText(inlines)) blocks.push({ type: "paragraph", inlines });
    } else if (tag === "UL" || tag === "OL") {
      const items = listItems(child);
      if (items.length) blocks.push({ type: "list", ordered: tag === "OL", items });
    } else if (tag === "PRE") {
      const text = (child.textContent ?? "").replace(/\n+$/, "");
      if (text.trim()) blocks.push({ type: "code", text });
    } else if (tag === "BLOCKQUOTE") {
      const inlines = trimInlines(inlinesOf(child));
      if (hasText(inlines)) blocks.push({ type: "quote", inlines });
    } else if (tag === "TABLE") {
      const rows = Array.from(child.querySelectorAll("tr"))
        .slice(0, 30)
        .map((tr) =>
          Array.from(tr.querySelectorAll("th,td")).map((c) => clean(c.textContent ?? "").trim()),
        )
        .filter((r) => r.some(Boolean));
      if (rows.length) blocks.push({ type: "table", rows });
    } else {
      walk(child, blocks);
    }
  }
}

function listItems(list: El): Inline[][] {
  const items: Inline[][] = [];
  for (const li of Array.from(list.childNodes)) {
    if (li.nodeType !== 1 || li.tagName !== "LI") continue;
    const inlines = trimInlines(inlinesOf(li));
    if (hasText(inlines) || inlines.some((i) => i.code)) items.push(inlines);
    // Sublistas: se aplanan con sangría textual.
    for (const sub of Array.from(li.childNodes)) {
      if (sub.nodeType === 1 && (sub.tagName === "UL" || sub.tagName === "OL")) {
        for (const subItem of listItems(sub)) items.push([{ t: "– " }, ...subItem]);
      }
    }
  }
  return items;
}

function collectLinks(doc: { querySelectorAll(sel: string): ArrayLike<El> }, base: string): DocLink[] {
  const seen = new Set<string>([base.split("#")[0]!]);
  const links: DocLink[] = [];
  for (const a of Array.from(doc.querySelectorAll("a[href]"))) {
    const text = clean(a.textContent ?? "").trim();
    if (text.length < 3 || text.length > 80) continue;
    let url: string;
    try {
      url = new URL(a.getAttribute("href") ?? "", base).toString().split("#")[0]!;
    } catch {
      continue;
    }
    if (!isAllowedUrl(url) || seen.has(url)) continue;
    if (/[?&](action|oldid|diff)=|\/(Special|File|Talk|User|Help|Category|Template):/i.test(url)) continue;
    seen.add(url);
    links.push({ text, url });
    if (links.length >= 60) break;
  }
  return links;
}

/** Convierte el HTML de una página de documentación en bloques limpios para el lector. */
export function extractDoc(html: string, url: string): ExtractedDoc {
  const { document } = parseHTML(html);
  // Readability modifica el documento: los enlaces se recogen antes.
  const mainForLinks = document.querySelector("main, article, #content, .content") ?? document;
  const links = collectLinks(mainForLinks as never, url);

  const article = new Readability(document as never, { charThreshold: 200 }).parse();
  const blocks: DocBlock[] = [];
  if (article?.content) {
    const { document: content } = parseHTML(`<html><body>${article.content}</body></html>`);
    walk(content.body as unknown as El, blocks);
  }

  const title =
    article?.title?.replace(/\s+[-–|]\s+(ArchWiki|Wikipedia|Proxmox VE|GitHub Docs).*$/i, "").trim() ||
    document.title ||
    url;

  // Evitar repetir el título como primer encabezado.
  if (blocks[0]?.type === "heading" && blocks[0].text === title) blocks.shift();

  return { title, url, blocks, links };
}
