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

export interface GradedText {
  id: string;
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
