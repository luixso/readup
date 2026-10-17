"use client";

import { type FalseFriend, type Gloss, type GradedText, findFalseFriend } from "@readup/content";
import { analyzeCoverage, baseForms, splitSentences, tokenize } from "@readup/core";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AudioBar } from "@/components/AudioBar";
import { addCard } from "@/lib/deck";
import { markCompleted } from "@/lib/progress";
import { useSpeech } from "@/lib/speech";

interface Selection {
  word: string;
  gloss?: Gloss;
  falseFriend?: FalseFriend;
  context: string;
}

const DIFFICULTY_LABEL = {
  facil: "Lectura fluida",
  optimo: "Zona óptima",
  dificil: "Texto difícil",
} as const;

const WORD_RE = /[A-Za-z]+(?:['’][A-Za-z]+)*/g;

function findGloss(text: GradedText, word: string): Gloss | undefined {
  const forms = baseForms(word);
  return (
    text.glossary.find((g) => g.term === word) ??
    text.glossary.find((g) => g.term.split(" ").some((part) => forms.includes(part)))
  );
}

export function Reader({ text }: { text: GradedText }) {
  const speech = useSpeech();
  const [selected, setSelected] = useState<Selection | null>(null);
  const [tapped, setTapped] = useState<Set<string>>(new Set());
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const sentences = useMemo(() => splitSentences(text.body), [text.body]);
  const tokens = useMemo(() => tokenize(text.body), [text.body]);

  const paragraphs = useMemo(() => {
    let offset = 0;
    return text.body.split("\n\n").map((p) => {
      const start = text.body.indexOf(p, offset);
      offset = start + p.length;
      return { text: p, start };
    });
  }, [text.body]);

  // Cobertura estimada: todas las palabras se consideran conocidas salvo las que el usuario toca.
  const coverage = useMemo(() => {
    const known = new Set(tokens.map((t) => t.normalized).filter((w) => !tapped.has(w)));
    return analyzeCoverage(text.body, known);
  }, [text.body, tokens, tapped]);

  const score = text.questions.filter((q, i) => answers[i] === q.answerIndex).length;
  const finished = Object.keys(answers).length === text.questions.length;

  useEffect(() => {
    if (finished) markCompleted(text.id, tokens.length, score);
  }, [finished, score, text.id, tokens.length]);

  const sentenceIndexAt = (offset: number) =>
    sentences.findIndex((s) => offset >= s.start && offset < s.end);
  const active = speech.activeIndex !== null ? sentences[speech.activeIndex] : undefined;

  function onWord(surface: string, absoluteIndex: number) {
    const word = surface.toLowerCase().replace(/’/g, "'");
    if (speech.playing) {
      // Mientras suena el audio, tocar una palabra salta a su frase.
      speech.playSentences(sentences.map((s) => s.text), Math.max(0, sentenceIndexAt(absoluteIndex)));
      return;
    }
    setTapped((prev) => new Set(prev).add(word));
    const sentence = sentences[sentenceIndexAt(absoluteIndex)];
    setSelected({
      word,
      gloss: findGloss(text, word),
      falseFriend: findFalseFriend(word),
      context: sentence?.text ?? "",
    });
  }

  function save() {
    if (!selected) return;
    const es = selected.gloss?.es ?? selected.falseFriend?.means ?? "";
    addCard({
      term: selected.gloss?.term ?? selected.word,
      es: es || "(añade tu traducción)",
      context: selected.context,
      textId: text.id,
    });
    setSaved((prev) => new Set(prev).add(selected.word));
  }

  const tech = text.track === "tech";

  return (
    <div className="narrow">
      <Link href={tech ? "/tecnico" : "/"} className="back">
        ← {tech ? "Inglés técnico" : "Biblioteca"}
      </Link>
      <div className="chips">
        <span className={`chip ${tech ? "tech" : ""}`}>{text.cefr}</span>
        <span className="chip neutral">{text.category ?? text.topic}</span>
        <span className="chip neutral">{tokens.length} palabras</span>
      </div>
      <h1 className="reader-title">{text.title}</h1>
      <p className="muted" style={{ margin: 0 }}>
        {text.titleEs} · Cobertura {Math.round(coverage.coverage * 100)} % ({DIFFICULTY_LABEL[coverage.difficulty]})
      </p>

      <AudioBar speech={speech} sentences={sentences.map((s) => s.text)} />

      <section className="card reader">
        {paragraphs.map((p) => (
          <p key={p.start}>
            {splitWords(p.text).map((part, i) => {
              if (!part.isWord) return <span key={i}>{part.text}</span>;
              const abs = p.start + part.offset;
              const lower = part.text.toLowerCase();
              const cls = [
                "word",
                active && abs >= active.start && abs < active.end ? "speaking" : "",
                selected?.word === lower ? "selected" : "",
                saved.has(lower) ? "saved" : "",
                findFalseFriend(lower) ? "ff" : "",
              ].join(" ");
              return (
                <span key={i} className={cls} onClick={() => onWord(part.text, abs)}>
                  {part.text}
                </span>
              );
            })}
          </p>
        ))}
      </section>
      <p className="muted" style={{ fontSize: "0.85rem" }}>
        Toca cualquier palabra para ver su significado. Las palabras con subrayado ondulado son falsos amigos.
      </p>

      {selected && (
        <aside className="sheet" role="dialog" aria-label="Significado">
          <div className="sheet-head">
            <span className="sheet-term">{selected.gloss?.term ?? selected.word}</span>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                className="btn round"
                aria-label="Escuchar"
                onClick={() => speech.say(selected.gloss?.term ?? selected.word, 0.8)}
              >
                🔊
              </button>
              <button className="btn primary" onClick={save} disabled={saved.has(selected.word)}>
                {saved.has(selected.word) ? "✓ Guardada" : "+ Repasar"}
              </button>
              <button className="btn round ghost" aria-label="Cerrar" onClick={() => setSelected(null)}>
                ✕
              </button>
            </div>
          </div>
          {selected.gloss ? (
            <p className="sheet-es">{selected.gloss.es}</p>
          ) : (
            <p className="sheet-es muted">Sin traducción todavía. Guárdala y añádela al repasar.</p>
          )}
          {selected.gloss?.note && <p className="muted" style={{ margin: 0 }}>{selected.gloss.note}</p>}
          {selected.falseFriend && (
            <div className="ff-box">
              ⚠ Falso amigo: significa «{selected.falseFriend.means}», no {selected.falseFriend.notMeans}.
            </div>
          )}
          {selected.context && <p className="context">“{selected.context}”</p>}
        </aside>
      )}

      <h2>Comprensión</h2>
      {text.questions.map((q, qi) => (
        <section key={qi} className="card question">
          <strong>{q.prompt}</strong>
          {q.options.map((opt, oi) => {
            const answered = answers[qi] !== undefined;
            const cls = !answered ? "" : oi === q.answerIndex ? "right" : oi === answers[qi] ? "wrong" : "";
            return (
              <button
                key={oi}
                className={`option ${cls}`}
                disabled={answered}
                onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
              >
                {opt}
              </button>
            );
          })}
        </section>
      ))}
      {finished && (
        <div className="result">
          🎉 {score} de {text.questions.length} correctas · +{tokens.length} palabras leídas
        </div>
      )}

      <h2>Shadowing</h2>
      <p className="muted" style={{ marginTop: -8 }}>
        Escucha cada frase y repítela en voz alta justo detrás del audio, imitando el ritmo y la entonación.
      </p>
      {text.shadowing.map((s) => (
        <section key={s} className="card shadow-row">
          <span>{s}</span>
          <div style={{ display: "flex", gap: 8, flex: "none" }}>
            <button className="btn small" onClick={() => speech.say(s, 0.7)}>🐢 Lento</button>
            <button className="btn small" onClick={() => speech.say(s, 1)}>▶ Normal</button>
          </div>
        </section>
      ))}
      <div style={{ height: selected ? 200 : 0 }} />
    </div>
  );
}

function splitWords(paragraph: string) {
  const parts: Array<{ text: string; isWord: boolean; offset: number }> = [];
  let last = 0;
  for (const m of paragraph.matchAll(WORD_RE)) {
    const idx = m.index ?? 0;
    if (idx > last) parts.push({ text: paragraph.slice(last, idx), isWord: false, offset: last });
    parts.push({ text: m[0], isWord: true, offset: idx });
    last = idx + m[0].length;
  }
  if (last < paragraph.length) parts.push({ text: paragraph.slice(last), isWord: false, offset: last });
  return parts;
}
