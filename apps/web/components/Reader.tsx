"use client";

import { type FalseFriend, type Gloss, type GradedText, findFalseFriend } from "@readup/content";
import { analyzeCoverage, baseForms, tokenize } from "@readup/core";
import { useMemo, useState } from "react";
import { addCard } from "@/lib/deck";
import { speak, stopSpeaking } from "@/lib/speech";

interface Selection {
  word: string;
  gloss?: Gloss;
  falseFriend?: FalseFriend;
  context: string;
}

const DIFFICULTY_LABEL = {
  facil: "Fácil · lectura fluida",
  optimo: "Zona óptima · aprendiendo",
  dificil: "Difícil · busca un texto más sencillo",
} as const;

function findGloss(text: GradedText, word: string): Gloss | undefined {
  const forms = baseForms(word);
  return (
    text.glossary.find((g) => g.term === word) ??
    text.glossary.find((g) => g.term.split(" ").some((part) => forms.includes(part)))
  );
}

function sentenceAt(body: string, index: number): string {
  const start = Math.max(body.lastIndexOf(".", index), body.lastIndexOf("\n", index)) + 1;
  const endDot = body.indexOf(".", index);
  const end = endDot === -1 ? body.length : endDot + 1;
  return body.slice(start, end).trim();
}

export function Reader({ text }: { text: GradedText }) {
  const [selected, setSelected] = useState<Selection | null>(null);
  const [tapped, setTapped] = useState<Set<string>>(new Set());
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [answers, setAnswers] = useState<Record<number, number>>({});

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
    const known = new Set(
      tokenize(text.body)
        .map((t) => t.normalized)
        .filter((w) => !tapped.has(w)),
    );
    return analyzeCoverage(text.body, known);
  }, [text.body, tapped]);

  function onWord(surface: string, absoluteIndex: number) {
    const word = surface.toLowerCase().replace(/’/g, "'");
    setTapped((prev) => new Set(prev).add(word));
    setSelected({
      word,
      gloss: findGloss(text, word),
      falseFriend: findFalseFriend(word),
      context: sentenceAt(text.body, absoluteIndex),
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

  const score = text.questions.filter((q, i) => answers[i] === q.answerIndex).length;

  return (
    <>
      <p className="muted" style={{ marginBottom: 4 }}>
        <span className="tag">{text.cefr}</span>
        {text.titleEs}
      </p>
      <h1 style={{ marginTop: 0 }}>{text.title}</h1>

      <div className="row" style={{ marginBottom: 16 }}>
        <button className="primary" onClick={() => speak(text.body)}>
          ▶ Escuchar mientras lees
        </button>
        <button onClick={stopSpeaking}>■ Parar</button>
        <span className="muted">
          Cobertura {Math.round(coverage.coverage * 100)} % · {DIFFICULTY_LABEL[coverage.difficulty]}
        </span>
      </div>

      <section className="card reader">
        {paragraphs.map((p) => (
          <p key={p.start}>
            {splitWords(p.text).map((part, i) =>
              part.isWord ? (
                <span
                  key={i}
                  className={[
                    "word",
                    selected?.word === part.text.toLowerCase() ? "selected" : "",
                    saved.has(part.text.toLowerCase()) ? "saved" : "",
                  ].join(" ")}
                  onClick={() => onWord(part.text, p.start + part.offset)}
                >
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </p>
        ))}
      </section>

      {selected && (
        <aside className={`card gloss ${selected.falseFriend ? "false-friend" : ""}`}>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <strong style={{ fontSize: "1.2rem" }}>{selected.gloss?.term ?? selected.word}</strong>
            <div className="row">
              <button onClick={() => speak(selected.gloss?.term ?? selected.word, 0.8)}>🔊</button>
              <button className="primary" onClick={save} disabled={saved.has(selected.word)}>
                {saved.has(selected.word) ? "Guardada" : "+ Repasar"}
              </button>
            </div>
          </div>
          {selected.gloss ? (
            <p style={{ margin: "8px 0" }}>{selected.gloss.es}</p>
          ) : (
            <p className="muted" style={{ margin: "8px 0" }}>
              Sin glosa todavía. Guárdala y añade tu traducción al repasar.
            </p>
          )}
          {selected.gloss?.note && <p className="muted">{selected.gloss.note}</p>}
          {selected.falseFriend && (
            <p className="warn">
              ⚠ Falso amigo: significa “{selected.falseFriend.means}”, no{" "}
              {selected.falseFriend.notMeans}.
            </p>
          )}
          <p className="muted" style={{ marginBottom: 0 }}>“{selected.context}”</p>
        </aside>
      )}

      <h2>Comprensión</h2>
      {text.questions.map((q, qi) => (
        <section key={qi} className="card">
          <strong>{q.prompt}</strong>
          {q.options.map((opt, oi) => {
            const answered = answers[qi] !== undefined;
            const cls = !answered
              ? ""
              : oi === q.answerIndex
                ? "right"
                : oi === answers[qi]
                  ? "wrong"
                  : "";
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
      {Object.keys(answers).length === text.questions.length && (
        <p>
          Resultado: <strong>{score}/{text.questions.length}</strong>
        </p>
      )}

      <h2>Shadowing</h2>
      <p className="muted">Escucha cada frase y repítela en voz alta justo detrás del audio, imitando el ritmo.</p>
      {text.shadowing.map((s) => (
        <section key={s} className="card row" style={{ justifyContent: "space-between" }}>
          <span>{s}</span>
          <div className="row">
            <button onClick={() => speak(s, 0.75)}>🐢 Lento</button>
            <button onClick={() => speak(s, 1)}>▶ Normal</button>
          </div>
        </section>
      ))}
    </>
  );
}

function splitWords(paragraph: string) {
  const parts: Array<{ text: string; isWord: boolean; offset: number }> = [];
  const re = /[A-Za-z]+(?:['’][A-Za-z]+)*/g;
  let last = 0;
  for (const m of paragraph.matchAll(re)) {
    const idx = m.index ?? 0;
    if (idx > last) parts.push({ text: paragraph.slice(last, idx), isWord: false, offset: last });
    parts.push({ text: m[0], isWord: true, offset: idx });
    last = idx + m[0].length;
  }
  if (last < paragraph.length) parts.push({ text: paragraph.slice(last), isWord: false, offset: last });
  return parts;
}
