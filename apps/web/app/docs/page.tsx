import { TECH_TERMS } from "@readup/content";
import { ALLOWED_HOSTS, DOC_PROJECTS } from "@readup/docs";
import Link from "next/link";
import { OpenUrlForm } from "@/components/OpenUrlForm";
import { SpeakButton } from "@/components/SpeakButton";

export const metadata = { title: "Documentación técnica · ReadUp" };

export default function DocsPage() {
  return (
    <div className="narrow">
      <h1 className="title">Documentación técnica</h1>
      <p className="subtitle">
        Lee wikis y guías oficiales dentro de la app: toca cualquier palabra para traducirla y escucha el texto.
      </p>

      <OpenUrlForm hosts={[...ALLOWED_HOSTS]} />

      {DOC_PROJECTS.map((p) => (
        <section key={p.id} className="doc-project">
          <h2 className="label">
            {p.name} <span className="muted small">· {p.license}</span>
          </h2>
          <p className="muted small" style={{ marginTop: -6 }}>{p.description}</p>
          <div className="list">
            {p.pages.map((page) => (
              <Link key={page.url} href={`/docs/leer?url=${encodeURIComponent(page.url)}`} className="row-link">
                <div className="row-main">
                  <div className="row-title">{page.title}</div>
                  <div className="row-sub">{page.note}</div>
                </div>
                <span className="muted">→</span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <h2 className="label">Pronunciación de términos técnicos</h2>
      <div className="list">
        {TECH_TERMS.map((t) => (
          <div key={t.term} className="row-link static">
            <div className="row-main">
              <div className="row-title">
                {t.term} <span className="muted">· {t.es}</span>
              </div>
              <div className="row-sub">{t.tip}</div>
            </div>
            <SpeakButton text={t.say ?? t.term} />
          </div>
        ))}
      </div>
    </div>
  );
}
