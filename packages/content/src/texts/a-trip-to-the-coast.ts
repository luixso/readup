import type { GradedText } from "../types";

export const aTripToTheCoast: GradedText = {
  id: "a-trip-to-the-coast",
  title: "A Trip to the Coast",
  titleEs: "Un viaje a la costa",
  cefr: "A2+",
  topic: "viajes",
  body: `Last summer, Sofía and her best friend Andrea decided to travel around the south coast of England. They had very little money, so they planned everything carefully. They booked cheap rooms in small hostels and bought train tickets two months before the trip.

The first town was Brighton. They walked along the beach and ate fish and chips, but the weather was cold and windy. "I thought England in July was warm!" Andrea laughed.

In the second town, things went wrong. Their train was cancelled, and they had to wait three hours at the station. Sofía was angry at first, but then they met a family from Scotland who were also waiting. They talked for hours. The family gave them advice about places to visit, and Andrea practised her English more that afternoon than in a whole year of classes.

When they got home, both girls agreed: the cancelled train was the best thing that happened on the trip.`,
  glossary: [
    { term: "coast", es: "costa" },
    { term: "planned", es: "planearon, organizaron" },
    { term: "carefully", es: "con cuidado" },
    { term: "booked", es: "reservaron" },
    { term: "cheap", es: "barato" },
    { term: "windy", es: "ventoso, con viento" },
    { term: "went wrong", es: "salieron mal", note: "Chunk muy común: things went wrong." },
    { term: "cancelled", es: "cancelado" },
    { term: "had to", es: "tuvieron que" },
    { term: "advice", es: "consejos", note: "Incontable: some advice, nunca an advice / advices." },
    { term: "practised", es: "practicó", note: "Ortografía británica; en EE. UU. practiced." },
    { term: "whole", es: "entero" },
    { term: "agreed", es: "estuvieron de acuerdo", note: "Se dice they agreed, nunca they were agree." },
  ],
  questions: [
    {
      prompt: "How did they save money?",
      options: [
        "They stayed with friends",
        "They booked cheap hostels and early train tickets",
        "They travelled by car",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What was the weather like in Brighton?",
      options: ["Hot and sunny", "Cold and windy", "Rainy and warm"],
      answerIndex: 1,
    },
    {
      prompt: "Why was the cancelled train 'the best thing'?",
      options: [
        "They got their money back",
        "They met a nice family and practised English",
        "They found a better hotel",
      ],
      answerIndex: 1,
    },
  ],
  shadowing: [
    "Things went wrong.",
    "We had to wait three hours at the station.",
    "It was the best thing that happened on the trip.",
  ],
};
