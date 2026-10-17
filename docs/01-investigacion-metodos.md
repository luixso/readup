# 01 · Investigación: métodos que funcionan para aprender inglés leyendo

Resumen de la evidencia en adquisición de segundas lenguas (SLA) y psicología del
aprendizaje, y cómo se traduce cada hallazgo en una función de la app.

## 1. Input comprensible (Krashen, 1982)

Se adquiere un idioma cuando se entienden mensajes ligeramente por encima del nivel
actual (*i+1*). Leer mucho material comprensible es el motor principal.

**En la app:** cada texto se etiqueta con su dificultad y se recomienda el que está
justo un paso por encima del nivel del usuario.

## 2. Lectura extensiva y cobertura léxica (Hu & Nation, 2000; Nation, 2006)

- Para leer **con placer y sin diccionario** hay que conocer **~98 %** de las palabras
  del texto. Con 95 % se entiende, pero con esfuerzo (zona de estudio).
- Leer en volumen (graded readers) mejora vocabulario, gramática, velocidad y escritura
  (Day & Bamford, 1998).
- Las palabras nuevas necesitan **8–12 encuentros** en contexto para fijarse
  (Webb, 2007).

**En la app:** el analizador de cobertura (`packages/core/src/coverage.ts`) calcula qué
porcentaje de un texto conoce *este* usuario y clasifica el texto en
*fácil / óptimo / difícil*. Objetivo de volumen: **≥ 1 millón de palabras leídas en
el año** (≈ 3.000 palabras/día).

## 3. Lectura intensiva

Leer un texto corto con atención a vocabulario, chunks y gramática. Complementa la
extensiva (no la sustituye).

**En la app:** modo "Estudio" con glosas en español, explicación gramatical de frases
y preguntas de comprensión.

## 4. Las cuatro ramas de Paul Nation (2007)

Un curso equilibrado reparte el tiempo en cuatro partes iguales:

| Rama | Qué es | Función en la app |
|---|---|---|
| Input centrado en el significado | Leer/escuchar para entender | Lector, audiolibros graduados |
| Output centrado en el significado | Hablar/escribir para comunicar | Conversación con tutor IA, resúmenes |
| Foco en la lengua | Vocabulario, gramática, pronunciación | Tarjetas SRS, micro-lecciones |
| Desarrollo de fluidez | Hacer rápido lo que ya sabes | Relectura cronometrada, shadowing, 4/3/2 |

Esta es la **columna vertebral del diseño de la sesión diaria**
(`packages/core/src/curriculum.ts`).

## 5. Repetición espaciada (Ebbinghaus; Cepeda et al., 2006) y práctica de recuperación (Roediger & Karpicke, 2006)

Repasar justo antes de olvidar y **obligarse a recordar** (no releer) multiplica la
retención.

**En la app:** cada palabra que el usuario toca en un texto entra a su mazo SRS, con la
frase original como contexto. Algoritmo intercambiable (SM-2 hoy, FSRS mañana).

## 6. Lectura con audio — *Reading While Listening* (Webb & Chang, 2012; Chang & Millett, 2014)

Leer escuchando el mismo texto mejora velocidad lectora, comprensión auditiva y el
mapeo grafía→sonido, crítico en inglés (ortografía opaca).

**En la app:** cada texto tiene audio sincronizado (TTS de calidad; resaltado
palabra a palabra en fases posteriores).

## 7. Shadowing (Kadota, 2019) y lectura en voz alta

Repetir el audio con 0,5–1 s de retraso entrena prosodia, ritmo y pronunciación y es
el puente de "leer" a "hablar".

**En la app:** grabación + reconocimiento de voz con evaluación de pronunciación.

## 8. Lectura estrecha — *Narrow reading* (Krashen, 2004)

Leer varios textos del mismo tema/autor recicla vocabulario de forma natural y reduce
la carga cognitiva.

**En la app:** "colecciones temáticas" (trabajo, viajes, salud, tecnología...).

## 9. Hipótesis del output e interacción (Swain, 1985; Long, 1996)

Producir lengua revela huecos; negociar significado con un interlocutor los cierra.
**Para "hablar bien" en un año es imprescindible hablar desde el mes 1.**

**En la app:** tutor conversacional con IA que habla *sobre el texto que acabas de
leer* (vocabulario recién activado → output inmediato), con corrección amable.

## 10. Enfoque léxico — chunks y colocaciones (Lewis, 1993)

Los hablantes fluidos usan bloques prefabricados (*make a decision*, *it depends on*).

**En la app:** se resaltan y se guardan chunks, no solo palabras sueltas.

## 11. Fluidez: 4/3/2 y lectura cronometrada (Maurice, 1983; Nation, 2009)

Contar lo mismo en 4, luego 3, luego 2 minutos aumenta la velocidad de habla;
releer textos fáciles cronometrados sube las palabras por minuto.

**En la app:** retos semanales 4/3/2 grabados y medidor de WPM.

## 12. Análisis contrastivo español → inglés

Errores típicos de hispanohablantes que la app ataca explícitamente:

- **Pronunciación:** vocales largas/cortas (*ship/sheep*), schwa, /θ/ y /ð/, /v/ vs /b/,
  la *e* epentética (*eschool*), finales *-ed* (/t/, /d/, /ɪd/), consonantes finales.
- **Gramática:** omitir el sujeto (*is raining*), *I am agree*, *people is*,
  *I have 20 years*, orden adjetivo-sustantivo, *more easy*, *explain me*.
- **Falsos amigos:** *actually, embarrassed, library, sensible, assist, carpet...*
  (lista en `packages/content/src/false-friends.ts`).

## Expectativa realista para "hablar bien en 1 año"

Las horas de aprendizaje guiado de Cambridge sitúan **A2 ≈ 180–200 h** y
**B2 ≈ 500–600 h** acumuladas: **pasar de A2 a B2 requiere ~350–400 h**.

- Con **60 min/día, 6 días/semana** (~310 h/año) + lectura libre extra → **B1+/B2**.
- "Hablar bien" se define en la app como **B2 oral**: conversar con fluidez sobre temas
  cotidianos y de trabajo, entender series/podcasts con apoyo.
- La app lo comunica con honestidad y mide el progreso con evaluaciones trimestrales.

## Referencias

- Krashen, S. (1982). *Principles and Practice in Second Language Acquisition*.
- Krashen, S. (2004). *The Power of Reading*.
- Hu, M. & Nation, P. (2000). Unknown vocabulary density and reading comprehension. *Reading in a Foreign Language*.
- Nation, P. (2006). How large a vocabulary is needed for reading and listening? *Canadian Modern Language Review*.
- Nation, P. (2007). The four strands. *Innovation in Language Learning and Teaching*.
- Day, R. & Bamford, J. (1998). *Extensive Reading in the Second Language Classroom*.
- Webb, S. (2007). The effects of repetition on vocabulary knowledge. *Applied Linguistics*.
- Webb, S. & Chang, A. (2012). Second language vocabulary growth. *RELC Journal*.
- Cepeda, N. et al. (2006). Distributed practice in verbal recall tasks. *Psychological Bulletin*.
- Roediger, H. & Karpicke, J. (2006). Test-enhanced learning. *Psychological Science*.
- Swain, M. (1985). Communicative competence: some roles of comprehensible input and output.
- Long, M. (1996). The role of the linguistic environment in SLA.
- Lewis, M. (1993). *The Lexical Approach*.
- Kadota, S. (2019). *Shadowing as a Practice in Second Language Acquisition*.
- Cambridge English. *Guided learning hours* (CEFR).
