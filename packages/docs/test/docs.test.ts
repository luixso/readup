import { describe, expect, it } from "vitest";
import { DOC_PROJECTS, isAllowedUrl } from "../src";
import { extractDoc } from "../src/extract";

// HTML de ejemplo con la estructura típica de una página de MediaWiki (ArchWiki/Proxmox).
const WIKI_HTML = `<!doctype html><html><head><title>Systemd - ArchWiki</title></head><body>
<nav><a href="/title/Main_page">Main page</a></nav>
<div id="content"><h1>systemd</h1>
<div id="bodyContent"><div class="mw-parser-output">
<p><b>systemd</b> is a suite of basic building blocks for a Linux system. It provides a system and service
manager that runs as PID 1 and starts the rest of the system.<sup>[1]</sup></p>
<h2>Basic systemctl usage<span class="mw-editsection">[edit]</span></h2>
<p>The main command used to introspect and control systemd is <code>systemctl</code>. Some of its uses are
examining the system state and managing the system and services.</p>
<ul><li>Show system status: <code>systemctl status</code></li>
<li>List running units:<ul><li>with details</li></ul></li></ul>
<pre>$ systemctl start unit
$ systemctl enable unit</pre>
<p>See <a href="/title/Systemd/Timers">systemd/Timers</a> and <a href="https://evil.example.com/x">this link</a>
for more information about scheduling jobs in a Linux system with many more words here.</p>
<table><tr><th>Command</th><th>Description</th></tr><tr><td>start</td><td>Start a unit</td></tr></table>
</div></div></div></body></html>`;

describe("isAllowedUrl", () => {
  it("solo permite https en dominios oficiales", () => {
    expect(isAllowedUrl("https://wiki.archlinux.org/title/Pacman")).toBe(true);
    expect(isAllowedUrl("http://wiki.archlinux.org/title/Pacman")).toBe(false);
    expect(isAllowedUrl("https://wiki.archlinux.org.evil.com/")).toBe(false);
    expect(isAllowedUrl("https://169.254.169.254/latest")).toBe(false);
    expect(isAllowedUrl("no es una url")).toBe(false);
  });

  it("todas las páginas del catálogo son de dominios permitidos", () => {
    for (const p of DOC_PROJECTS.flatMap((x) => x.pages)) expect(isAllowedUrl(p.url), p.url).toBe(true);
  });
});

describe("extractDoc", () => {
  const doc = extractDoc(WIKI_HTML, "https://wiki.archlinux.org/title/Systemd");

  it("limpia el título", () => {
    expect(doc.title).toBe("Systemd");
  });

  it("extrae encabezados sin [edit] y párrafos sin notas", () => {
    const heading = doc.blocks.find((b) => b.type === "heading");
    expect(heading).toEqual({ type: "heading", level: 2, text: "Basic systemctl usage" });
    const first = doc.blocks.find((b) => b.type === "paragraph");
    const text = first && first.type === "paragraph" ? first.inlines.map((i) => i.t).join("") : "";
    expect(text).toContain("suite of basic building blocks");
    expect(text).not.toContain("[1]");
  });

  it("marca el código en línea y conserva los bloques de código", () => {
    const p = doc.blocks.filter((b) => b.type === "paragraph")[1];
    expect(p && p.type === "paragraph" && p.inlines.some((i) => i.code && i.t === "systemctl")).toBe(true);
    const code = doc.blocks.find((b) => b.type === "code");
    expect(code && code.type === "code" && code.text).toContain("systemctl enable unit");
  });

  it("aplana sublistas y extrae tablas", () => {
    const list = doc.blocks.find((b) => b.type === "list");
    expect(list && list.type === "list" && list.items.length).toBe(3);
    const table = doc.blocks.find((b) => b.type === "table");
    expect(table && table.type === "table" && table.rows[1]).toEqual(["start", "Start a unit"]);
  });

  it("solo conserva enlaces a dominios permitidos", () => {
    expect(doc.links.map((l) => l.url)).toEqual(["https://wiki.archlinux.org/title/Systemd/Timers"]);
  });
});
