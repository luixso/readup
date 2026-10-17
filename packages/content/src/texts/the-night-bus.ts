import type { GradedText } from "../types";

export const theNightBus: GradedText = {
  id: "the-night-bus",
  track: "general",
  title: "The Night Bus",
  titleEs: "El autobús nocturno",
  cefr: "B1",
  topic: "relato",
  body: `It was almost midnight when Elena finished her shift at the hospital. Her feet ached, and all she wanted was her bed. She waited at the empty bus stop, wrapped in her coat, watching the rain fall under the orange street lights.

The night bus arrived ten minutes late. Apart from the driver, there was only one other passenger: an elderly man sitting near the front, holding a small bunch of yellow flowers. Elena sat a few rows behind him and closed her eyes.

A few stops later, the man stood up slowly and turned to her. "Excuse me," he said, smiling. "Would you mind holding these for a moment? My hands aren't as steady as they used to be." She took the flowers while he carefully stepped off the bus.

Before she could give them back, the doors closed. She tapped on the window, but he just waved. Elena looked down. Hidden among the flowers was a small card that said: "For whoever needs them most tonight."

For the first time that week, she smiled all the way home.`,
  glossary: [
    { term: "shift", es: "turno (de trabajo)" },
    { term: "ached", es: "le dolían", note: "ache se pronuncia /eɪk/." },
    { term: "wrapped in", es: "envuelta en" },
    { term: "apart from", es: "aparte de, salvo" },
    { term: "elderly", es: "mayor, anciano", note: "Forma educada de decir old." },
    { term: "bunch", es: "ramo, manojo" },
    { term: "rows", es: "filas" },
    { term: "would you mind", es: "¿le importaría...?", note: "Would you mind + -ing: petición muy educada." },
    { term: "steady", es: "firmes, estables" },
    { term: "used to be", es: "solían ser", note: "used to = costumbre o estado en el pasado." },
    { term: "tapped", es: "dio golpecitos" },
    { term: "waved", es: "saludó con la mano" },
    { term: "whoever", es: "quienquiera que" },
  ],
  questions: [
    {
      prompt: "Where does Elena work?",
      options: ["At a hospital", "At a flower shop", "At a bus company"],
      answerIndex: 0,
    },
    {
      prompt: "Why did the man ask Elena to hold the flowers?",
      options: [
        "He wanted to buy a ticket",
        "His hands weren't steady",
        "He needed to make a phone call",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What do we learn from the card?",
      options: [
        "The flowers were for his wife",
        "He forgot the flowers by mistake",
        "He wanted to give the flowers to someone who needed them",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "All she wanted was her bed.",
    "Would you mind holding these for a moment?",
    "She smiled all the way home.",
  ],
};
