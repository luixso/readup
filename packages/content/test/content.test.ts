import { tokenize } from "@readup/core";
import { describe, expect, it } from "vitest";
import { TECH_CATEGORIES, TEXTS } from "../src";

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
  it("los textos técnicos tienen categoría y los generales no", () => {
    if (text.track === "tech") expect(TECH_CATEGORIES).toContain(text.category);
    else expect(text.category).toBeUndefined();
  });

  it("las frases de shadowing no están vacías", () => {
    expect(text.shadowing.length).toBeGreaterThan(0);
  });
});
