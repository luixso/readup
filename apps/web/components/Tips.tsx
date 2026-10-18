"use client";

import { TIPS } from "@readup/content";
import { useEffect, useState } from "react";

const VISIBLE = 3;

/** Tips de estudio: se muestran 3 (rotan cada día) y se pueden desplegar todos. */
export function Tips() {
  const [start, setStart] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => setStart(Math.floor(Date.now() / 86_400_000) % TIPS.length), []);

  const ordered = [...TIPS.slice(start), ...TIPS.slice(0, start)];
  const shown = open ? ordered : ordered.slice(0, VISIBLE);

  return (
    <section className="tips">
      <h2 className="label">Tips</h2>
      <div className="list">
        {shown.map((tip) => (
          <div key={tip.title} className="tip-row">
            <p className="tip-title">{tip.title}</p>
            <p className="tip-body">{tip.body}</p>
          </div>
        ))}
      </div>
      <button className="btn small tips-more" onClick={() => setOpen((o) => !o)}>
        {open ? "Ver menos" : `Ver los ${TIPS.length} tips`}
      </button>
    </section>
  );
}
