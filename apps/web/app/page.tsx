import { TEXTS } from "@readup/content";
import { buildDailySession, phaseForWeek, tokenize } from "@readup/core";
import Link from "next/link";

const STRAND_LABEL = {
  input: "Input",
  output: "Output",
  language: "Lengua",
  fluency: "Fluidez",
} as const;

export default function Home() {
  // Hasta tener cuentas (v0.2), mostramos el plan de la semana 1 con 60 minutos.
  const week = 1;
  const phase = phaseForWeek(week);
  const session = buildDailySession(week, 60);

  return (
    <>
      <section className="card">
        <p className="muted" style={{ margin: 0 }}>
          Semana {week} · Fase {phase.id}: {phase.name} ({phase.from} → {phase.to})
        </p>
        <h1 style={{ margin: "4px 0 12px" }}>Tu sesión de hoy</h1>
        <table>
          <tbody>
            {session.map((b) => (
              <tr key={b.activity}>
                <td>
                  {b.activity} <span className="tag">{STRAND_LABEL[b.strand]}</span>
                </td>
                <td>{b.minutes} min</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <h2>Biblioteca</h2>
      {TEXTS.map((t) => (
        <Link key={t.id} href={`/leer/${t.id}`} style={{ color: "inherit" }}>
          <article className="card">
            <span className="tag">{t.cefr}</span>
            <span className="tag">{t.topic}</span>
            <h3 style={{ margin: "8px 0 2px" }}>{t.title}</h3>
            <p className="muted" style={{ margin: 0 }}>
              {t.titleEs} · {tokenize(t.body).length} palabras
            </p>
          </article>
        </Link>
      ))}
    </>
  );
}
