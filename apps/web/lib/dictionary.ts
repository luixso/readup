"use client";

import { FALSE_FRIENDS, TECH_TERMS, TEXTS, lookupWord } from "@readup/content";
import { baseForms } from "@readup/core";

/**
 * Diccionario sin conexión construido con las glosas de todas las lecturas,
 * los términos técnicos y los falsos amigos. Se consulta antes que el traductor en línea.
 */
let dict: Map<string, { es: string; note?: string }> | null = null;

function build() {
  const map = new Map<string, { es: string; note?: string }>();
  for (const t of TEXTS) for (const g of t.glossary) if (!map.has(g.term)) map.set(g.term, { es: g.es, note: g.note });
  for (const t of TECH_TERMS) map.set(t.term.toLowerCase(), { es: t.es, note: t.tip });
  for (const f of FALSE_FRIENDS) if (!map.has(f.en)) map.set(f.en, { es: f.means });
  return map;
}

export function lookupOffline(word: string): { es: string; note?: string } | undefined {
  dict ??= build();
  for (const form of baseForms(word)) {
    const hit = dict.get(form);
    if (hit) return hit;
  }
  // Diccionario general (cubre todas las palabras de las lecturas y el vocabulario frecuente).
  const entry = lookupWord(word);
  if (entry) {
    const note = entry.base ? `Forma de «${entry.base}».` : entry.properNoun ? "Nombre propio." : undefined;
    return { es: entry.es, note };
  }
  return undefined;
}

const CACHE_KEY = "readup.translations.v1";

function cache(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) ?? "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

/** Traducción en línea (vía /api/translate), cacheada en el navegador. */
export async function translateOnline(word: string): Promise<string | undefined> {
  const key = word.toLowerCase();
  const cached = cache()[key];
  if (cached) return cached;
  try {
    const res = await fetch(`/api/translate?q=${encodeURIComponent(key)}`);
    if (!res.ok) return undefined;
    const { es } = (await res.json()) as { es?: string };
    if (es) {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ ...cache(), [key]: es }));
      } catch {
        // Ignorar.
      }
    }
    return es;
  } catch {
    return undefined;
  }
}
