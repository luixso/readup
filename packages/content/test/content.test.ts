import { tokenize } from "@readup/core";
import { describe, expect, it } from "vitest";
import { CULTURE_CATEGORIES, TECH_CATEGORIES, TEXTS } from "../src";

// Validación automática de cada texto antes de publicarlo.
describe.each(TEXTS)("texto $id", (text) => {
  it("tiene una longitud adecuada para una sesión (100–400 palabras)", () => {
    const n = tokenize(text.body).length;
    expect(n).toBeGreaterThanOrEqual(100);
    expect(n).toBeLessThanOrEqual(400);
  });

  it("todas las glosas aparecen en el texto", () => {
    const body = text.body.toLowerCase();
    for (const g of text.glossary) expect(body, g.term).toContain(g.term);
  });

  it("las preguntas tienen una respuesta válida", () => {
    for (const q of text.questions) {
      expect(q.answerIndex).toBeGreaterThanOrEqual(0);
      expect(q.answerIndex).toBeLessThan(q.options.length);
    }
  });

  it("tiene un id único", () => {
    expect(TEXTS.filter((t) => t.id === text.id)).toHaveLength(1);
  });
});

describe.each(TEXTS)("texto $id (metadatos)", (text) => {
  it("cada colección usa sus propias categorías", () => {
    if (text.track === "tech") expect(TECH_CATEGORIES).toContain(text.category);
    else if (text.track === "culture") expect(CULTURE_CATEGORIES).toContain(text.category);
    else expect(text.category).toBeUndefined();
  });

  it("las frases de shadowing no están vacías", () => {
    expect(text.shadowing.length).toBeGreaterThan(0);
  });
});

import { GRAMMAR, TIPS, tipOfTheDay } from "../src";

describe("gramática", () => {
  it("ids únicos y todos los temas completos", () => {
    expect(new Set(GRAMMAR.map((g) => g.id)).size).toBe(GRAMMAR.length);
    for (const g of GRAMMAR) {
      expect(g.uses.length, g.id).toBeGreaterThan(0);
      expect(g.examples.length, g.id).toBeGreaterThan(0);
      expect(g.mistakes.length, g.id).toBeGreaterThan(0);
    }
  });

  it("cubre A2 y B1", () => {
    expect(GRAMMAR.filter((g) => g.level === "A2").length).toBeGreaterThanOrEqual(8);
    expect(GRAMMAR.filter((g) => g.level === "B1").length).toBeGreaterThanOrEqual(8);
  });
});

describe("tips", () => {
  it("el tip cambia cada día y es estable", () => {
    const a = tipOfTheDay(new Date(2026, 9, 17, 8));
    expect(tipOfTheDay(new Date(2026, 9, 17, 22))).toBe(a);
    expect(tipOfTheDay(new Date(2026, 9, 18))).not.toBe(a);
    expect(TIPS.length).toBeGreaterThanOrEqual(30);
  });
});

import { tokenize as tokenizeWords } from "@readup/core";
import { lookupWord } from "../src";

describe("diccionario", () => {
  it("traduce todas las palabras de todas las lecturas", () => {
    const missing = new Set<string>();
    for (const t of TEXTS) for (const tok of tokenizeWords(t.body)) if (!lookupWord(tok.normalized)) missing.add(tok.normalized);
    expect([...missing].sort()).toEqual([]);
  });

  it("resuelve formas derivadas a su forma base", () => {
    expect(lookupWord("walked")).toMatchObject({ base: "walk" });
    expect(lookupWord("bigger")).toMatchObject({ base: "big" });
    expect(lookupWord("went")?.es).toContain("go");
    expect(lookupWord("Athens")).toMatchObject({ properNoun: true });
  });
});
