import type { Cefr } from "@readup/core";

export interface Gloss {
  /** Palabra o chunk tal como aparece (en minúsculas). */
  term: string;
  es: string;
  note?: string;
}

export interface Question {
  prompt: string;
  options: string[];
  answerIndex: number;
}

/**
 * "general": vida diaria. "tech": inglés técnico para IT, DevOps y redes.
 * "culture": cultura general (historia, ciencia, arte, naturaleza, sociedad).
 */
export type Track = "general" | "tech" | "culture";

export type TechCategory = "DevOps" | "Redes" | "Cloud" | "Seguridad" | "Soporte IT" | "Agile";

export type CultureCategory = "Historia" | "Ciencia" | "Arte" | "Naturaleza" | "Sociedad";

export interface GradedText {
  id: string;
  track: Track;
  /** Solo para textos técnicos y de cultura general. */
  category?: TechCategory | CultureCategory;
  title: string;
  titleEs: string;
  cefr: Cefr;
  topic: string;
  body: string;
  glossary: Gloss[];
  questions: Question[];
  /** Frases clave para practicar shadowing. */
  shadowing: string[];
}
