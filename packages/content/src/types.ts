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

/** "general": vida diaria. "tech": inglés técnico para IT, DevOps y redes. */
export type Track = "general" | "tech";

export type TechCategory = "DevOps" | "Redes" | "Cloud" | "Seguridad" | "Soporte IT" | "Agile";

export interface GradedText {
  id: string;
  track: Track;
  /** Solo para textos técnicos. */
  category?: TechCategory;
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
