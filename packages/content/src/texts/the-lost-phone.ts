import type { GradedText } from "../types";

export const theLostPhone: GradedText = {
  id: "the-lost-phone",
  track: "general",
  title: "The Lost Phone",
  titleEs: "El móvil perdido",
  cefr: "A2",
  topic: "vida diaria",
  body: `On Tuesday evening, Marcos got off the bus and put his hand in his pocket. His phone wasn't there. He checked his bag, his jacket and his other pocket. Nothing.

He felt sick. All his photos, his messages and his bank app were on that phone. He ran back to the bus stop, but the bus was already far away.

At home, he used his sister's laptop to call the bus company. A woman answered and asked him some questions. "What colour is it? Does it have a case?" Marcos explained that it was black with a green case. "Please wait a moment," she said.

After two long minutes, she came back. "Good news. The driver found a black phone with a green case under a seat. You can pick it up tomorrow at the main station."

The next morning, Marcos got his phone back. He bought a box of chocolates for the driver and wrote a short note: "Thank you for being honest."`,
  glossary: [
    { term: "got off", es: "se bajó (de)", note: "Phrasal verb: get off the bus = bajarse del autobús." },
    { term: "pocket", es: "bolsillo" },
    { term: "checked", es: "revisó, comprobó" },
    { term: "felt sick", es: "se sintió fatal / con náuseas" },
    { term: "bus stop", es: "parada de autobús" },
    { term: "far away", es: "lejos" },
    { term: "laptop", es: "portátil" },
    { term: "case", es: "funda" },
    { term: "explained", es: "explicó", note: "Se dice explain something to someone, nunca explain me." },
    { term: "seat", es: "asiento" },
    { term: "pick it up", es: "recogerlo" },
    { term: "honest", es: "honrado, honesto", note: "La h no se pronuncia: /ˈɒnɪst/." },
  ],
  questions: [
    {
      prompt: "Where did Marcos lose his phone?",
      options: ["At work", "On the bus", "In a café"],
      answerIndex: 1,
    },
    {
      prompt: "How did he call the bus company?",
      options: ["With his sister's laptop", "From a public phone", "With his friend's phone"],
      answerIndex: 0,
    },
    {
      prompt: "What did he give the driver?",
      options: ["Money", "Flowers", "Chocolates and a note"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "His phone wasn't there.",
    "Please wait a moment.",
    "Thank you for being honest.",
  ],
};
