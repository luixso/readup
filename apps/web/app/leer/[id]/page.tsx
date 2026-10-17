import { TEXTS, getText } from "@readup/content";
import { notFound } from "next/navigation";
import { Reader } from "@/components/Reader";

export function generateStaticParams() {
  return TEXTS.map((t) => ({ id: t.id }));
}

export default async function ReadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const text = getText(id);
  if (!text) notFound();
  return <Reader text={text} />;
}
