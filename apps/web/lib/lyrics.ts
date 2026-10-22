"use client";

import { useEffect, useState } from "react";
import { LOCAL_CHANGE, emit, useSyncVersion } from "@/lib/events";

/*
 * Letras que el propio usuario pega en el lector de canciones. La app no incluye letras
 * (tienen derechos de autor): se guardan en este navegador y, con sesión, en su cuenta.
 */
const KEY = "readup.lyrics.v1";

export interface StoredLyrics {
  /** Letra en inglés. Vacía = borrada (así el borrado también se sincroniza). */
  en: string;
  /** Traducción opcional, línea a línea con la letra en inglés. */
  es: string;
  at: string;
}

export function songKey(albumId: string, n: number) {
  return `${albumId}/${n}`;
}

export function loadLyrics(): Record<string, StoredLyrics> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}") as Record<string, StoredLyrics>;
  } catch {
    return {};
  }
}

/** Guarda todas las letras. `notify: false` se usa al escribir datos que vienen de la nube. */
export function saveAllLyrics(all: Record<string, StoredLyrics>, notify = true) {
  try {
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    // Sin almacenamiento disponible: la letra dura solo esta sesión.
  }
  if (notify) emit(LOCAL_CHANGE);
}

export function saveLyrics(key: string, en: string, es: string) {
  saveAllLyrics({ ...loadLyrics(), [key]: { en: en.trim(), es: es.trim(), at: new Date().toISOString() } });
}

export function deleteLyrics(key: string) {
  saveLyrics(key, "", "");
}

/** Letras guardadas (null hasta montar, para no romper la hidratación). */
export function useLyrics(): Record<string, StoredLyrics> | null {
  const [all, setAll] = useState<Record<string, StoredLyrics> | null>(null);
  const version = useSyncVersion();
  useEffect(() => setAll(loadLyrics()), [version]);
  return all;
}
