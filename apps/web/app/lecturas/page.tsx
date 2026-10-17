import { TEXTS } from "@readup/content";
import { Library } from "@/components/Library";
import { summarize } from "@/lib/summaries";

export const metadata = { title: "Lecturas · ReadUp" };

export default async function ReadingsPage({ searchParams }: { searchParams: Promise<{ filtro?: string }> }) {
  const { filtro } = await searchParams;
  return (
    <div className="narrow">
      <h1 className="title">Lecturas</h1>
      <p className="subtitle">Textos cortos graduados por nivel. Elige uno que entiendas casi entero.</p>
      <Library texts={TEXTS.map(summarize)} initial={filtro} />
    </div>
  );
}
