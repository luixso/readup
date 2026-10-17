import type { Cefr } from "@readup/core";

const LEVEL_CLASS: Record<Cefr, string> = {
  A2: "lv-a2",
  "A2+": "lv-a2p",
  B1: "lv-b1",
  "B1+": "lv-b1p",
  B2: "lv-b2",
};

/** Etiqueta discreta con un punto de color: el color identifica el nivel o el área técnica. */
export function LevelBadge({ level }: { level: Cefr }) {
  return <span className={`badge ${LEVEL_CLASS[level]}`}>{level}</span>;
}

export function TechBadge({ label = "Técnico" }: { label?: string }) {
  return <span className="badge tech">{label}</span>;
}
