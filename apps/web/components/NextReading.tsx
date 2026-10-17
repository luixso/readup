"use client";

import { TextRow, type TextSummary } from "@/components/Library";
import { useProgress } from "@/lib/progress";

/** Recomienda la primera lectura no completada (están ordenadas por nivel). */
export function NextReading({ texts }: { texts: TextSummary[] }) {
  const progress = useProgress();
  if (!progress) return <div className="list"><div className="row-link placeholder" /></div>;
  const next = texts.find((t) => !progress.completed[t.id]) ?? texts[0];
  return next ? <div className="list"><TextRow t={next} /></div> : null;
}
