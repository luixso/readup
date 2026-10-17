"use client";

import { dayKey, lastDays } from "@readup/core";
import { FlameIcon } from "@/components/Icons";
import { streakOf, useProgress } from "@/lib/progress";

const WEEKDAY = ["D", "L", "M", "X", "J", "V", "S"];

/** Racha compacta: días seguidos con al menos una lectura y los últimos 7 días. */
export function StreakBar() {
  const progress = useProgress();
  const today = dayKey(new Date());
  const week = lastDays(today, 7);
  const streak = progress ? streakOf(progress) : null;
  const done = new Set(progress?.days ?? []);

  return (
    <section className={`streak ${streak?.doneToday ? "on" : ""}`}>
      <span className="streak-count">
        <FlameIcon />
        <strong>{streak ? streak.current : "–"}</strong>
        <span className="muted">{streak?.current === 1 ? "día" : "días"}</span>
      </span>
      <span className="streak-week" aria-label="Últimos 7 días">
        {week.map((d) => {
          const [y, m, day] = d.split("-").map(Number) as [number, number, number];
          return (
            <span key={d} className={`streak-day ${done.has(d) ? "done" : ""} ${d === today ? "today" : ""}`}>
              {WEEKDAY[new Date(y, m - 1, day).getDay()]}
            </span>
          );
        })}
      </span>
      {streak && !streak.doneToday && <span className="streak-hint muted">Lee algo hoy</span>}
    </section>
  );
}
