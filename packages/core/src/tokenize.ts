/** Una palabra encontrada en un texto, con su forma normalizada para comparar. */
export interface Token {
  surface: string;
  normalized: string;
  index: number;
}

// \p{L}: cualquier letra, incluidas las acentuadas (Lucía, café).
export const WORD_RE = /\p{L}+(?:['’]\p{L}+)*/gu;

/** Divide un texto en palabras inglesas (las contracciones cuentan como una palabra). */
export function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  for (const match of text.matchAll(WORD_RE)) {
    tokens.push({
      surface: match[0],
      normalized: normalize(match[0]),
      index: match.index ?? 0,
    });
  }
  return tokens;
}

/** Minúsculas y apóstrofo tipográfico unificado. */
export function normalize(word: string): string {
  return word.toLowerCase().replace(/’/g, "'");
}

/**
 * Familias de palabras aproximadas: "walked", "walking", "walks" → "walk".
 * Heurística deliberadamente simple; se sustituirá por un lematizador real
 * cuando se importen las listas de frecuencia (ver docs/04-roadmap.md).
 */
export function baseForms(word: string): string[] {
  const w = normalize(word);
  const forms = new Set<string>([w]);
  const add = (f: string) => f.length >= 2 && forms.add(f);

  if (w.endsWith("'s")) add(w.slice(0, -2));
  if (w.endsWith("ies")) add(w.slice(0, -3) + "y");
  if (w.endsWith("es")) add(w.slice(0, -2));
  if (w.endsWith("s") && !w.endsWith("ss")) add(w.slice(0, -1));
  if (w.endsWith("ied")) add(w.slice(0, -3) + "y");
  if (w.endsWith("ed")) {
    add(w.slice(0, -2));
    add(w.slice(0, -1));
    if (/(.)\1ed$/.test(w)) add(w.slice(0, -3));
  }
  if (w.endsWith("ing")) {
    add(w.slice(0, -3));
    add(w.slice(0, -3) + "e");
    if (/(.)\1ing$/.test(w)) add(w.slice(0, -4));
  }
  if (w.endsWith("ly")) add(w.slice(0, -2));
  // Comparativos y superlativos: bigger → big, larger → large, easiest → easy.
  if (w.endsWith("ier")) add(w.slice(0, -3) + "y");
  if (w.endsWith("iest")) add(w.slice(0, -4) + "y");
  if (w.endsWith("er")) {
    add(w.slice(0, -2));
    add(w.slice(0, -1));
    if (/(.)\1er$/.test(w)) add(w.slice(0, -3));
  }
  if (w.endsWith("est")) {
    add(w.slice(0, -3));
    add(w.slice(0, -2));
    if (/(.)\1est$/.test(w)) add(w.slice(0, -4));
  }
  return [...forms];
}

export interface Sentence {
  text: string;
  /** Posición del primer carácter en el texto original. */
  start: number;
  end: number;
}

const SENTENCE_RE = /[^.!?\n]+(?:[.!?]+["”’)]?|$)/gm;

/** Divide un texto en frases (para leerlas en voz alta una a una y resaltarlas). */
export function splitSentences(text: string): Sentence[] {
  const sentences: Sentence[] = [];
  for (const match of text.matchAll(SENTENCE_RE)) {
    const raw = match[0];
    const lead = raw.length - raw.trimStart().length;
    const trimmed = raw.trim();
    if (!/[A-Za-z0-9]/.test(trimmed)) continue;
    const start = (match.index ?? 0) + lead;
    sentences.push({ text: trimmed, start, end: start + trimmed.length });
  }
  return sentences;
}
