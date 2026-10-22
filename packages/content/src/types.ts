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
 * "music": fichas sobre discos de música en inglés (sección Música).
 */
export type Track = "general" | "tech" | "culture" | "music";

export type TechCategory = "DevOps" | "Redes" | "Cloud" | "Seguridad" | "Soporte IT" | "Agile";

export type CultureCategory = "Historia" | "Ciencia" | "Arte" | "Naturaleza" | "Sociedad" | "Filosofía";

/** En las fichas de música la categoría es el artista. */
export type MusicCategory = "The Police" | "Radiohead" | "Red Hot Chili Peppers";

export interface GradedText {
  id: string;
  track: Track;
  /** Solo para textos técnicos, de cultura general y de música. */
  category?: TechCategory | CultureCategory | MusicCategory;
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

/** Canción de un disco. Las letras no se incluyen: el usuario pega la suya en el lector. */
export interface Song {
  /** Número de pista (1, 2, 3…). */
  n: number;
  title: string;
  titleEs: string;
  /** De qué trata, en español y con palabras propias (sin citar la letra). */
  aboutEs: string;
  /** Instrumental: no hay letra que estudiar. */
  instrumental?: true;
}

export interface Album {
  id: string;
  artist: MusicCategory;
  title: string;
  year: number;
  /** Presentación del disco en español. */
  introEs: string;
  /** Fichas de lectura (GradedText con track "music") sobre el disco. */
  textIds: string[];
  songs: Song[];
}
