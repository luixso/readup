import type { GradedText } from "../../types";

export const moonLanding: GradedText = {
  id: "culture-moon-landing",
  track: "culture",
  category: "Historia",
  title: "One Small Step: The Moon Landing",
  titleEs: "Un pequeño paso: la llegada a la Luna",
  cefr: "A2+",
  topic: "historia",
  body: `On 16 July 1969, a huge rocket called Saturn V took off from Florida, in the United States. On board the Apollo 11 spacecraft were three astronauts: Neil Armstrong, Buzz Aldrin and Michael Collins.

Four days later, on 20 July, Armstrong and Aldrin landed on the Moon in a small vehicle called the Eagle. Collins stayed in orbit around the Moon, waiting for them. The landing was not easy: the computer showed alarms, and Armstrong had to fly the Eagle by hand to avoid a field of rocks. When they finally landed, they had very little fuel left.

A few hours later, Armstrong climbed down the ladder and became the first person to walk on the Moon. His words became famous: "That's one small step for man, one giant leap for mankind." About 600 million people watched it live on television.

The two astronauts spent about two and a half hours outside. They collected rocks, took photographs and put a flag on the surface. Then they returned to Collins, and all three came back safely to Earth on 24 July.

Between 1969 and 1972, twelve astronauts walked on the Moon. Nobody has been back since then.`,
  glossary: [
    { term: "rocket", es: "cohete" },
    { term: "took off", es: "despegó" },
    { term: "on board", es: "a bordo" },
    { term: "spacecraft", es: "nave espacial" },
    { term: "landed", es: "alunizaron, aterrizaron" },
    { term: "orbit", es: "órbita" },
    { term: "avoid", es: "evitar" },
    { term: "fuel", es: "combustible" },
    { term: "ladder", es: "escalera (de mano)" },
    { term: "leap", es: "salto" },
    { term: "mankind", es: "la humanidad" },
    { term: "surface", es: "superficie" },
    { term: "safely", es: "sanos y salvos" },
  ],
  questions: [
    {
      prompt: "Who stayed in orbit and did not walk on the Moon?",
      options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
      answerIndex: 2,
    },
    {
      prompt: "Why did Armstrong fly the Eagle by hand?",
      options: ["To avoid a field of rocks", "To save time", "Because Aldrin was ill"],
      answerIndex: 0,
    },
    {
      prompt: "How many astronauts have walked on the Moon?",
      options: ["Two", "Twelve", "Twenty"],
      answerIndex: 1,
    },
  ],
  shadowing: [
    "That's one small step for man, one giant leap for mankind.",
    "They had very little fuel left.",
    "Nobody has been back since then.",
  ],
};
