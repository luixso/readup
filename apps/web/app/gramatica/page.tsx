import { GRAMMAR } from "@readup/content";
import Link from "next/link";
import { LevelBadge } from "@/components/Badge";

export const metadata = { title: "Gramática · ReadUp" };

export default function GrammarPage() {
  return (
    <div className="narrow">
      <h1 className="title">Gramática</h1>
      <p className="subtitle">Las reglas esenciales de A2 y B1, explicadas en español, con los errores típicos de hispanohablantes.</p>
      {(["A2", "B1"] as const).map((level) => (
        <section key={level}>
          <h2 className="label">
            <LevelBadge level={level} /> {level === "A2" ? "Elemental" : "Intermedio"}
          </h2>
          <div className="list">
            {GRAMMAR.filter((g) => g.level === level).map((g) => (
              <Link key={g.id} href={`/gramatica/${g.id}`} className="row-link">
                <div className="row-main">
                  <div className="row-title">{g.titleEs}</div>
                  <div className="row-sub">{g.title}</div>
                </div>
                <span className="muted">→</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
