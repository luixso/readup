import { textsByTrack } from "@readup/content";
import { buildDailySession, phaseForWeek } from "@readup/core";
import Link from "next/link";
import { HeroStats } from "@/components/HeroStats";
import { Library } from "@/components/Library";
import { summarize } from "@/lib/summaries";

const STRAND = {
  input: { label: "Input", color: "#4f46e5" },
  output: { label: "Output", color: "#db2777" },
  language: { label: "Lengua", color: "#0891b2" },
  fluency: { label: "Fluidez", color: "#d97706" },
} as const;

export default function Home() {
  // Hasta tener cuentas (v0.2), mostramos el plan de la semana 1 con 60 minutos.
  const week = 1;
  const phase = phaseForWeek(week);
  const session = buildDailySession(week, 60);
  const general = textsByTrack("general").map(summarize);
  const techCount = textsByTrack("tech").length;

  return (
    <>
      <section className="hero">
        <span className="eyebrow">
          Semana {week} · Fase {phase.id} · {phase.name}
        </span>
        <h1>Aprende inglés leyendo</h1>
        <p>
          Lee, escucha y repite. De {phase.from} a B2 en 12 meses, con textos a tu nivel y repaso
          inteligente del vocabulario.
        </p>
        <HeroStats />
      </section>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <section className="card">
          <div className="section-head">
            <h3 style={{ margin: 0 }}>Tu sesión de hoy</h3>
            <span className="chip neutral">60 min</span>
          </div>
          <div className="plan">
            {session.map((b) => (
              <div key={b.activity} className="plan-row">
                <span className="label">
                  <span className="dot" style={{ background: STRAND[b.strand].color }} />
                  {b.activity}
                </span>
                <span className="min">{b.minutes}′</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          <Link href="#lecturas" className="card track-card">
            <span className="track-icon">📚</span>
            <div>
              <h3>Lecturas generales</h3>
              <p>{general.length} historias y artículos de vida diaria</p>
            </div>
          </Link>
          <Link href="/tecnico" className="card track-card">
            <span className="track-icon tech">💻</span>
            <div>
              <h3>Inglés técnico IT</h3>
              <p>{techCount} lecturas de DevOps, redes, cloud y seguridad</p>
            </div>
          </Link>
          <Link href="/repaso" className="card track-card">
            <span className="track-icon" style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)" }}>
              🔁
            </span>
            <div>
              <h3>Repaso de vocabulario</h3>
              <p>Tus palabras guardadas, en el momento justo</p>
            </div>
          </Link>
        </div>
      </div>

      <h2 id="lecturas">Lecturas</h2>
      <Library texts={general} filters={["A2", "A2+", "B1"]} />
    </>
  );
}
