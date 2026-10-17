"use client";

import type { GradedText } from "@readup/content";
import Link from "next/link";
import { useState } from "react";
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

const ICONS: Record<string, string> = {
  trabajo: "💼",
  "vida diaria": "🛒",
  viajes: "🧳",
  familia: "🍞",
  tecnología: "📵",
  superación: "🚗",
  relato: "🌙",
  salud: "😴",
  "Soporte IT": "🎧",
  Redes: "🌐",
  DevOps: "⚙️",
  Cloud: "☁️",
  Seguridad: "🔒",
  Agile: "🗓️",
};

/** Biblioteca con filtros por nivel o categoría. */
export function Library({ texts, filters }: { texts: TextSummary[]; filters: string[] }) {
  const [filter, setFilter] = useState("Todos");
  const progress = useProgress();
  const visible = texts.filter(
    (t) => filter === "Todos" || t.cefr === filter || t.label === filter,
  );

  return (
    <>
      <div className="filters">
        {["Todos", ...filters].map((f) => (
          <button
            key={f}
            className={`filter ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid">
        {visible.map((t) => {
          const done = progress?.completed[t.id];
          const tech = t.track === "tech";
          return (
            <Link key={t.id} href={`/leer/${t.id}`}>
              <article className="card text-card">
                <div className={`cover ${tech ? "tech" : ""}`}>{ICONS[t.label] ?? "📖"}</div>
                <div className="chips">
                  <span className={`chip ${tech ? "tech" : ""}`}>{t.cefr}</span>
                  <span className="chip neutral">{t.label}</span>
                </div>
                <h3>{t.title}</h3>
                <p className="es">{t.titleEs}</p>
                <div className="meta">
                  <span>
                    {t.words} palabras · {Math.max(1, Math.round(t.words / 100))} min
                  </span>
                  {done && <span className="chip ok">✓ {done.score} correctas</span>}
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </>
  );
}
