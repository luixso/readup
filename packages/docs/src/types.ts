/** Trozo de texto en línea: el código no se traduce ni se lee en voz alta. */
export interface Inline {
  t: string;
  code?: true;
}

export type DocBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; inlines: Inline[] }
  | { type: "list"; ordered: boolean; items: Inline[][] }
  | { type: "code"; text: string }
  | { type: "quote"; inlines: Inline[] }
  | { type: "table"; rows: string[][] };

export interface DocLink {
  text: string;
  url: string;
}

export interface ExtractedDoc {
  title: string;
  url: string;
  blocks: DocBlock[];
  /** Enlaces a otras páginas permitidas, para seguir leyendo dentro de la app. */
  links: DocLink[];
}

/** Texto plano de unos inlines, sin el código. */
export function proseText(inlines: Inline[]): string {
  return inlines
    .filter((i) => !i.code)
    .map((i) => i.t)
    .join("")
    .trim();
}
