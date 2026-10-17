import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReadUp",
  description: "Aprende inglés leyendo: de A2 a B2 en 12 meses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <Link href="/" className="brand">
            ReadUp
          </Link>
          <nav>
            <Link href="/">Biblioteca</Link>
            <Link href="/repaso">Repaso</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
