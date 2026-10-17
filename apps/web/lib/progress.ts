"use client";

import { computeStreak, dayKey, type StreakInfo } from "@readup/core";
import { useEffect, useState } from "react";

// Progreso local del MVP: lecturas completadas, documentos leídos y días con lectura (racha).
const KEY = "readup.progress.v1";

export interface Progress {
  completed: Record<string, { words: number; score: number; at: string }>;
  docs: Record<string, { title: string; words: number; at: string }>;
  /** Días (AAAA-MM-DD, hora local) con al menos una lectura terminada. */
  days: string[];
}

const EMPTY: Progress = { completed: {}, docs: {}, days: [] };

export function loadProgress(): Progress {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY) ?? "{}") as Partial<Progress>;
    const progress = { ...EMPTY, ...stored };
    // Migración: los textos completados antes de existir la racha cuentan como días leídos.
    if (!stored.days) {
      progress.days = [...new Set(Object.values(progress.completed).map((c) => dayKey(new Date(c.at))))];
    }
    return progress;
  } catch {
    return { ...EMPTY };
  }
}

function save(progress: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    // Sin almacenamiento disponible: el progreso dura solo esta sesión.
  }
}

function addToday(progress: Progress) {
  const today = dayKey(new Date());
  if (!progress.days.includes(today)) progress.days.push(today);
}

export function markCompleted(textId: string, words: number, score: number) {
  const progress = loadProgress();
  progress.completed[textId] = { words, score, at: new Date().toISOString() };
  addToday(progress);
  save(progress);
}

export function markDocRead(url: string, title: string, words: number) {
  const progress = loadProgress();
  progress.docs[url] = { title, words, at: new Date().toISOString() };
  addToday(progress);
  save(progress);
}

/** Se lee tras montar para no romper la hidratación del HTML estático. */
export function useProgress(): Progress | null {
  const [progress, setProgress] = useState<Progress | null>(null);
  useEffect(() => setProgress(loadProgress()), []);
  return progress;
}

export function wordsRead(progress: Progress): number {
  return (
    Object.values(progress.completed).reduce((sum, c) => sum + c.words, 0) +
    Object.values(progress.docs).reduce((sum, d) => sum + d.words, 0)
  );
}

export function streakOf(progress: Progress): StreakInfo {
  return computeStreak(progress.days, dayKey(new Date()));
}
