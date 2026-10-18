"use client";

import { type Gloss, type GradedText, findFalseFriend } from "@readup/content";
import { analyzeCoverage, baseForms, tokenize } from "@readup/core";
import { useEffect, useMemo, useState } from "react";
import { AudioBar } from "@/components/AudioBar";
import { BackLink } from "@/components/BackLink";
import { LevelBadge, TrackBadge } from "@/components/Badge";
import { type Unit, UnitText, sentenceAt, useSentences } from "@/components/Tappable";
import { WordSheet, type WordSelection } from "@/components/WordSheet";
import { addCard } from "@/lib/deck";
import { lookupOffline, translateOnline } from "@/lib/dictionary";
import { useCloseOnBack } from "@/lib/history";
import { markCompleted } from "@/lib/progress";
import { useSpeech } from "@/lib/speech";

const DIFFICULTY_LABEL = {
  facil: "lectura fluida",
  optimo: "zona óptima",
  dificil: "texto difícil",
} as const;

/**
 * Glosa del texto para la palabra tocada. Las expresiones de varias palabras ("in fact")
 * solo cuentan si la palabra tocada forma parte de esa expresión en ese punto del texto.
 */
function findGloss(text: GradedText, word: string, paragraph: string, offset: number): Gloss | undefined {
  const lower = paragraph.toLowerCase();
  for (const g of text.glossary) {
    if (!g.term.includes(" ")) continue;
    for (let at = lower.indexOf(g.term); at !== -1; at = lower.indexOf(g.term, at + 1)) {
      if (offset >= at && offset < at + g.term.length) return g;
    }
  }
  const forms = baseForms(word);
  return text.glossary.find((g) => !g.term.includes(" ") && (g.term === word || forms.includes(g.term)));
}

export function Reader({ text }: { text: GradedText }) {
  const speech = useSpeech();
  const [selected, setSelected] = useState<WordSelection | null>(null);
  const [tapped, setTapped] = useState<Set<string>>(new Set());
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const closeSheet = useCloseOnBack(selected !== null, () => setSelected(null));

  const units: Unit[] = useMemo(() => text.body.split("\n\n").map((p) => ({ inlines: [{ t: p }] })), [text.body]);
  const sentences = useSentences(units);
  const tokens = useMemo(() => tokenize(text.body), [text.body]);

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

  const active = speech.activeIndex !== null ? sentences[speech.activeIndex] : undefined;

  async function onWord(surface: string, unit: number, offset: number) {
    const index = sentenceAt(sentences, unit, offset);
    if (speech.playing) {
      // Mientras suena el audio, tocar una palabra salta a su frase.
      speech.playSentences(sentences.map((s) => s.text), Math.max(0, index));
      return;
    }
    const word = surface.toLowerCase().replace(/’/g, "'");
    const falseFriend = findFalseFriend(word);
    const context = sentences[index]?.text ?? "";
    setTapped((prev) => new Set(prev).add(word));

    // 1) Glosa del propio texto (traducción según el contexto), 2) diccionario, 3) traductor en línea.
    const paragraph = units[unit]!.inlines.map((i) => i.t).join("");
    const gloss = findGloss(text, word, paragraph, offset);
    if (gloss) {
      setSelected({ word, term: gloss.term, es: gloss.es, note: gloss.note, falseFriend, context });
      return;
    }
    const offline = lookupOffline(word);
    if (offline) {
      setSelected({ word, term: word, es: offline.es, note: offline.note, falseFriend, context });
      return;
    }
    setSelected({ word, term: word, loading: true, falseFriend, context });
    const es = await translateOnline(word);
    setSelected((cur) => (cur?.word === word ? { word, term: word, es, falseFriend, context } : cur));
  }

  function save() {
    if (!selected) return;
    addCard({
      term: selected.term,
      es: selected.es || "(añade tu traducción)",
      context: selected.context,
      textId: text.id,
    });
    setSaved((prev) => new Set(prev).add(selected.word));
  }

  return (
    <article className="narrow">
      <BackLink fallback="/lecturas" label="Lecturas" />
      <div className="badges">
        <LevelBadge level={text.cefr} />
        <TrackBadge track={text.track} label={text.category} />
        <span className="muted small">
          {tokens.length} palabras · {DIFFICULTY_LABEL[coverage.difficulty]} ({Math.round(coverage.coverage * 100)} %)
        </span>
      </div>
      <h1 className="title">{text.title}</h1>
      <p className="subtitle">{text.titleEs}</p>

      <AudioBar speech={speech} sentences={sentences.map((s) => s.text)} />

      <div className="prose">
        {units.map((u, i) => (
          <p key={i}>
            <UnitText unit={u} index={i} active={active} selected={selected?.word} saved={saved} onWord={onWord} />
          </p>
        ))}
      </div>
      <p className="hint">Toca una palabra para ver su traducción. Subrayado ondulado: falso amigo.</p>

      {selected && (
        <WordSheet
          selection={selected}
          saved={saved.has(selected.word)}
          speech={speech}
          onSave={save}
          onClose={closeSheet}
        />
      )}

      <h2>Comprensión</h2>
      {text.questions.map((q, qi) => (
        <section key={qi} className="question">
          <p className="question-prompt">{q.prompt}</p>
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
        <p className="result">
          {score} de {text.questions.length} correctas · lectura completada, racha actualizada.
        </p>
      )}

      <h2>Shadowing</h2>
      <p className="muted">Escucha cada frase y repítela justo detrás del audio, imitando ritmo y entonación.</p>
      <div className="list">
        {text.shadowing.map((s) => (
          <div key={s} className="shadow-row">
            <span>{s}</span>
            <span className="row">
              <button className="btn small" onClick={() => speech.say(s, 0.25)}>Lento</button>
              <button className="btn small" onClick={() => speech.say(s, 1)}>Normal</button>
            </span>
          </div>
        ))}
      </div>
      <div style={{ height: selected ? 220 : 0 }} />
    </article>
  );
}
