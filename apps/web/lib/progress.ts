"use client";

import { useEffect, useState } from "react";

// Progreso local del MVP: textos completados y palabras leídas.
const KEY = "readup.progress.v1";

interface Progress {
  completed: Record<string, { words: number; score: number; at: string }>;
}

export function loadProgress(): Progress {
  try {
    return { completed: {}, ...(JSON.parse(localStorage.getItem(KEY) ?? "{}") as Partial<Progress>) };
  } catch {
    return { completed: {} };
  }
}

export function markCompleted(textId: string, words: number, score: number) {
  const progress = loadProgress();
  progress.completed[textId] = { words, score, at: new Date().toISOString() };
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    // Ignorar.
  }
}

/** Se lee tras montar para no romper la hidratación del HTML estático. */
export function useProgress(): Progress | null {
  const [progress, setProgress] = useState<Progress | null>(null);
  useEffect(() => setProgress(loadProgress()), []);
  return progress;
}

export function wordsRead(progress: Progress): number {
  return Object.values(progress.completed).reduce((sum, c) => sum + c.words, 0);
}
