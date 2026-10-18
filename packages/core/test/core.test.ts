import { describe, expect, it } from "vitest";
import {
  analyzeCoverage,
  baseForms,
  buildDailySession,
  classifyCoverage,
  isDue,
  minutesByStrand,
  phaseForWeek,
  sm2,
  splitSentences,
  tokenize,
} from "../src";

describe("tokenize", () => {
  it("reconoce palabras con acentos", () => {
    expect(tokenize("Lucía drinks café").map((t) => t.normalized)).toEqual(["lucía", "drinks", "café"]);
  });

  it("cuenta las contracciones como una palabra", () => {
    expect(tokenize("I don't know, it's fine.").map((t) => t.normalized)).toEqual([
      "i",
      "don't",
      "know",
      "it's",
      "fine",
    ]);
  });

  it("encuentra la forma base de verbos regulares y plurales", () => {
    expect(baseForms("walked")).toContain("walk");
    expect(baseForms("making")).toContain("make");
    expect(baseForms("stopped")).toContain("stop");
    expect(baseForms("cities")).toContain("city");
    expect(baseForms("bigger")).toContain("big");
    expect(baseForms("largest")).toContain("large");
    expect(baseForms("easier")).toContain("easy");
  });
});

describe("splitSentences", () => {
  it("separa frases y conserva su posición", () => {
    const text = 'She said "Hi!" Then she left.\n\nThe end';
    const s = splitSentences(text);
    expect(s.map((x) => x.text)).toEqual(['She said "Hi!"', "Then she left.", "The end"]);
    for (const x of s) expect(text.slice(x.start, x.end)).toBe(x.text);
  });
});

describe("coverage", () => {
  const known = new Set(["i", "walk", "to", "the", "park", "every", "day"]);

  it("calcula la cobertura y las palabras desconocidas", () => {
    const r = analyzeCoverage("I walked to the beautiful park every day.", known);
    expect(r.totalWords).toBe(8);
    expect(r.knownWords).toBe(7);
    expect(r.unknown).toEqual(["beautiful"]);
  });

  it("no penaliza nombres propios a mitad de frase", () => {
    const r = analyzeCoverage("I walk to the park with Maria.", new Set([...known, "with"]));
    expect(r.coverage).toBe(1);
  });

  it("clasifica según los umbrales de Hu & Nation", () => {
    expect(classifyCoverage(0.99)).toBe("facil");
    expect(classifyCoverage(0.96)).toBe("optimo");
    expect(classifyCoverage(0.9)).toBe("dificil");
  });
});

describe("sm2", () => {
  const now = new Date("2026-01-01T10:00:00Z");

  it("programa intervalos crecientes con 'good'", () => {
    let card = sm2.newCard(now);
    const intervals: number[] = [];
    for (let i = 0; i < 4; i++) {
      card = sm2.review(card, "good", card.dueAt);
      intervals.push(card.intervalDays);
    }
    expect(intervals).toEqual([1, 6, 15, 38]);
  });

  it("'again' reinicia la tarjeta y baja la facilidad", () => {
    let card = sm2.review(sm2.newCard(now), "good", now);
    card = sm2.review(card, "again", now);
    expect(card.reps).toBe(0);
    expect(card.lapses).toBe(1);
    expect(card.ease).toBeCloseTo(2.3);
    expect(isDue(card, new Date(now.getTime() + 11 * 60 * 1000))).toBe(true);
  });

  it("la facilidad nunca baja de 1.3", () => {
    let card = sm2.newCard(now);
    for (let i = 0; i < 20; i++) card = sm2.review(card, "again", now);
    expect(card.ease).toBe(1.3);
  });
});

describe("curriculum", () => {
  it("asigna la fase por semana", () => {
    expect(phaseForWeek(1).id).toBe(1);
    expect(phaseForWeek(20).id).toBe(2);
    expect(phaseForWeek(52).to).toBe("B2");
    expect(phaseForWeek(99).id).toBe(4);
  });

  it.each([20, 30, 45, 60])("la sesión de %i minutos suma exacto", (minutes) => {
    const session = buildDailySession(10, minutes);
    expect(session.reduce((s, b) => s + b.minutes, 0)).toBe(minutes);
  });

  it("en fase 4 se dedica más tiempo al output que en fase 1", () => {
    const early = minutesByStrand(buildDailySession(1, 60));
    const late = minutesByStrand(buildDailySession(45, 60));
    expect(late.output).toBeGreaterThan(early.output);
  });
});
