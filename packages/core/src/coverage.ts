import { baseForms, tokenize } from "./tokenize";

export type Difficulty = "facil" | "optimo" | "dificil";

export interface CoverageReport {
  totalWords: number;
  knownWords: number;
  /** Proporción 0–1 de palabras del texto que el usuario conoce. */
  coverage: number;
  difficulty: Difficulty;
  /** Palabras desconocidas únicas, por orden de aparición. */
  unknown: string[];
}

/**
 * Umbrales de Hu & Nation (2000): con ≥98 % se lee con fluidez (lectura extensiva);
 * entre 95 % y 98 % se entiende con esfuerzo (lectura intensiva / i+1).
 */
export const EXTENSIVE_THRESHOLD = 0.98;
export const INTENSIVE_THRESHOLD = 0.95;

export function classifyCoverage(coverage: number): Difficulty {
  if (coverage >= EXTENSIVE_THRESHOLD) return "facil";
  if (coverage >= INTENSIVE_THRESHOLD) return "optimo";
  return "dificil";
}

export function isKnown(word: string, known: ReadonlySet<string>): boolean {
  return baseForms(word).some((f) => known.has(f));
}

export function analyzeCoverage(text: string, known: ReadonlySet<string>): CoverageReport {
  const tokens = tokenize(text);
  const unknown = new Set<string>();
  let knownCount = 0;

  for (const t of tokens) {
    // Los números y los nombres propios a mitad de frase no penalizan la cobertura.
    if (isKnown(t.normalized, known) || isLikelyProperNoun(text, t.index, t.surface)) {
      knownCount++;
    } else {
      unknown.add(t.normalized);
    }
  }

  const coverage = tokens.length === 0 ? 1 : knownCount / tokens.length;
  return {
    totalWords: tokens.length,
    knownWords: knownCount,
    coverage,
    difficulty: classifyCoverage(coverage),
    unknown: [...unknown],
  };
}

function isLikelyProperNoun(text: string, index: number, surface: string): boolean {
  if (!/^[A-Z]/.test(surface) || surface === "I") return false;
  const before = text.slice(0, index).trimEnd();
  return before.length > 0 && !/[.!?"“]$/.test(before);
}

/** Ordena textos para recomendar primero los de la zona óptima (95–98 %). */
export function rankByCoverage<T>(
  items: T[],
  getText: (item: T) => string,
  known: ReadonlySet<string>,
  target = 0.965,
): Array<{ item: T; report: CoverageReport }> {
  return items
    .map((item) => ({ item, report: analyzeCoverage(getText(item), known) }))
    .sort(
      (a, b) =>
        Math.abs(a.report.coverage - target) - Math.abs(b.report.coverage - target),
    );
}
