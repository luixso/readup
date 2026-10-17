import { describe, expect, it } from "vitest";
import { computeStreak, dayKey, lastDays } from "../src";

describe("streak", () => {
  it("cuenta días seguidos terminando hoy", () => {
    const r = computeStreak(["2026-10-15", "2026-10-16", "2026-10-17"], "2026-10-17");
    expect(r).toEqual({ current: 3, best: 3, doneToday: true });
  });

  it("mantiene la racha de ayer si hoy aún no se ha leído", () => {
    const r = computeStreak(["2026-10-15", "2026-10-16"], "2026-10-17");
    expect(r.current).toBe(2);
    expect(r.doneToday).toBe(false);
  });

  it("se rompe si falta un día", () => {
    const r = computeStreak(["2026-10-10", "2026-10-11", "2026-10-12", "2026-10-15"], "2026-10-17");
    expect(r.current).toBe(0);
    expect(r.best).toBe(3);
  });

  it("cruza cambios de mes", () => {
    expect(computeStreak(["2026-09-30", "2026-10-01"], "2026-10-01").current).toBe(2);
  });

  it("lastDays devuelve los últimos n días", () => {
    expect(lastDays("2026-10-02", 3)).toEqual(["2026-09-30", "2026-10-01", "2026-10-02"]);
    expect(dayKey(new Date(2026, 0, 5))).toBe("2026-01-05");
  });
});
