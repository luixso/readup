import { describe, expect, it } from "vitest";
import { mergeState } from "../src";

describe("mergeState", () => {
  const phone = {
    completed: { a: { at: "2026-10-10T10:00:00Z", score: 2 } },
    docs: {},
    days: ["2026-10-10", "2026-10-12"],
    cards: [{ id: "deploy", updatedAt: "2026-10-12T09:00:00Z", interval: 6 }],
  };
  const laptop = {
    completed: { a: { at: "2026-10-11T10:00:00Z", score: 3 }, b: { at: "2026-10-11T11:00:00Z", score: 1 } },
    docs: { "https://x": { at: "2026-10-11T12:00:00Z" } },
    days: ["2026-10-11"],
    cards: [
      { id: "deploy", updatedAt: "2026-10-11T09:00:00Z", interval: 1 },
      { id: "cache", updatedAt: "2026-10-11T09:00:00Z", interval: 1 },
    ],
  };

  it("une todo y conserva lo más reciente", () => {
    const m = mergeState(phone, laptop);
    expect(m.completed.a?.score).toBe(3);
    expect(Object.keys(m.completed).sort()).toEqual(["a", "b"]);
    expect(Object.keys(m.docs)).toEqual(["https://x"]);
    expect(m.days).toEqual(["2026-10-10", "2026-10-11", "2026-10-12"]);
    expect(m.cards.find((c) => c.id === "deploy")?.interval).toBe(6);
    expect(m.cards).toHaveLength(2);
  });

  it("es simétrica e idempotente", () => {
    const ab = mergeState(phone, laptop);
    const ba = mergeState(laptop, phone);
    expect(ab.days).toEqual(ba.days);
    expect(ab.completed).toEqual(ba.completed);
    expect(mergeState(ab, ab)).toEqual(ab);
  });

  it("acepta un estado remoto vacío", () => {
    expect(mergeState(phone, {})).toEqual({ ...phone, days: [...phone.days].sort(), lyrics: {} });
  });

  it("conserva la edición más reciente de cada letra", () => {
    const m = mergeState(
      { ...phone, lyrics: { "a/1": { at: "2026-10-12T10:00:00Z" }, "a/2": { at: "2026-10-10T10:00:00Z" } } },
      { lyrics: { "a/1": { at: "2026-10-11T10:00:00Z" }, "a/3": { at: "2026-10-11T10:00:00Z" } } },
    );
    expect(Object.keys(m.lyrics ?? {}).sort()).toEqual(["a/1", "a/2", "a/3"]);
    expect(m.lyrics?.["a/1"]?.at).toBe("2026-10-12T10:00:00Z");
  });
});
