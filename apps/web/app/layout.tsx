import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { BACK_GUARD_SCRIPT } from "@/lib/history";
import "./globals.css";

// Serif editorial para títulos y lectura; Geist para la interfaz.
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReadUp",
  description: "Aprende inglés leyendo: de A2 a B2 en 12 meses.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0e" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BACK_GUARD_SCRIPT }} />
      </head>
      <body>
        <header className="topbar">
          <div className="topbar-inner">
            <Link href="/" className="brand">
              ReadUp
            </Link>
            <Nav variant="top" />
          </div>
        </header>
        <main className="container">{children}</main>
        <Nav variant="bottom" />
      </body>
    </html>
  );
}
