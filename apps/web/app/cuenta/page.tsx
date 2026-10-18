"use client";

import Link from "next/link";
import { useState } from "react";
import { authEnabled, getSupabase, oauthProviders } from "@/lib/supabase";
import { syncNow, useSession, useSyncStatus } from "@/lib/sync";

const PROVIDER_LABEL = { github: "GitHub", google: "Google" } as const;

/** Mensajes de Supabase traducidos y con una salida práctica. */
function friendlyError(message: string): string {
  if (/rate limit/i.test(message)) {
    return "Se alcanzó el límite de emails de Supabase (el servicio de correo de prueba permite muy pocos por hora). Espera una hora o entra con GitHub.";
  }
  if (/invalid.*email/i.test(message)) return "El email no es válido.";
  return message;
}

export default function AccountPage() {
  const { session, loading } = useSession();

  return (
    <div className="narrow">
      <h1 className="title">Cuenta</h1>
      {!authEnabled ? (
        <p className="subtitle">
          Las cuentas todavía no están activadas en esta instalación. Tu progreso se guarda en este dispositivo.
        </p>
      ) : loading ? (
        <p className="subtitle">Cargando…</p>
      ) : session ? (
        <SignedIn email={session.user.email ?? ""} />
      ) : (
        <SignIn />
      )}

      <h2 className="label">Qué se guarda</h2>
      <p className="muted small">
        Lecturas completadas, documentos leídos, días de racha y tus tarjetas de repaso. Nada más: ni grabaciones, ni
        historial de navegación. La voz y la velocidad del audio se guardan solo en cada dispositivo.
      </p>

      <div className="list" style={{ marginTop: 32 }}>
        <Link href="/acerca" className="row-link">
          <span className="row-title">Acerca de ReadUp</span>
          <span className="muted">→</span>
        </Link>
      </div>
    </div>
  );
}

function SignIn() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const redirectTo = typeof window !== "undefined" ? `${window.location.origin}/cuenta` : undefined;

  return (
    <>
      <p className="subtitle">
        Inicia sesión para guardar tu progreso en la nube y continuar en cualquier dispositivo. Lo que ya llevas en este
        dispositivo se conserva y se une a tu cuenta.
      </p>

      {state === "sent" ? (
        <p className="notice">
          Te hemos enviado un enlace a <strong>{email}</strong>. Ábrelo en este dispositivo para entrar.
        </p>
      ) : (
        <form
          className="url-form"
          onSubmit={async (e) => {
            e.preventDefault();
            setState("sending");
            const { error } = await getSupabase()!.auth.signInWithOtp({
              email: email.trim(),
              options: { emailRedirectTo: redirectTo },
            });
            if (error) {
              setError(friendlyError(error.message));
              setState("error");
            } else setState("sent");
          }}
        >
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn primary" type="submit" disabled={state === "sending"}>
            {state === "sending" ? "Enviando…" : "Enviar enlace"}
          </button>
          {state === "error" && <p className="small warn-text">{error}</p>}
        </form>
      )}

      {oauthProviders.length > 0 && (
        <div className="row" style={{ marginTop: 16, flexWrap: "wrap" }}>
          {oauthProviders.map((p) => (
            <button
              key={p}
              className="btn"
              onClick={() => getSupabase()!.auth.signInWithOAuth({ provider: p, options: { redirectTo } })}
            >
              Continuar con {PROVIDER_LABEL[p]}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function SignedIn({ email }: { email: string }) {
  const status = useSyncStatus();
  const label =
    status.state === "syncing"
      ? "Sincronizando…"
      : status.state === "ok"
        ? `Sincronizado a las ${new Date(status.at).toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" })}`
        : status.state === "error"
          ? `Error: ${status.message}`
          : "Pendiente de sincronizar";

  return (
    <>
      <p className="subtitle">
        Sesión iniciada como <strong>{email}</strong>.
      </p>
      <div className="list">
        <div className="row-link static">
          <div className="row-main">
            <div className="row-title">Sincronización</div>
            <div className={`row-sub ${status.state === "error" ? "warn-text" : ""}`}>{label}</div>
          </div>
          <button className="btn small" onClick={() => void syncNow()} disabled={status.state === "syncing"}>
            Sincronizar
          </button>
        </div>
        <div className="row-link static">
          <div className="row-main">
            <div className="row-title">Cerrar sesión</div>
            <div className="row-sub">Tu progreso sigue guardado en la nube y en este dispositivo.</div>
          </div>
          <button className="btn small" onClick={() => void getSupabase()!.auth.signOut()}>
            Salir
          </button>
        </div>
      </div>
    </>
  );
}
