import { GRAMMAR, getGrammarTopic } from "@readup/content";
import { notFound } from "next/navigation";
import { LevelBadge } from "@/components/Badge";
import { BackLink } from "@/components/BackLink";
import { SpeakButton } from "@/components/SpeakButton";

export function generateStaticParams() {
  return GRAMMAR.map((g) => ({ id: g.id }));
}

export default async function GrammarTopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const topic = getGrammarTopic(id);
  if (!topic) notFound();

  return (
    <article className="narrow">
      <BackLink fallback="/gramatica" label="Gramática" />
      <div className="badges">
        <LevelBadge level={topic.level} />
        <span className="muted small">{topic.title}</span>
      </div>
      <h1 className="title">{topic.titleEs}</h1>
      <p className="subtitle">{topic.summary}</p>

      <h2 className="label">Cuándo se usa</h2>
      <ul className="rules">
        {topic.uses.map((u) => <li key={u}>{u}</li>)}
      </ul>

      <h2 className="label">Estructura</h2>
      <div className="table-wrap">
        <table className="form-table">
          <tbody>
            {topic.form.map((f) => (
              <tr key={f.label}>
                <th>{f.label}</th>
                <td>{f.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="label">Ejemplos</h2>
      <div className="list">
        {topic.examples.map((e) => (
          <div key={e.en} className="row-link static">
            <div className="row-main">
              <div className="row-title serif">{e.en}</div>
              <div className="row-sub">{e.es}</div>
            </div>
            <SpeakButton text={e.en} rate={0.75} />
          </div>
        ))}
      </div>

      <h2 className="label">Errores típicos</h2>
      <div className="list">
        {topic.mistakes.map((m) => (
          <div key={m.wrong} className="mistake">
            <span className="wrong">✗ {m.wrong}</span>
            <span className="right">✓ {m.right}</span>
          </div>
        ))}
      </div>

      {topic.tip && <p className="tip-inline">{topic.tip}</p>}
    </article>
  );
}
