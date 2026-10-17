"use client";

import { useEffect, useState } from "react";
import { dueCards, loadDeck } from "@/lib/deck";
import { useProgress, wordsRead } from "@/lib/progress";

export function HeroStats() {
  const progress = useProgress();
  const [cards, setCards] = useState<{ total: number; due: number } | null>(null);
  useEffect(() => setCards({ total: loadDeck().length, due: dueCards().length }), []);

  const stats = [
    { value: progress ? wordsRead(progress).toLocaleString("es") : "–", label: "palabras leídas" },
    { value: progress ? Object.keys(progress.completed).length : "–", label: "textos completados" },
    { value: cards ? cards.due : "–", label: `para repasar${cards ? ` (de ${cards.total})` : ""}` },
  ];

  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.label} className="stat">
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
