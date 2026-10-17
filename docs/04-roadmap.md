# 04 · Roadmap de desarrollo

## Sprint 0 — Base (hecho en este commit)
- [x] Documentación: investigación, producto, arquitectura.
- [x] Monorepo pnpm + TypeScript.
- [x] `@readup/core`: tokenizador, cobertura léxica, SRS (SM-2), curriculum de 12 meses + tests.
- [x] `@readup/content`: primeros textos A2 con glosas y preguntas, falsos amigos.
- [x] `apps/web`: lector con glosas, audio TTS del navegador, preguntas y repaso SRS (estado local).

## Sprint 1 — Contenido y lector (2 semanas)
- [ ] Importar NGSL y bandas de frecuencia; recomendar textos por cobertura real.
- [ ] 30 textos A2/A2+ en 6 colecciones temáticas.
- [ ] Resaltado de falsos amigos y chunks en el lector.
- [ ] Medidor de WPM y contador de palabras leídas.

## Sprint 2 — Cuentas y progreso (2 semanas)
- [ ] Paquete `db` (Postgres + Drizzle), auth.
- [ ] Sincronizar tarjetas, palabras y sesiones.
- [ ] Test de nivel inicial.
- [ ] Plan diario guiado + rachas.

## Sprint 3 — Hablar (3 semanas)
- [ ] Shadowing con grabación.
- [ ] Evaluación de pronunciación.
- [ ] Tutor IA sobre el texto (texto primero, voz después).

## Sprint 4 — Pipeline de IA (2 semanas)
- [ ] Generador de textos por nivel validado con el analizador de cobertura.
- [ ] Generación de glosas y preguntas; panel de revisión.
- [ ] Audio TTS neural precalculado en CDN.

## Sprint 5+ — Lanzamiento
- [ ] PWA, analítica, pagos.
- [ ] Beta cerrada con 50 usuarios A2; medir retención y progreso.
- [ ] App móvil Expo.
