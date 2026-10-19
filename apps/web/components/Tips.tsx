"use client";

import { TIPS, tipIndexOfTheDay } from "@readup/content";
import { useEffect, useRef, useState } from "react";

/**
 * Tips de estudio en carrusel. Empieza en el tip del día, que depende de la fecha
 * del usuario, así que la posición inicial se calcula en el navegador.
 */
export function Tips() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const i = tipIndexOfTheDay(new Date());
    setToday(i);
    setIndex(i);
    const track = trackRef.current;
    if (track) track.scrollLeft = i * track.clientWidth;
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + TIPS.length) % TIPS.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <section className="tips" aria-roledescription="carrusel" aria-label="Tips">
      <h2 className="label">Tips</h2>
      <div className="tip">
        <div className="tip-head">
          <span className="eyebrow">{index === today ? "Tip del día" : "Tips"}</span>
          <span className="tip-count muted small">
            {index + 1} / {TIPS.length}
          </span>
        </div>

        <div
          ref={trackRef}
          className="tip-track"
          onScroll={onScroll}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              goTo(index + 1);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              goTo(index - 1);
            }
          }}
        >
          {TIPS.map((tip, i) => (
            <article
              key={tip.title}
              className="tip-slide"
              aria-roledescription="tip"
              aria-label={`${i + 1} de ${TIPS.length}`}
              aria-hidden={i !== index}
            >
              <p className="tip-title">{tip.title}</p>
              <p className="tip-body">{tip.body}</p>
            </article>
          ))}
        </div>

        <div className="tip-nav">
          <button type="button" className="btn round small" onClick={() => goTo(index - 1)} aria-label="Tip anterior">
            ←
          </button>
          <button type="button" className="btn round small" onClick={() => goTo(index + 1)} aria-label="Tip siguiente">
            →
          </button>
          {today !== null && index !== today && (
            <button type="button" className="btn ghost small" onClick={() => goTo(today)}>
              Volver al de hoy
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
