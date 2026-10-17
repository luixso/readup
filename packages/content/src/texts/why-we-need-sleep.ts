import type { GradedText } from "../types";

export const whyWeNeedSleep: GradedText = {
  id: "why-we-need-sleep",
  track: "general",
  title: "Why We Need Sleep",
  titleEs: "Por qué necesitamos dormir",
  cefr: "B1",
  topic: "salud",
  body: `Most adults need between seven and nine hours of sleep a night, but many people get much less. We often think of sleep as wasted time, especially when we are busy. However, scientists now believe that sleep is one of the most important things we can do for our health.

While we sleep, the brain is surprisingly active. It sorts the information we received during the day and stores the important parts as long-term memories. This is why students who sleep well after studying usually remember more than students who stay up all night.

Sleep also helps the body repair itself. People who regularly sleep less than six hours have a higher risk of heart problems, weight gain and catching colds. Lack of sleep affects our mood, too: we become more irritable and find it harder to concentrate.

So how can we sleep better? Experts recommend going to bed at the same time every day, avoiding coffee in the afternoon and keeping phones out of the bedroom. Small changes like these can make a big difference.`,
  glossary: [
    { term: "wasted", es: "perdido, desperdiciado" },
    { term: "however", es: "sin embargo" },
    { term: "sorts", es: "ordena, clasifica" },
    { term: "stores", es: "almacena, guarda" },
    { term: "long-term", es: "a largo plazo" },
    { term: "stay up", es: "quedarse despierto", note: "Phrasal verb: stay up late = trasnochar." },
    { term: "repair", es: "reparar" },
    { term: "risk", es: "riesgo" },
    { term: "weight gain", es: "aumento de peso" },
    { term: "catching colds", es: "resfriarse", note: "catch a cold = resfriarse. ¡No es «constipated»!" },
    { term: "lack of", es: "falta de" },
    { term: "mood", es: "estado de ánimo" },
    { term: "avoiding", es: "evitar" },
  ],
  questions: [
    {
      prompt: "How many hours of sleep do most adults need?",
      options: ["Five to six", "Seven to nine", "Ten to twelve"],
      answerIndex: 1,
    },
    {
      prompt: "What does the brain do while we sleep?",
      options: [
        "It stops working completely",
        "It sorts information and stores memories",
        "It only controls breathing",
      ],
      answerIndex: 1,
    },
    {
      prompt: "Which is NOT a recommendation in the text?",
      options: [
        "Go to bed at the same time",
        "Avoid coffee in the afternoon",
        "Exercise just before bed",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "We often think of sleep as wasted time.",
    "Lack of sleep affects our mood, too.",
    "Small changes like these can make a big difference.",
  ],
};
