/**
 * Fusión del progreso entre dispositivos. Nunca se pierde avance:
 * - días de racha: unión;
 * - lecturas y documentos: unión, gana el registro más reciente;
 * - tarjetas: unión, gana la que se modificó (añadió o repasó) más tarde;
 * - letras pegadas por el usuario: unión, gana la edición más reciente (borrar = texto vacío).
 */
export interface Timestamped {
  /** ISO 8601. */
  at: string;
}

export interface SyncCard {
  id: string;
  updatedAt?: string;
}

export interface SyncState<C extends SyncCard = SyncCard, R extends Timestamped = Timestamped, D extends Timestamped = Timestamped> {
  completed: Record<string, R>;
  docs: Record<string, D>;
  days: string[];
  cards: C[];
  lyrics?: Record<string, Timestamped>;
}

function newer<T extends Timestamped>(a: T | undefined, b: T | undefined): T {
  if (!a) return b!;
  if (!b) return a;
  return b.at > a.at ? b : a;
}

function mergeRecords<T extends Timestamped>(a: Record<string, T>, b: Record<string, T>): Record<string, T> {
  const out: Record<string, T> = { ...a };
  for (const [key, value] of Object.entries(b)) out[key] = newer(out[key], value);
  return out;
}

export function mergeCards<C extends SyncCard>(a: C[], b: C[]): C[] {
  const byId = new Map<string, C>();
  for (const card of [...a, ...b]) {
    const current = byId.get(card.id);
    if (!current || (card.updatedAt ?? "") > (current.updatedAt ?? "")) byId.set(card.id, card);
  }
  return [...byId.values()];
}

export function mergeState<C extends SyncCard, R extends Timestamped, D extends Timestamped>(
  local: SyncState<C, R, D>,
  remote: Partial<SyncState<C, R, D>>,
): SyncState<C, R, D> {
  return {
    completed: mergeRecords(local.completed, remote.completed ?? {}),
    docs: mergeRecords(local.docs, remote.docs ?? {}),
    days: [...new Set([...local.days, ...(remote.days ?? [])])].sort(),
    cards: mergeCards(local.cards, remote.cards ?? []),
    lyrics: mergeRecords(local.lyrics ?? {}, remote.lyrics ?? {}),
  };
}
