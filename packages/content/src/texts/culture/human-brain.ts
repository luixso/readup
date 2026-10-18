import type { GradedText } from "../../types";

export const humanBrain: GradedText = {
  id: "culture-human-brain",
  track: "culture",
  category: "Ciencia",
  title: "Amazing Facts About Your Brain",
  titleEs: "Datos asombrosos sobre tu cerebro",
  cefr: "B1",
  topic: "ciencia",
  body: `The human brain weighs about 1.4 kilograms, roughly two per cent of an adult's body weight. However, it uses around twenty per cent of the body's energy, even when we are resting or sleeping.

The brain contains approximately 86 billion nerve cells called neurons. Each neuron can connect with thousands of others, creating trillions of connections. Neurons communicate using tiny electrical signals and chemicals, and some messages travel at more than 100 metres per second.

One of the most surprising discoveries of modern science is neuroplasticity: the brain's ability to change throughout our lives. Every time we learn something new, such as a word in another language, connections between neurons become stronger. Skills that we practise often become faster and more automatic, while connections that we don't use become weaker. In other words, learning physically changes your brain.

There are also many myths about the brain. A famous one says that we only use ten per cent of it. In reality, brain scans show that we use almost all of it, just not all parts at the same time.

Sleep is essential, too. While we sleep, the brain organises memories and removes waste products. So if you want to remember the English you studied today, a good night's sleep is one of the best things you can do.`,
  glossary: [
    { term: "weighs", es: "pesa" },
    { term: "roughly", es: "aproximadamente" },
    { term: "resting", es: "descansando" },
    { term: "billion", es: "mil millones", note: "¡Cuidado! billion = 1.000.000.000 (mil millones), no un billón español." },
    { term: "neurons", es: "neuronas" },
    { term: "trillions", es: "billones" },
    { term: "signals", es: "señales" },
    { term: "ability", es: "capacidad" },
    { term: "throughout", es: "a lo largo de" },
    { term: "skills", es: "habilidades" },
    { term: "in other words", es: "en otras palabras" },
    { term: "scans", es: "escáneres" },
    { term: "waste products", es: "desechos" },
  ],
  questions: [
    {
      prompt: "How much of the body's energy does the brain use?",
      options: ["About two per cent", "About twenty per cent", "About fifty per cent"],
      answerIndex: 1,
    },
    {
      prompt: "What is neuroplasticity?",
      options: [
        "The brain's ability to change throughout life",
        "A disease of the brain",
        "The weight of the brain",
      ],
      answerIndex: 0,
    },
    {
      prompt: "Is it true that we only use ten per cent of our brain?",
      options: [
        "Yes, scientists have proved it",
        "Only when we sleep",
        "No, we use almost all of it",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Learning physically changes your brain.",
    "In reality, we use almost all of it.",
    "A good night's sleep is one of the best things you can do.",
  ],
};
