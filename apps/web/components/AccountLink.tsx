"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserIcon } from "@/components/Icons";
import { useSession, useSyncStatus } from "@/lib/sync";

/** Acceso a la cuenta: inicial del email si hay sesión; punto si falla la sincronización. */
export function AccountLink() {
  const { session } = useSession();
  const status = useSyncStatus();
  const active = usePathname().startsWith("/cuenta");
  const email = session?.user.email;

  return (
    <Link href="/cuenta" className={`account ${active ? "active" : ""}`} aria-label="Cuenta">
      {email ? <span className="avatar">{email[0]!.toUpperCase()}</span> : <UserIcon />}
      {status.state === "error" && <span className="account-dot" aria-label="Error de sincronización" />}
    </Link>
  );
}
