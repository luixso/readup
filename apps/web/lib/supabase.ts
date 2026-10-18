"use client";

import { type SupabaseClient, createClient } from "@supabase/supabase-js";

/*
 * Cuentas y sincronización con Supabase (Auth + Postgres).
 * Sin variables de entorno la app funciona igual, solo en local (ver docs/06-cuentas-supabase.md).
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const authEnabled = Boolean(url && anonKey);

/** Proveedores OAuth activados en Supabase, p. ej. "github,google". El email siempre está disponible. */
export const oauthProviders = (process.env.NEXT_PUBLIC_AUTH_PROVIDERS ?? "")
  .split(",")
  .map((p) => p.trim())
  .filter((p): p is "github" | "google" => p === "github" || p === "google");

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!authEnabled || typeof window === "undefined") return null;
  client ??= createClient(url!, anonKey!, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" },
  });
  return client;
}
