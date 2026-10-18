"use client";

import { useEffect, useState } from "react";

/** Un cambio local en el progreso o el mazo (lo escucha la sincronización). */
export const LOCAL_CHANGE = "readup:change";
/** Datos fusionados desde la nube (lo escucha la interfaz para refrescarse). */
export const SYNCED = "readup:synced";

export function emit(name: string) {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(name));
}

/** Contador que sube cada vez que llegan datos de la nube; úsalo como dependencia de efectos. */
export function useSyncVersion(): number {
  const [version, setVersion] = useState(0);
  useEffect(() => {
    const bump = () => setVersion((v) => v + 1);
    window.addEventListener(SYNCED, bump);
    return () => window.removeEventListener(SYNCED, bump);
  }, []);
  return version;
}
