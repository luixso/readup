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

export function CultureBadge({ label = "Cultura" }: { label?: string }) {
  return <span className="badge culture">{label}</span>;
}

export function MusicBadge({ label = "Música" }: { label?: string }) {
  return <span className="badge music">{label}</span>;
}

/** Etiqueta de la colección: técnica, cultura general, música o ninguna (vida diaria). */
export function TrackBadge({ track, label }: { track: "general" | "tech" | "culture" | "music"; label?: string }) {
  if (track === "tech") return <TechBadge label={label} />;
  if (track === "culture") return <CultureBadge label={label} />;
  if (track === "music") return <MusicBadge label={label} />;
  return null;
}
