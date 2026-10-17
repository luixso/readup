export type Cefr = "A2" | "A2+" | "B1" | "B1+" | "B2";

/** Las cuatro ramas de Paul Nation. */
export type Strand = "input" | "output" | "language" | "fluency";

export interface Phase {
  id: number;
  name: string;
  weeks: [start: number, end: number];
  from: Cefr;
  to: Cefr;
  /** Rango de palabras base de los textos graduados de la fase. */
  headwords: [min: number, max: number];
  targetWpm: number;
  focus: string[];
}

export const PHASES: Phase[] = [
  {
    id: 1,
    name: "Cimientos",
    weeks: [1, 13],
    from: "A2",
    to: "A2+",
    headwords: [600, 1200],
    targetWpm: 90,
    focus: [
      "1.500 palabras más frecuentes",
      "Sonidos difíciles para hispanohablantes",
      "Presente y pasado en contexto",
      "Shadowing de frases cortas",
    ],
  },
  {
    id: 2,
    name: "Despegue",
    weeks: [14, 26],
    from: "A2+",
    to: "B1",
    headwords: [1200, 2000],
    targetWpm: 110,
    focus: ["Lectura estrecha por temas", "Resúmenes orales", "Phrasal verbs comunes"],
  },
  {
    id: 3,
    name: "Autonomía",
    weeks: [27, 39],
    from: "B1",
    to: "B1+",
    headwords: [2000, 3000],
    targetWpm: 130,
    focus: ["Chunks y colocaciones", "Opinar y argumentar", "Técnica 4/3/2"],
  },
  {
    id: 4,
    name: "Fluidez",
    weeks: [40, 52],
    from: "B1+",
    to: "B2",
    headwords: [3000, 5000],
    targetWpm: 150,
    focus: ["Textos auténticos", "Debate y simulaciones", "Escucha sin apoyo escrito"],
  },
];

export function phaseForWeek(week: number): Phase {
  const clamped = Math.min(Math.max(week, 1), 52);
  return PHASES.find((p) => clamped >= p.weeks[0] && clamped <= p.weeks[1]) ?? PHASES[0]!;
}

export interface SessionBlock {
  activity: string;
  strand: Strand;
  minutes: number;
}

/**
 * Plantilla de 60 minutos repartida entre las cuatro ramas.
 * En la fase 1 pesa más el input; a partir de la fase 3 pesa más el output.
 */
function template(phase: Phase): Array<Omit<SessionBlock, "minutes"> & { weight: number }> {
  const outputWeight = phase.id >= 3 ? 18 : 12;
  const inputWeight = phase.id === 1 ? 18 : 15;
  return [
    { activity: "Repaso de tarjetas (SRS)", strand: "language", weight: 10 },
    { activity: "Texto del día: leer + escuchar", strand: "input", weight: inputWeight },
    { activity: "Micro-lección contrastiva", strand: "language", weight: 5 },
    { activity: "Shadowing / relectura cronometrada", strand: "fluency", weight: 10 },
    { activity: "Conversación con tutor IA o escritura", strand: "output", weight: outputWeight },
  ];
}

/** Construye la sesión del día ajustada a los minutos disponibles del usuario. */
export function buildDailySession(week: number, minutes: number): SessionBlock[] {
  const blocks = template(phaseForWeek(week));
  const totalWeight = blocks.reduce((s, b) => s + b.weight, 0);
  const result = blocks.map(({ weight, ...b }) => ({
    ...b,
    minutes: Math.max(1, Math.round((weight / totalWeight) * minutes)),
  }));
  // Ajustar el redondeo para que la suma sea exacta.
  const diff = minutes - result.reduce((s, b) => s + b.minutes, 0);
  const inputBlock = result.find((b) => b.strand === "input")!;
  inputBlock.minutes = Math.max(1, inputBlock.minutes + diff);
  return result;
}

export function minutesByStrand(session: SessionBlock[]): Record<Strand, number> {
  const totals: Record<Strand, number> = { input: 0, output: 0, language: 0, fluency: 0 };
  for (const b of session) totals[b.strand] += b.minutes;
  return totals;
}
