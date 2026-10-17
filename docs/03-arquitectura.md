# 03 · Arquitectura escalable

## Principios

1. **Lógica de aprendizaje en un paquete puro** (`@readup/core`, TypeScript sin
   dependencias): la misma lógica corre en web, móvil y servidor, y se testea aislada.
2. **Contenido como datos** (`@readup/content`): los textos son JSON/TS versionados,
   validados automáticamente por nivel antes de publicarse.
3. **Monolito modular primero, servicios después:** empezamos con Next.js (UI + API) y
   extraemos servicios solo cuando la carga lo justifique (IA, audio).
4. **Proveedores intercambiables** detrás de interfaces (IA, TTS, STT, SRS).

## Monorepo

```
readup/
├─ apps/
│  ├─ web/          Next.js (App Router) — web + PWA + API routes
│  └─ mobile/       (v1.0) Expo / React Native, reutiliza core y content
├─ packages/
│  ├─ core/         Dominio: SRS, cobertura léxica, tokenizador, curriculum
│  ├─ content/      Textos graduados, falsos amigos, listas de vocabulario
│  ├─ db/           (v0.2) Esquema y cliente de base de datos
│  └─ ai/           (v0.3) Prompts y clientes de IA (generación, tutor, correcciones)
└─ docs/
```

Herramientas: **pnpm workspaces**, TypeScript estricto, Vitest; Turborepo cuando haya
más de 3 paquetes con build.

## Stack propuesto

| Capa | Tecnología | Por qué |
|---|---|---|
| Web | Next.js + React | SSR/SEO para captación, PWA, API integrada |
| Móvil | Expo (React Native) | Reutiliza TypeScript y paquetes |
| Base de datos | PostgreSQL (Neon/Supabase) + Drizzle ORM | Relacional, escala bien, migraciones tipadas |
| Auth | Auth.js o Supabase Auth | Email, Google, Apple |
| Caché/colas | Redis (Upstash) + cola de trabajos | Generación de audio/textos en segundo plano |
| Archivos | S3 / Cloudflare R2 + CDN | Audio de los textos |
| IA de texto | Claude API (modelo configurable) | Generar/adaptar textos, glosas, tutor, corrección |
| TTS | Proveedor neural (Azure/ElevenLabs/...) | Audio natural; navegador como fallback gratis |
| STT + pronunciación | Azure Pronunciation Assessment / Whisper | Puntuación por fonema |
| Analítica | PostHog | Embudos, retención, experimentos |
| Observabilidad | Sentry + logs estructurados | Errores en cliente/servidor |
| Hosting | Vercel (web) + workers en Fly.io/Railway | Escala automática |

## Modelo de datos (borrador)

```
User(id, email, nativeLang, cefrLevel, dailyMinutes, createdAt)
Text(id, title, cefr, wordCount, topic, collectionId, body, audioUrl, version)
Collection(id, title, topic, cefr)
GlossEntry(textId, term, translationEs, note)
Question(id, textId, prompt, options[], answerIndex)
ReadingSession(id, userId, textId, startedAt, finishedAt, wpm, score)
UserWord(userId, lemma, status[new|learning|known], firstSeenTextId)
Card(id, userId, front, back, context, ease, interval, reps, lapses, dueAt)
Review(id, cardId, grade, reviewedAt, elapsedDays)        ← permite migrar a FSRS
SpeakingAttempt(id, userId, textId, audioUrl, pronScore, fluencyScore)
Conversation(id, userId, textId, transcript, corrections[])
```

Guardar **todos los eventos de repaso** (`Review`) permite reentrenar parámetros del
algoritmo SRS por usuario más adelante.

## Pipeline de contenido

```
Tema + nivel ─▶ IA genera borrador ─▶ Analizador de cobertura (core)
     ─▶ ¿cumple lista de vocabulario del nivel? ── no ─▶ regenerar/simplificar
     ─▶ sí ─▶ glosas + preguntas (IA) ─▶ revisión humana ─▶ TTS ─▶ publicar
```

Listas de referencia sugeridas: **NGSL** (New General Service List, CC BY-SA) y
perfiles de vocabulario por nivel MCER.

## Escalabilidad

- Texto y audio estáticos servidos por CDN; la base de datos solo guarda progreso.
- Generación de IA asíncrona y cacheada (un texto generado sirve a miles de usuarios;
  solo los "textos a medida" son por usuario).
- Límites de uso de IA por plan; prompts con caché.
- Offline-first en móvil: textos descargados + cola de repasos sincronizada.
- i18n preparado: la lengua de explicación (español) es configurable, lo que permite
  abrir a portugués, etc.

## Seguridad y privacidad

- Grabaciones de voz: consentimiento explícito, retención limitada, borrado a petición.
- Claves de API solo en servidor. Cumplimiento RGPD (usuarios en España).
