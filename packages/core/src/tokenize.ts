/** Una palabra encontrada en un texto, con su forma normalizada para comparar. */
export interface Token {
  surface: string;
  normalized: string;
  index: number;
}

const WORD_RE = /[A-Za-z]+(?:['’][A-Za-z]+)*/g;

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
  return [...forms];
}
