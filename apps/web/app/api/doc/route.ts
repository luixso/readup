import { isAllowedUrl } from "@readup/docs";
import { extractDoc } from "@readup/docs/extract";

export const runtime = "nodejs";

const MAX_BYTES = 4_000_000;

/**
 * Descarga una página de documentación oficial y devuelve su contenido limpio.
 * Solo se aceptan dominios de la lista blanca, también tras las redirecciones.
 */
export async function GET(request: Request) {
  const url = new URL(request.url).searchParams.get("url") ?? "";
  if (!isAllowedUrl(url)) {
    return Response.json({ error: "Dominio no permitido." }, { status: 400 });
  }

  let res: Response;
  try {
    res = await fetch(url, {
      headers: {
        "User-Agent": "ReadUp/0.1 (English reading app; +https://github.com/luixso/readup)",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "en",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
      next: { revalidate: 86_400 },
    });
  } catch {
    return Response.json({ error: "No se pudo conectar con la web de origen." }, { status: 502 });
  }

  if (!isAllowedUrl(res.url)) {
    return Response.json({ error: "La página redirige a un dominio no permitido." }, { status: 400 });
  }
  if (!res.ok) {
    return Response.json({ error: `La web de origen respondió ${res.status}.` }, { status: 502 });
  }
  if (!(res.headers.get("content-type") ?? "").includes("html")) {
    return Response.json({ error: "La página no es HTML." }, { status: 415 });
  }

  const html = await res.text();
  if (html.length > MAX_BYTES) {
    return Response.json({ error: "La página es demasiado grande." }, { status: 413 });
  }

  const doc = extractDoc(html, res.url);
  if (doc.blocks.length === 0) {
    return Response.json({ error: "No se encontró texto legible en la página." }, { status: 422 });
  }
  return Response.json(doc, {
    headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" },
  });
}
