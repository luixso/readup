export const runtime = "nodejs";

/**
 * Traduce una palabra o expresión corta del inglés al español con MyMemory
 * (gratuito, sin clave, con límite diario). Se cachea en el CDN y en el navegador.
 */
export async function GET(request: Request) {
  const q = (new URL(request.url).searchParams.get("q") ?? "").trim().toLowerCase();
  if (!q || q.length > 60 || !/^[\p{L}' -]+$/u.test(q)) {
    return Response.json({ error: "Consulta no válida." }, { status: 400 });
  }

  try {
    const res = await fetch(
      // Con MYMEMORY_EMAIL el límite gratuito sube de ~5.000 a ~50.000 caracteres al día.
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=en|es${
        process.env.MYMEMORY_EMAIL ? `&de=${encodeURIComponent(process.env.MYMEMORY_EMAIL)}` : ""
      }`,
      { signal: AbortSignal.timeout(6_000), next: { revalidate: 2_592_000 } },
    );
    if (!res.ok) throw new Error(String(res.status));
    const data = (await res.json()) as { responseData?: { translatedText?: string }; responseStatus?: number };
    const es = data.responseData?.translatedText?.trim();
    if (!es || data.responseStatus !== 200 || es.toLowerCase() === q || /MYMEMORY WARNING/i.test(es)) {
      return Response.json({ error: "Sin traducción." }, { status: 404 });
    }
    return Response.json(
      { es: es.toLowerCase() },
      { headers: { "Cache-Control": "public, s-maxage=2592000" } },
    );
  } catch {
    return Response.json({ error: "Servicio de traducción no disponible." }, { status: 502 });
  }
}
