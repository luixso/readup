import type { GradedText } from "../types";

export const aDayWithoutTheInternet: GradedText = {
  id: "a-day-without-the-internet",
  track: "general",
  title: "A Day Without the Internet",
  titleEs: "Un día sin internet",
  cefr: "A2+",
  topic: "tecnología",
  body: `Last week, there was a big storm in our town, and the internet stopped working for a whole day. At first, everybody in my family was annoyed. My brother couldn't play his online games, my mum couldn't join her video calls, and I couldn't watch my favourite series.

My dad, who loves old things, found a box of board games in the cupboard. "Come on," he said. "Let's play." Nobody wanted to, but there was nothing else to do.

Surprisingly, we had a great time. We played cards for two hours and laughed a lot. My brother, who is usually very quiet, told funny jokes. In the afternoon, I read a paper book for the first time in months, and I didn't check my phone once.

In the evening, we cooked dinner together and talked about our week. When the internet came back the next morning, we were happy, of course. But we also made a new rule: every Sunday evening, no screens for the whole family.`,
  glossary: [
    { term: "storm", es: "tormenta" },
    { term: "stopped working", es: "dejó de funcionar", note: "stop + -ing = dejar de hacer algo." },
    { term: "whole", es: "entero" },
    { term: "annoyed", es: "molestos, fastidiados" },
    { term: "join", es: "unirse, entrar (a una llamada)" },
    { term: "board games", es: "juegos de mesa" },
    { term: "cupboard", es: "armario", note: "Se pronuncia /ˈkʌbəd/: la p es muda." },
    { term: "surprisingly", es: "sorprendentemente" },
    { term: "quiet", es: "callado, tranquilo", note: "No confundir con quite (bastante)." },
    { term: "jokes", es: "chistes" },
    { term: "came back", es: "volvió" },
    { term: "screens", es: "pantallas" },
  ],
  questions: [
    {
      prompt: "Why did the internet stop working?",
      options: ["Because of a storm", "Because they didn't pay", "Because the router broke"],
      answerIndex: 0,
    },
    {
      prompt: "What did the dad find?",
      options: ["An old radio", "A box of board games", "Some old photos"],
      answerIndex: 1,
    },
    {
      prompt: "What is the family's new rule?",
      options: [
        "No phones at dinner",
        "Board games every day",
        "No screens on Sunday evenings",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "There was nothing else to do.",
    "Surprisingly, we had a great time.",
    "We also made a new rule.",
  ],
};
