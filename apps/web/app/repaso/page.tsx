"use client";

import type { Grade } from "@readup/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type StoredCard, dueCards, gradeCard } from "@/lib/deck";
import { useSpeech } from "@/lib/speech";

const GRADES: Array<{ grade: Grade; label: string; hint: string }> = [
  { grade: "again", label: "Otra vez", hint: "10 min" },
  { grade: "hard", label: "Difícil", hint: "pronto" },
  { grade: "good", label: "Bien", hint: "días" },
  { grade: "easy", label: "Fácil", hint: "más tarde" },
];

export default function ReviewPage() {
  const speech = useSpeech();
  const [queue, setQueue] = useState<StoredCard[] | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => setQueue(dueCards()), []);

  if (queue === null) return null;

  const card = queue[0];
  if (!card) {
    return (
      <div className="narrow">
        <h1 className="title">Repaso</h1>
        <p className="subtitle">No tienes palabras pendientes. Toca palabras mientras lees y pulsa «+ Repasar».</p>
        <Link href="/lecturas" className="btn primary">Ir a las lecturas</Link>
      </div>
    );
  }

  function grade(g: Grade) {
    gradeCard(card!.id, g);
    setRevealed(false);
    setQueue(dueCards());
  }

  return (
    <div className="narrow">
      <div className="badges">
        <span className="muted small">{queue.length} pendientes</span>
      </div>
      <section className="flashcard">
        <p className="flash-term">{card.term}</p>
        <button className="btn round" aria-label="Escuchar" onClick={() => speech.say(card.term, 0.75)}>
          🔊
        </button>
        <p className="context">“{card.context}”</p>
        {revealed ? (
          <>
            <p className="flash-answer">{card.es}</p>
            <div className="grades">
              {GRADES.map((g) => (
                <button key={g.grade} className="btn" onClick={() => grade(g.grade)}>
                  {g.label}
                  <small>{g.hint}</small>
                </button>
              ))}
            </div>
          </>
        ) : (
          <button className="btn primary" onClick={() => setRevealed(true)}>
            Mostrar significado
          </button>
        )}
      </section>
    </div>
  );
}
