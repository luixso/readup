"use client";

import { mergeState } from "@readup/core";
import type { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { type StoredCard, loadDeck, saveDeck } from "@/lib/deck";
import { LOCAL_CHANGE, SYNCED, emit } from "@/lib/events";
import { loadProgress, saveProgress } from "@/lib/progress";
import { getSupabase } from "@/lib/supabase";

/*
 * Sincronización: un documento JSON por usuario en la tabla `user_state`.
 * Al sincronizar se descarga lo remoto, se fusiona con lo local (sin perder avance)
 * y se sube el resultado. Ver supabase/schema.sql.
 */

export type SyncStatus =
  | { state: "idle" }
  | { state: "syncing" }
  | { state: "ok"; at: string }
  | { state: "error"; message: string };

let status: SyncStatus = { state: "idle" };
const listeners = new Set<(s: SyncStatus) => void>();

function setStatus(next: SyncStatus) {
  status = next;
  for (const l of listeners) l(next);
}

export function useSyncStatus(): SyncStatus {
  const [s, setS] = useState(status);
  useEffect(() => {
    listeners.add(setS);
    return () => void listeners.delete(setS);
  }, []);
  return s;
}

let running: Promise<void> | null = null;
let again = false;

/** Sincroniza ahora. Si ya hay una sincronización en curso, se encadena otra al terminar. */
export function syncNow(): Promise<void> {
  if (running) {
    again = true;
    return running;
  }
  running = doSync().finally(() => {
    running = null;
    if (again) {
      again = false;
      void syncNow();
    }
  });
  return running;
}

async function doSync() {
  const supabase = getSupabase();
  if (!supabase) return;
  const { data: auth } = await supabase.auth.getSession();
  const user = auth.session?.user;
  if (!user) return;

  setStatus({ state: "syncing" });
  try {
    const { data: row, error } = await supabase
      .from("user_state")
      .select("data")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;

    const progress = loadProgress();
    const local = { completed: progress.completed, docs: progress.docs, days: progress.days, cards: loadDeck() };
    const merged = mergeState<StoredCard, (typeof local.completed)[string], (typeof local.docs)[string]>(
      local,
      (row?.data ?? {}) as Partial<typeof local>,
    );

    saveProgress({ completed: merged.completed, docs: merged.docs, days: merged.days }, false);
    saveDeck(merged.cards, false);
    emit(SYNCED);

    const at = new Date().toISOString();
    const { error: upsertError } = await supabase
      .from("user_state")
      .upsert({ user_id: user.id, data: merged, updated_at: at });
    if (upsertError) throw upsertError;
    setStatus({ state: "ok", at });
  } catch (e) {
    setStatus({ state: "error", message: e instanceof Error ? e.message : "Error de sincronización" });
  }
}

export function useSession(): { session: Session | null; loading: boolean } {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      setLoading(false);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);
  return { session, loading };
}

/**
 * Montado una vez en el layout: sincroniza al iniciar sesión, al volver a la pestaña
 * y poco después de cada cambio local.
 */
export function SyncAgent() {
  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(() => void syncNow(), 1500);
    };
    const onVisible = () => document.visibilityState === "visible" && void syncNow();

    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "INITIAL_SESSION") void syncNow();
    });
    window.addEventListener(LOCAL_CHANGE, schedule);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearTimeout(timer);
      data.subscription.unsubscribe();
      window.removeEventListener(LOCAL_CHANGE, schedule);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);
  return null;
}
