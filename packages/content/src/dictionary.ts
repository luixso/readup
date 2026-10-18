import { baseForms, normalize } from "@readup/core";
import { DICTIONARY_DATA, PROPER_NAMES_DATA } from "./dictionary-data";

export interface DictionaryEntry {
  es: string;
  /** Forma base cuando la palabra tocada es una forma derivada (walked → walk). */
  base?: string;
  properNoun?: boolean;
}

let words: Map<string, string> | null = null;
let names: Map<string, string> | null = null;

function parse(data: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const line of data.split("\n")) {
    const i = line.indexOf("=");
    if (i > 0) map.set(line.slice(0, i).trim(), line.slice(i + 1).trim());
  }
  return map;
}

/** Busca una palabra inglesa: primero la forma exacta, luego sus formas base y por último nombres propios. */
export function lookupWord(word: string): DictionaryEntry | undefined {
  words ??= parse(DICTIONARY_DATA);
  names ??= parse(PROPER_NAMES_DATA);
  const w = normalize(word);

  const exact = words.get(w);
  if (exact) return { es: exact };
  for (const form of baseForms(w)) {
    if (form === w) continue;
    const hit = words.get(form);
    if (hit) return { es: hit, base: form };
  }
  const name = names.get(w) ?? names.get(w.replace(/'s$/, ""));
  if (name) return { es: name, properNoun: true };
  return undefined;
}

export function dictionarySize(): number {
  words ??= parse(DICTIONARY_DATA);
  return words.size;
}
