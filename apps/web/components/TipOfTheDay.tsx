"use client";

import { tipOfTheDay } from "@readup/content";
import { useEffect, useState } from "react";

/** El tip depende de la fecha del usuario, así que se calcula en el navegador. */
export function TipOfTheDay() {
  const [tip, setTip] = useState<ReturnType<typeof tipOfTheDay> | null>(null);
  useEffect(() => setTip(tipOfTheDay(new Date())), []);
  return (
    <section className="tip">
      <span className="eyebrow">Tip del día</span>
      <p className="tip-title">{tip?.title ?? " "}</p>
      <p className="tip-body">{tip?.body ?? " "}</p>
    </section>
  );
}
