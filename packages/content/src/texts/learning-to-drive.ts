import type { GradedText } from "../types";

export const learningToDrive: GradedText = {
  id: "learning-to-drive",
  track: "general",
  title: "Learning to Drive at Forty",
  titleEs: "Aprender a conducir a los cuarenta",
  cefr: "A2+",
  topic: "superación",
  body: `Carmen always said she didn't need a car. She lived in the city, the public transport was good, and driving made her nervous. But when she turned forty, her company moved to a new office outside the city, and the journey by bus took almost two hours.

So she decided to take driving lessons. Her instructor, Pedro, was a patient man with a calm voice. In the first lesson, Carmen was so nervous that she forgot which pedal was the brake. "Don't worry," Pedro said. "Everybody makes mistakes at the beginning."

For three months, she practised twice a week. Parking was the hardest part. She failed her first test because she hit the kerb while she was parking. She felt terrible and almost gave up.

But Pedro encouraged her to try again. Six weeks later, she passed. Now Carmen drives to work in thirty minutes, and she tells her friends: "It's never too late to learn something new."`,
  glossary: [
    { term: "turned forty", es: "cumplió cuarenta", note: "turn + edad = cumplir años." },
    { term: "journey", es: "trayecto, viaje" },
    { term: "took", es: "tardaba (llevaba)", note: "It takes two hours = se tarda dos horas." },
    { term: "lessons", es: "clases" },
    { term: "patient", es: "paciente" },
    { term: "brake", es: "freno" },
    { term: "parking", es: "aparcar" },
    { term: "failed", es: "suspendió" },
    { term: "kerb", es: "bordillo", note: "En EE. UU. se escribe curb." },
    { term: "gave up", es: "se rindió", note: "Phrasal verb: give up = rendirse, dejar de intentar." },
    { term: "encouraged", es: "animó" },
    { term: "passed", es: "aprobó", note: "Pass an exam = aprobar. No significa «pasar» un examen." },
  ],
  questions: [
    {
      prompt: "Why did Carmen decide to learn to drive?",
      options: [
        "She wanted to travel",
        "Her office moved outside the city",
        "Her husband asked her",
      ],
      answerIndex: 1,
    },
    {
      prompt: "Why did she fail her first test?",
      options: ["She drove too fast", "She forgot the brake", "She hit the kerb while parking"],
      answerIndex: 2,
    },
    {
      prompt: "What does 'passed' mean in this text?",
      options: ["Aprobó", "Pasó por delante", "Suspendió"],
      answerIndex: 0,
    },
  ],
  shadowing: [
    "Everybody makes mistakes at the beginning.",
    "She felt terrible and almost gave up.",
    "It's never too late to learn something new.",
  ],
};
