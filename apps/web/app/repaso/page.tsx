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
        <section className="card flashcard">
          <div style={{ fontSize: "3rem" }}>🎉</div>
          <h1 style={{ fontSize: "1.8rem" }}>¡Todo repasado!</h1>
          <p className="muted">Toca palabras mientras lees y pulsa “+ Repasar” para añadirlas a tu mazo.</p>
          <Link href="/" className="btn primary" style={{ marginTop: 12 }}>
            Ir a las lecturas
          </Link>
        </section>
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
      <div className="section-head">
        <h2 style={{ marginTop: 0 }}>Repaso</h2>
        <span className="chip">{queue.length} pendientes</span>
      </div>
      <section className="card flashcard">
        <h1>{card.term}</h1>
        <button className="btn round" aria-label="Escuchar" onClick={() => speech.say(card.term, 0.8)}>
          🔊
        </button>
        <p className="muted" style={{ fontStyle: "italic" }}>“{card.context}”</p>
        {revealed ? (
          <>
            <p className="answer">{card.es}</p>
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
          <button className="btn primary" style={{ marginTop: 16 }} onClick={() => setRevealed(true)}>
            Mostrar significado
          </button>
        )}
      </section>
    </div>
  );
}
