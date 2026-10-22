"use client";

import type { GradedText } from "@readup/content";
import Link from "next/link";
import { useState } from "react";
import { LevelBadge, TrackBadge } from "@/components/Badge";
import { useProgress } from "@/lib/progress";

export interface TextSummary {
  id: string;
  title: string;
  titleEs: string;
  cefr: GradedText["cefr"];
  track: GradedText["track"];
  label: string;
  words: number;
}

const FILTERS = ["Todos", "A2", "A2+", "B1", "Cultura", "Filosofía", "Música", "Técnico"] as const;
type Filter = (typeof FILTERS)[number];

function matches(t: TextSummary, f: Filter) {
  if (f === "Todos") return true;
  if (f === "Técnico") return t.track === "tech";
  if (f === "Filosofía") return t.label === "Filosofía";
  if (f === "Cultura") return t.track === "culture" && t.label !== "Filosofía";
  if (f === "Música") return t.track === "music";
  return t.cefr === f;
}

export function TextRow({ t, done }: { t: TextSummary; done?: boolean }) {
  return (
    <Link href={`/leer/${t.id}`} className="row-link">
      <div className="row-main">
        <div className="row-title">
          {t.title}
          {done && <span className="check" aria-label="Completado">✓</span>}
        </div>
        <div className="row-sub">{t.titleEs}</div>
      </div>
      <div className="row-meta">
        <div className="badges">
          <LevelBadge level={t.cefr} />
          <TrackBadge track={t.track} label={t.label} />
        </div>
        <span className="muted small">{Math.max(1, Math.round(t.words / 100))} min</span>
      </div>
    </Link>
  );
}

export function Library({ texts, initial = "Todos" }: { texts: TextSummary[]; initial?: string }) {
  const [filter, setFilter] = useState<Filter>(
    (FILTERS as readonly string[]).includes(initial) ? (initial as Filter) : "Todos",
  );
  const progress = useProgress();

  return (
    <>
      <div className="filters" role="tablist">
        {FILTERS.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="list">
        {texts
          .filter((t) => matches(t, filter))
          .map((t) => (
            <TextRow key={t.id} t={t} done={!!progress?.completed[t.id]} />
          ))}
      </div>
    </>
  );
}
