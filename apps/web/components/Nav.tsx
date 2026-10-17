"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookIcon, HomeIcon, RepeatIcon, RuleIcon, TerminalIcon } from "@/components/Icons";

const LINKS = [
  { href: "/", label: "Inicio", icon: HomeIcon, match: (p: string) => p === "/" },
  { href: "/lecturas", label: "Lecturas", icon: BookIcon, match: (p: string) => p.startsWith("/lecturas") || p.startsWith("/leer") },
  { href: "/docs", label: "Docs", icon: TerminalIcon, match: (p: string) => p.startsWith("/docs") },
  { href: "/gramatica", label: "Gramática", icon: RuleIcon, match: (p: string) => p.startsWith("/gramatica") },
  { href: "/repaso", label: "Repaso", icon: RepeatIcon, match: (p: string) => p.startsWith("/repaso") },
];

/** Navegación: enlaces de texto arriba en escritorio, barra inferior con iconos en móvil. */
export function Nav({ variant }: { variant: "top" | "bottom" }) {
  const pathname = usePathname();
  return (
    <nav className={variant === "top" ? "nav-top" : "nav-bottom"}>
      {LINKS.map(({ href, label, icon: Icon, match }) => (
        <Link key={href} href={href} className={match(pathname) ? "active" : ""}>
          {variant === "bottom" && <Icon />}
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
