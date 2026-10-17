# ReadUp — aprende inglés leyendo (A2 → B2 en 12 meses)

App para hispanohablantes que usa la **lectura como motor** del aprendizaje y convierte
cada texto en escucha, vocabulario con repetición espaciada, pronunciación y conversación.

## Documentación

| Documento | Contenido |
|---|---|
| [01 · Investigación](docs/01-investigacion-metodos.md) | Métodos con evidencia (input comprensible, lectura extensiva, 4 ramas de Nation, SRS, shadowing...) y cómo se aplican |
| [02 · Producto](docs/02-plan-producto.md) | Bucle central, sesión diaria, curriculum de 12 meses, funcionalidades por versión |
| [03 · Arquitectura](docs/03-arquitectura.md) | Monorepo, stack, modelo de datos, pipeline de contenido con IA, escalabilidad |
| [04 · Roadmap](docs/04-roadmap.md) | Sprints de desarrollo |
| [05 · Despliegue](docs/05-despliegue-vercel.md) | Publicar la app en Vercel |

## Estructura

```
apps/web           Next.js: lecturas, documentación oficial, gramática, repaso SRS, racha
packages/core      Lógica pura: tokenizador, frases, cobertura léxica, SRS, curriculum, racha
packages/content   Textos graduados, gramática A2–B1, tips, falsos amigos, términos técnicos
packages/docs      Catálogo de wikis oficiales, lista blanca de dominios y extractor de contenido
```

## Empezar

```bash
pnpm install
pnpm test        # tests de core y content
pnpm dev         # http://localhost:3000
```

Requisitos: Node 20+ y pnpm 10.

## Audio

La app usa las voces del sistema. Si no se oye nada, instala una voz en inglés:
Windows → Configuración → Hora e idioma → Voz → Agregar voces → English (United States).
En Chrome/Edge aparecen además voces neurales ("Natural", "Google") que suenan mucho mejor.

## Documentación oficial

`/docs` permite leer wikis y guías oficiales (ArchWiki, Hyprland, Omarchy, GitHub Docs, Proxmox,
Wikipedia, Docker, Kubernetes) con traducción al tocar palabras. El servidor (`/api/doc`) solo
descarga páginas de los dominios de `packages/docs/src/sources.ts`. Para añadir un proyecto,
agrega su dominio a `ALLOWED_HOSTS` y sus páginas a `DOC_PROJECTS`.

## Añadir un texto

1. Crea `packages/content/src/texts/<id>.ts` siguiendo el tipo `GradedText` (`track: "general"` o `"tech"` con su `category`).
2. Regístralo en `packages/content/src/index.ts`.
3. `pnpm test` valida longitud, glosas y preguntas.
