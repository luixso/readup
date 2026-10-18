# 04 · Roadmap de desarrollo

## Sprint 0 — Base (hecho en este commit)
- [x] Documentación: investigación, producto, arquitectura.
- [x] Monorepo pnpm + TypeScript.
- [x] `@readup/core`: tokenizador, cobertura léxica, SRS (SM-2), curriculum de 12 meses + tests.
- [x] `@readup/content`: primeros textos A2 con glosas y preguntas, falsos amigos.
- [x] `apps/web`: lector con glosas, audio TTS del navegador, preguntas y repaso SRS (estado local).

## Sprint 0.5 — Audio, inglés técnico y nueva UI (hecho)
- [x] Audio: selección explícita de voz inglesa (prioriza voces neurales), lectura frase a frase con resaltado, velocidad y selector de voz, aviso si no hay voces en inglés.
- [x] Sección "Inglés técnico IT": 9 lecturas (Soporte IT, Redes, DevOps, Cloud, Seguridad, Agile) + guía de pronunciación de términos técnicos.
- [x] Rediseño de la interfaz (Geist, tarjetas, hero, filtros, hoja de glosa, modo oscuro).
- [x] 18 lecturas en total (A2 → B1) y progreso local (textos completados, palabras leídas).

## Sprint 0.6 — Docs oficiales, gramática, racha y diseño minimalista (hecho)
- [x] Audio a 0.5× / 0.75× / 1× con pausas entre frases al ir lento; "Lento" en shadowing a 0.5×.
- [x] `@readup/docs`: lector de wikis oficiales (Omarchy, Hyprland, GitHub, IA, ArchWiki, Proxmox, Docker, Kubernetes) con lista blanca de dominios, extracción con Readability y traducción de palabras (diccionario local + MyMemory).
- [x] Racha diaria (al menos una lectura al día), compacta en el inicio.
- [x] Inicio simplificado con tip del día; sección de Gramática A2–B1 (20 temas).
- [x] Botón atrás del móvil: cierra la ficha de palabra y nunca saca de la app al entrar por un enlace.
- [x] Interfaz minimalista en blanco y negro (Newsreader + Geist); color solo para nivel, área técnica y feedback.

## Sprint 0.7 — Cuentas y Acerca de (hecho)
- [x] Login con Supabase (enlace por email; GitHub/Google opcionales) y sincronización del progreso entre dispositivos con fusión sin pérdidas.
- [x] Página «Acerca de» y donaciones (próximamente).

## Sprint 0.8 — Cultura general (hecho)
- [x] Nueva colección «Cultura general»: 12 lecturas A2+/B1 de historia, ciencia, arte, naturaleza y sociedad, con filtro y color propios.

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
