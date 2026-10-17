"use client";

import type { Grade } from "@readup/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type StoredCard, dueCards, gradeCard } from "@/lib/deck";
import { speak } from "@/lib/speech";

const GRADES: Array<{ grade: Grade; label: string }> = [
  { grade: "again", label: "Otra vez" },
  { grade: "hard", label: "Difícil" },
  { grade: "good", label: "Bien" },
  { grade: "easy", label: "Fácil" },
];

export default function ReviewPage() {
  const [queue, setQueue] = useState<StoredCard[] | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => setQueue(dueCards()), []);

  if (queue === null) return null;

  const card = queue[0];
  if (!card) {
    return (
      <section className="card">
        <h1 style={{ marginTop: 0 }}>¡Todo repasado!</h1>
        <p className="muted">
          Toca palabras mientras lees y pulsa “+ Repasar” para añadirlas a tu mazo.
        </p>
        <Link href="/">Ir a la biblioteca →</Link>
      </section>
    );
  }

  function grade(g: Grade) {
    gradeCard(card!.id, g);
    setRevealed(false);
    setQueue(dueCards());
  }

  return (
    <>
      <p className="muted">{queue.length} pendientes</p>
      <section className="card" style={{ textAlign: "center" }}>
        <h1 style={{ margin: "8px 0" }}>{card.term}</h1>
        <p className="muted">“{card.context}”</p>
        <button onClick={() => speak(card.term, 0.8)}>🔊</button>
        {revealed ? (
          <>
            <p style={{ fontSize: "1.3rem" }}>{card.es}</p>
            <div className="row" style={{ justifyContent: "center" }}>
              {GRADES.map((g) => (
                <button key={g.grade} onClick={() => grade(g.grade)}>
                  {g.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p>
            <button className="primary" onClick={() => setRevealed(true)}>
              Mostrar significado
            </button>
          </p>
        )}
      </section>
    </>
  );
}
