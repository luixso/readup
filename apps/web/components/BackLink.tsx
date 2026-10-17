"use client";

import { useRouter } from "next/navigation";

/** Vuelve a la página anterior de la app (igual que el botón atrás del móvil). */
export function BackLink({ fallback, label }: { fallback: string; label: string }) {
  const router = useRouter();
  return (
    <button
      className="back"
      onClick={() => {
        if (window.history.length > 1) router.back();
        else router.push(fallback);
      }}
    >
      ← {label}
    </button>
  );
}
