"use client";

import { useEffect, useRef } from "react";

/**
 * Hace que el botón "atrás" del móvil cierre un panel (p. ej. la ficha de una palabra)
 * en vez de salir de la página.
 */
export function useCloseOnBack(open: boolean, onClose: () => void) {
  const pushed = useRef(false);
  const close = useRef(onClose);
  close.current = onClose;

  useEffect(() => {
    if (!open) return;
    if (!pushed.current) {
      window.history.pushState({ ...window.history.state, readupSheet: true }, "");
      pushed.current = true;
    }
    const onPop = () => {
      pushed.current = false;
      close.current();
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [open]);

  /** Cerrar desde la interfaz: retrocede la entrada añadida para no dejar "basura" en el historial. */
  return () => {
    if (pushed.current) window.history.back();
    else onClose();
  };
}

/**
 * Script que se ejecuta antes de que cargue React. Si la app se abre directamente en una
 * página interna (por ejemplo desde un enlace compartido), inserta el inicio en el historial:
 * así "atrás" lleva al inicio en lugar de cerrar el navegador.
 */
export const BACK_GUARD_SCRIPT = `(() => {
  try {
    if (sessionStorage.getItem("readup.guard")) return;
    sessionStorage.setItem("readup.guard", "1");
    if (location.pathname === "/") return;
    // Solo al entrar desde fuera de la app (enlace compartido, pestaña nueva, marcador).
    var fromApp = document.referrer && new URL(document.referrer).origin === location.origin;
    if (fromApp) return;
    var here = location.pathname + location.search + location.hash;
    history.replaceState({ readupGuard: true }, "", "/");
    history.pushState(null, "", here);
  } catch (e) {}
})();`;
