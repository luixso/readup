"use client";

import { findFalseFriend } from "@readup/content";
import { type Sentence, WORD_RE, splitSentences } from "@readup/core";
import { useMemo } from "react";

/** Trozo de texto; el código se muestra en monoespaciada y no se puede tocar. */
export interface Inline {
  t: string;
  code?: true;
}

/** Bloque de texto leíble (párrafo, elemento de lista, cita…). */
export interface Unit {
  inlines: Inline[];
}

export interface GlobalSentence extends Sentence {
  unit: number;
}

/** Frases de todas las unidades, en orden, para el audio y el resaltado. */
export function useSentences(units: Unit[]): GlobalSentence[] {
  return useMemo(
    () =>
      units.flatMap((u, unit) =>
        splitSentences(u.inlines.map((i) => i.t).join("")).map((s) => ({ ...s, unit })),
      ),
    [units],
  );
}

interface Props {
  unit: Unit;
  index: number;
  active?: GlobalSentence;
  selected?: string;
  saved: Set<string>;
  onWord: (word: string, unit: number, offset: number) => void;
}

export function UnitText({ unit, index, active, selected, saved, onWord }: Props) {
  let offset = 0;
  return (
    <>
      {unit.inlines.map((inline, i) => {
        const start = offset;
        offset += inline.t.length;
        if (inline.code) return <code key={i}>{inline.t}</code>;
        const parts: React.ReactNode[] = [];
        let last = 0;
        for (const m of inline.t.matchAll(WORD_RE)) {
          const at = m.index ?? 0;
          if (at > last) parts.push(inline.t.slice(last, at));
          const abs = start + at;
          const lower = m[0].toLowerCase().replace(/’/g, "'");
          const speaking = active && active.unit === index && abs >= active.start && abs < active.end;
          const cls = [
            "word",
            speaking ? "speaking" : "",
            selected === lower ? "selected" : "",
            saved.has(lower) ? "saved" : "",
            findFalseFriend(lower) ? "ff" : "",
          ].join(" ");
          parts.push(
            <span key={at} className={cls} onClick={() => onWord(m[0], index, abs)}>
              {m[0]}
            </span>,
          );
          last = at + m[0].length;
        }
        if (last < inline.t.length) parts.push(inline.t.slice(last));
        return <span key={i}>{parts}</span>;
      })}
    </>
  );
}

export function sentenceAt(sentences: GlobalSentence[], unit: number, offset: number): number {
  return sentences.findIndex((s) => s.unit === unit && offset >= s.start && offset < s.end);
}
