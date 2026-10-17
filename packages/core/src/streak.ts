/** Fecha local en formato AAAA-MM-DD (la racha se cuenta por días del usuario, no UTC). */
export function dayKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function shift(key: string, days: number): string {
  const [y, m, d] = key.split("-").map(Number) as [number, number, number];
  return dayKey(new Date(y, m - 1, d + days));
}

export interface StreakInfo {
  /** Días seguidos con al menos una lectura. */
  current: number;
  best: number;
  doneToday: boolean;
}

/**
 * Racha de días con al menos una lectura completada.
 * Si hoy todavía no se ha leído, la racha de ayer sigue viva hasta medianoche.
 */
export function computeStreak(days: Iterable<string>, today: string): StreakInfo {
  const set = new Set(days);
  const doneToday = set.has(today);

  let current = 0;
  let cursor = doneToday ? today : shift(today, -1);
  while (set.has(cursor)) {
    current++;
    cursor = shift(cursor, -1);
  }

  let best = 0;
  for (const day of set) {
    if (set.has(shift(day, -1))) continue; // no es el inicio de una racha
    let length = 0;
    let c = day;
    while (set.has(c)) {
      length++;
      c = shift(c, 1);
    }
    best = Math.max(best, length);
  }

  return { current, best, doneToday };
}

/** Los últimos `n` días terminando hoy, del más antiguo al más reciente. */
export function lastDays(today: string, n: number): string[] {
  return Array.from({ length: n }, (_, i) => shift(today, i - n + 1));
}
