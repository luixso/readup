import { DocReader } from "@/components/DocReader";

export const metadata = { title: "Leer documentación · ReadUp" };

export default async function ReadDocPage({ searchParams }: { searchParams: Promise<{ url?: string }> }) {
  const { url = "" } = await searchParams;
  return <DocReader key={url} url={url} />;
}
