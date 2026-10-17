/** Respuesta del usuario al repasar una tarjeta. */
export type Grade = "again" | "hard" | "good" | "easy";

export interface CardState {
  /** Factor de facilidad (SM-2), mínimo 1.3. */
  ease: number;
  /** Intervalo actual en días. */
  intervalDays: number;
  reps: number;
  lapses: number;
  dueAt: Date;
}

/**
 * Interfaz común para poder cambiar de algoritmo (p. ej. a FSRS) sin tocar la app.
 */
export interface Scheduler {
  newCard(now: Date): CardState;
  review(card: CardState, grade: Grade, now: Date): CardState;
}

const DAY_MS = 24 * 60 * 60 * 1000;
const MIN_EASE = 1.3;

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * DAY_MS);
}

/** Variante de SM-2 con cuatro botones, como Anki. */
export const sm2: Scheduler = {
  newCard(now) {
    return { ease: 2.5, intervalDays: 0, reps: 0, lapses: 0, dueAt: now };
  },

  review(card, grade, now) {
    if (grade === "again") {
      return {
        ease: Math.max(MIN_EASE, card.ease - 0.2),
        intervalDays: 0,
        reps: 0,
        lapses: card.lapses + 1,
        // Volver a ver en 10 minutos dentro de la misma sesión.
        dueAt: new Date(now.getTime() + 10 * 60 * 1000),
      };
    }

    const easeDelta = { hard: -0.15, good: 0, easy: 0.15 }[grade];
    const ease = Math.max(MIN_EASE, card.ease + easeDelta);

    let intervalDays: number;
    if (card.reps === 0) {
      intervalDays = grade === "easy" ? 4 : 1;
    } else if (card.reps === 1) {
      intervalDays = grade === "hard" ? 3 : grade === "good" ? 6 : 8;
    } else {
      const multiplier = grade === "hard" ? 1.2 : grade === "good" ? ease : ease * 1.3;
      intervalDays = Math.max(card.intervalDays + 1, Math.round(card.intervalDays * multiplier));
    }

    return {
      ease,
      intervalDays,
      reps: card.reps + 1,
      lapses: card.lapses,
      dueAt: addDays(now, intervalDays),
    };
  },
};

export function isDue(card: CardState, now: Date): boolean {
  return card.dueAt.getTime() <= now.getTime();
}
