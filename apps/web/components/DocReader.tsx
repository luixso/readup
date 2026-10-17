"use client";

import { findFalseFriend } from "@readup/content";
import { tokenize } from "@readup/core";
import { type DocBlock, type ExtractedDoc, siteName } from "@readup/docs";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AudioBar } from "@/components/AudioBar";
import { BackLink } from "@/components/BackLink";
import { TechBadge } from "@/components/Badge";
import { type Unit, UnitText, sentenceAt, useSentences } from "@/components/Tappable";
import { WordSheet, type WordSelection } from "@/components/WordSheet";
import { addCard } from "@/lib/deck";
import { lookupOffline, translateOnline } from "@/lib/dictionary";
import { useCloseOnBack } from "@/lib/history";
import { markDocRead, useProgress } from "@/lib/progress";
import { useSpeech } from "@/lib/speech";

type State = { status: "loading" } | { status: "error"; message: string } | { status: "ok"; doc: ExtractedDoc };

/** Asigna a cada bloque de texto su(s) unidad(es) leíble(s). */
function toUnits(blocks: DocBlock[]) {
  const units: Unit[] = [];
  const map = blocks.map((b) => {
    if (b.type === "paragraph" || b.type === "quote") return [units.push({ inlines: b.inlines }) - 1];
    if (b.type === "heading") return [units.push({ inlines: [{ t: b.text }] }) - 1];
    if (b.type === "list") return b.items.map((inlines) => units.push({ inlines }) - 1);
    return [];
  });
  return { units, map };
}

export function DocReader({ url }: { url: string }) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });
    fetch(`/api/doc?url=${encodeURIComponent(url)}`)
      .then(async (res) => {
        const data = (await res.json()) as ExtractedDoc & { error?: string };
        if (cancelled) return;
        if (!res.ok || data.error) setState({ status: "error", message: data.error ?? "Error al cargar." });
        else setState({ status: "ok", doc: data });
      })
      .catch(() => !cancelled && setState({ status: "error", message: "Sin conexión." }));
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (state.status === "loading") {
    return (
      <article className="narrow">
        <BackLink fallback="/docs" label="Docs" />
        <p className="muted">Cargando {siteName(url)}…</p>
      </article>
    );
  }
  if (state.status === "error") {
    return (
      <article className="narrow">
        <BackLink fallback="/docs" label="Docs" />
        <h1 className="title">No se pudo abrir la página</h1>
        <p className="muted">{state.message}</p>
        <a className="link" href={url} target="_blank" rel="noreferrer">
          Abrir en la web original ↗
        </a>
      </article>
    );
  }
  return <LoadedDoc doc={state.doc} />;
}

function LoadedDoc({ doc }: { doc: ExtractedDoc }) {
  const speech = useSpeech();
  const progress = useProgress();
  const [selected, setSelected] = useState<WordSelection | null>(null);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [read, setRead] = useState(false);
  const closeSheet = useCloseOnBack(selected !== null, () => setSelected(null));

  const { units, map } = useMemo(() => toUnits(doc.blocks), [doc.blocks]);
  const sentences = useSentences(units);
  const words = useMemo(() => units.reduce((n, u) => n + tokenize(u.inlines.map((i) => i.t).join("")).length, 0), [units]);
  const active = speech.activeIndex !== null ? sentences[speech.activeIndex] : undefined;
  const alreadyRead = read || !!progress?.docs[doc.url];

  async function onWord(surface: string, unit: number, offset: number) {
    const index = sentenceAt(sentences, unit, offset);
    if (speech.playing) {
      speech.playSentences(sentences.map((s) => s.text), Math.max(0, index));
      return;
    }
    const word = surface.toLowerCase().replace(/’/g, "'");
    const falseFriend = findFalseFriend(word);
    const offline = lookupOffline(word);
    const base = { word, term: word, falseFriend, context: sentences[index]?.text ?? "" };
    if (offline) {
      setSelected({ ...base, es: offline.es, note: offline.note });
      return;
    }
    setSelected({ ...base, loading: true });
    const es = await translateOnline(word);
    setSelected((cur) => (cur?.word === word ? { ...base, es } : cur));
  }

  function save() {
    if (!selected) return;
    addCard({ term: selected.term, es: selected.es || "(añade tu traducción)", context: selected.context, textId: doc.url });
    setSaved((prev) => new Set(prev).add(selected.word));
  }

  const unitProps = (i: number) => ({ index: i, active, selected: selected?.word, saved, onWord });

  return (
    <article className="narrow">
      <BackLink fallback="/docs" label="Docs" />
      <div className="badges">
        <TechBadge label={siteName(doc.url)} />
        <span className="muted small">{words.toLocaleString("es")} palabras · {Math.max(1, Math.round(words / 120))} min</span>
      </div>
      <h1 className="title">{doc.title}</h1>
      <p className="subtitle">
        <a className="link" href={doc.url} target="_blank" rel="noreferrer">
          Ver original ↗
        </a>
      </p>

      <AudioBar speech={speech} sentences={sentences.map((s) => s.text)} />

      <div className="prose doc">
        {doc.blocks.map((b, bi) => {
          const [u] = map[bi]!;
          switch (b.type) {
            case "heading": {
              const H = (b.level <= 2 ? "h2" : "h3") as "h2" | "h3";
              return <H key={bi}><UnitText unit={units[u!]!} {...unitProps(u!)} /></H>;
            }
            case "paragraph":
              return <p key={bi}><UnitText unit={units[u!]!} {...unitProps(u!)} /></p>;
            case "quote":
              return <blockquote key={bi}><UnitText unit={units[u!]!} {...unitProps(u!)} /></blockquote>;
            case "list": {
              const L = b.ordered ? "ol" : "ul";
              return (
                <L key={bi}>
                  {map[bi]!.map((ui) => (
                    <li key={ui}><UnitText unit={units[ui]!} {...unitProps(ui)} /></li>
                  ))}
                </L>
              );
            }
            case "code":
              return <pre key={bi}><code>{b.text}</code></pre>;
            case "table":
              return (
                <div key={bi} className="table-wrap">
                  <table>
                    <tbody>
                      {b.rows.map((r, ri) => (
                        <tr key={ri}>{r.map((c, ci) => <td key={ci}>{c}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
          }
        })}
      </div>

      <div className="doc-end">
        <button
          className="btn primary"
          disabled={alreadyRead}
          onClick={() => {
            markDocRead(doc.url, doc.title, words);
            setRead(true);
          }}
        >
          {alreadyRead ? "✓ Leída" : "Marcar como leída"}
        </button>
        <span className="muted small">Cuenta para tu racha diaria.</span>
      </div>

      {doc.links.length > 0 && (
        <>
          <h2>Seguir leyendo</h2>
          <div className="list">
            {doc.links.slice(0, 25).map((l) => (
              <Link key={l.url} href={`/docs/leer?url=${encodeURIComponent(l.url)}`} className="row-link">
                <span className="row-title">{l.text}</span>
                <span className="muted">→</span>
              </Link>
            ))}
          </div>
        </>
      )}

      <p className="hint">
        Contenido de {siteName(doc.url)}, mostrado con fines de estudio. Consulta la licencia en la web original.
      </p>

      {selected && (
        <WordSheet selection={selected} saved={saved.has(selected.word)} speech={speech} onSave={save} onClose={closeSheet} />
      )}
      <div style={{ height: selected ? 220 : 0 }} />
    </article>
  );
}
