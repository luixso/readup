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

## Estructura

```
apps/web           Next.js: biblioteca, inglés técnico IT, lector con glosas y audio, preguntas, shadowing, repaso SRS
packages/core      Lógica de aprendizaje pura: tokenizador, cobertura léxica, SRS, curriculum
packages/content   Textos graduados (glosas en español, preguntas, frases de shadowing), falsos amigos
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

## Añadir un texto

1. Crea `packages/content/src/texts/<id>.ts` siguiendo el tipo `GradedText` (`track: "general"` o `"tech"` con su `category`).
2. Regístralo en `packages/content/src/index.ts`.
3. `pnpm test` valida longitud, glosas y preguntas.
