# 02 · Plan de producto

## Visión

**ReadUp** (nombre provisional): la app que lleva a hispanohablantes de **A2 a B2 en 12
meses**, usando la **lectura como motor** y convirtiendo cada texto leído en
escucha, vocabulario y conversación.

## Usuario objetivo

- Adulto hispanohablante (LatAm y España), nivel A2: entiende frases básicas, lee con
  esfuerzo, se bloquea al hablar.
- Motivación: trabajo, viajes, estudios. Dispone de 30–60 min/día, sobre todo en el móvil.

## El bucle central (cada texto)

```
 1. Elegir texto (recomendado por cobertura ≈ 95–98 %)
 2. Leer + escuchar (Reading While Listening)
 3. Tocar palabras/chunks desconocidos → glosa en español → al mazo SRS
 4. Comprobar comprensión (3–5 preguntas)
 5. Shadowing de 2–3 frases clave (grabación + evaluación de pronunciación)
 6. Hablar con el tutor IA sobre el texto (output con el vocabulario nuevo)
 7. Repasar tarjetas SRS al día siguiente (con la frase original)
```

## Sesión diaria (60 min, basada en las cuatro ramas)

| Bloque | Min | Rama |
|---|---|---|
| Repaso SRS | 10 | Foco en la lengua |
| Texto del día (leer + escuchar) | 15 | Input |
| Micro-lección (gramática/pronunciación contrastiva) | 5 | Foco en la lengua |
| Shadowing / relectura cronometrada | 10 | Fluidez |
| Conversación con tutor IA o escritura | 15 | Output |
| Lectura libre (opcional, extra) | 5+ | Input |

La app adapta los minutos si el usuario elige 20/30/45/60 min (ver
`buildDailySession` en `packages/core`).

## Curriculum de 12 meses

| Fase | Meses | Nivel | Textos | Foco |
|---|---|---|---|---|
| 1. Cimientos | 1–3 | A2 → A2+ | Graded readers 600–1.200 palabras base | 1.500 palabras más frecuentes, sonidos difíciles para hispanohablantes, presente/pasado, shadowing corto |
| 2. Despegue | 4–6 | A2+ → B1 | Graded 1.200–2.000, colecciones temáticas | Narrow reading, resúmenes orales, conversación guiada, phrasal verbs comunes |
| 3. Autonomía | 7–9 | B1 → B1+ | Noticias adaptadas, relatos, transcripciones de podcasts | Chunks/colocaciones, opinar y argumentar, 4/3/2, escucha sin texto |
| 4. Fluidez | 10–12 | B1+ → B2 | Textos auténticos, novela corta, artículos | Debate con IA, simulaciones (entrevista de trabajo, reuniones), velocidad lectora 150+ wpm |

**Hitos medibles por fase:** palabras leídas, vocabulario activo, WPM lectora,
puntuación de pronunciación, test de nivel trimestral (lectura + escucha + habla).

## Funcionalidades por versión

### MVP (v0.1 — meses 1–2 de desarrollo)
- Lector con glosas en español al tocar palabras.
- Audio TTS del texto.
- Preguntas de comprensión.
- Mazo SRS automático con la frase de contexto.
- Biblioteca inicial: 30–50 textos A2/A2+ con colecciones temáticas.
- Analizador de cobertura por usuario.

### v0.2
- Cuentas y sincronización (web + PWA).
- Test de nivel inicial (placement).
- Plan diario guiado + racha.
- Shadowing con grabación.

### v0.3
- Tutor conversacional IA sobre el texto leído (voz).
- Evaluación de pronunciación.
- Pipeline de generación de textos con IA + revisión humana.

### v1.0
- App móvil (Expo/React Native).
- Evaluaciones trimestrales, informes de progreso.
- Suscripción (freemium).

## Ideas diferenciadoras

1. **Texto a tu medida:** la IA genera/adapta textos sobre los intereses del usuario
   (fútbol, programación, cocina) respetando su cobertura léxica del 95–98 %.
2. **"Errores de hispanohablante":** detector de errores típicos en lo que el usuario
   habla/escribe con explicación en español.
3. **Falsos amigos resaltados** en los textos.
4. **Del texto a la voz:** cada texto termina en una conversación de 3 min.
5. **Contador de "1 millón de palabras"** como meta anual visible.
6. **Modo trayecto:** audio-only del texto del día para el transporte.
7. **Clubs de lectura** (fase posterior): leer el mismo texto y conversar en grupo.

## Gamificación (con cuidado)

Recompensar **volumen comprensible y constancia**, no clics: palabras leídas, minutos
hablados, rachas con "días de descanso", niveles por fase. Evitar recompensas que
incentiven textos demasiado fáciles o adivinar respuestas.

## Métricas de producto

- Retención D1 / D7 / D30.
- Minutos activos por día y % de sesiones completas.
- Palabras leídas por semana; nuevas palabras dominadas.
- Progreso en test trimestral (objetivo: +1 subnivel MCER por trimestre).

## Modelo de negocio (propuesta)

- **Gratis:** 1 texto/día, SRS, audio.
- **Premium:** biblioteca completa, tutor IA, pronunciación, textos a medida.
