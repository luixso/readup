import { ALBUMS, GRAMMAR, TEXTS, textsByTrack } from "@readup/content";
import { DOC_PROJECTS } from "@readup/docs";
import Link from "next/link";
import { DueCount } from "@/components/DueCount";
import { NextReading } from "@/components/NextReading";
import { StreakBar } from "@/components/StreakBar";
import { Tips } from "@/components/Tips";
import { summarize } from "@/lib/summaries";

export default function Home() {
  const texts = TEXTS.map(summarize);

  const sections = [
    { href: "/lecturas", title: "Lecturas", sub: `${texts.length} textos graduados: vida diaria, cultura y técnica` },
    {
      href: "/lecturas?filtro=Filosof%C3%ADa",
      title: "Filosofía moderna",
      sub: `${TEXTS.filter((t) => t.category === "Filosofía").length} claves: Descartes, Kant, Nietzsche, Sartre…`,
    },
    {
      href: "/lecturas?filtro=Cultura",
      title: "Cultura general",
      sub: `${textsByTrack("culture").filter((t) => t.category !== "Filosofía").length} textos de historia, ciencia, arte y naturaleza`,
    },
    { href: "/musica", title: "Música", sub: ALBUMS.map((a) => `${a.title} (${a.artist})`).join(", ") },
    { href: "/docs", title: "Documentación técnica", sub: DOC_PROJECTS.map((p) => p.name).join(", ") },
    { href: "/gramatica", title: "Gramática A2–B1", sub: `${GRAMMAR.length} reglas explicadas en español` },
    { href: "/repaso", title: "Repaso", sub: "Tu vocabulario guardado", extra: <DueCount /> },
  ];

  return (
    <div className="narrow">
      <StreakBar />

      <h1 className="title home-title">Lee un poco cada día.</h1>

      <h2 className="label">Siguiente lectura</h2>
      <NextReading texts={texts} />

      <Tips />

      <h2 className="label">Explorar</h2>
      <div className="list">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="row-link">
            <div className="row-main">
              <div className="row-title">{s.title}</div>
              <div className="row-sub">{s.sub}</div>
            </div>
            <div className="row-meta">
              {s.extra}
              <span className="muted">→</span>
            </div>
          </Link>
        ))}
      </div>

      <p className="footer-note">
        <Link href="/acerca" className="link">Acerca de ReadUp</Link> · Hecha por LUIXSO para la comunidad
      </p>
    </div>
  );
}
