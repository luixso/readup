"use client";

import { type CardState, type Grade, isDue, sm2 } from "@readup/core";

export interface StoredCard {
  id: string;
  term: string;
  es: string;
  context: string;
  textId: string;
  state: Omit<CardState, "dueAt"> & { dueAt: string };
}

// Estado local del MVP. En v0.2 se sincroniza con la base de datos (docs/03-arquitectura.md).
const KEY = "readup.deck.v1";

export function loadDeck(): StoredCard[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]") as StoredCard[];
  } catch {
    return [];
  }
}

function saveDeck(deck: StoredCard[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(deck));
  } catch {
    // Sin almacenamiento disponible (modo privado): la sesión sigue funcionando en memoria.
  }
}

function toState(card: StoredCard): CardState {
  return { ...card.state, dueAt: new Date(card.state.dueAt) };
}

function fromState(state: CardState): StoredCard["state"] {
  return { ...state, dueAt: state.dueAt.toISOString() };
}

export function addCard(input: Omit<StoredCard, "id" | "state">): boolean {
  const deck = loadDeck();
  const id = input.term.toLowerCase();
  if (deck.some((c) => c.id === id)) return false;
  deck.push({ ...input, id, state: fromState(sm2.newCard(new Date())) });
  saveDeck(deck);
  return true;
}

export function dueCards(now = new Date()): StoredCard[] {
  return loadDeck().filter((c) => isDue(toState(c), now));
}

export function gradeCard(id: string, grade: Grade, now = new Date()) {
  const deck = loadDeck().map((c) =>
    c.id === id ? { ...c, state: fromState(sm2.review(toState(c), grade, now)) } : c,
  );
  saveDeck(deck);
}
