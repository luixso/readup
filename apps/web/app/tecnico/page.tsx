import { TECH_CATEGORIES, TECH_TERMS, textsByTrack } from "@readup/content";
import { Library } from "@/components/Library";
import { SpeakButton } from "@/components/SpeakButton";
import { summarize } from "@/lib/summaries";

export const metadata = { title: "Inglés técnico IT · ReadUp" };

export default function TechPage() {
  const texts = textsByTrack("tech").map(summarize);
  const categories = TECH_CATEGORIES.filter((c) => texts.some((t) => t.label === c));

  return (
    <>
      <section className="hero tech">
        <span className="eyebrow">Inglés para tu carrera</span>
        <h1>Inglés técnico IT</h1>
        <p>
          DevOps, redes, cloud, seguridad y soporte. Aprende el vocabulario que usarás en reuniones,
          tickets, documentación y entrevistas técnicas.
        </p>
      </section>

      <h2>Lecturas técnicas</h2>
      <Library texts={texts} filters={categories} />

      <h2>Pronunciación de términos técnicos</h2>
      <p className="muted" style={{ marginTop: -8 }}>
        Palabras que los hispanohablantes suelen pronunciar mal en el trabajo. Pulsa ▶ para escucharlas.
      </p>
      <div className="grid">
        {TECH_TERMS.map((t) => (
          <div key={t.term} className="card term-card">
            <div>
              <strong>{t.term}</strong> <span className="muted">· {t.es}</span>
              <p>{t.tip}</p>
            </div>
            <SpeakButton text={t.say ?? t.term} />
          </div>
        ))}
      </div>
    </>
  );
}
