import type { GradedText } from "../../types";

export const greatWall: GradedText = {
  id: "culture-great-wall",
  track: "culture",
  category: "Historia",
  title: "The Great Wall of China",
  titleEs: "La Gran Muralla china",
  cefr: "A2+",
  topic: "historia",
  body: `The Great Wall of China is not one single wall. It is a long series of walls, towers and forts that different Chinese dynasties built over more than two thousand years. The parts that most tourists visit today, near Beijing, were built during the Ming dynasty, between the fourteenth and seventeenth centuries.

The main purpose of the wall was defence. It helped to protect China from groups that attacked from the north. Soldiers lived in the towers and used fire and smoke to send messages quickly from one tower to the next.

Building the wall was extremely hard work. Millions of soldiers, farmers and prisoners worked on it, and many of them died. In the mountains, workers carried stone and bricks up steep hills by hand.

There is a famous myth that you can see the Great Wall from space with your eyes. In fact, astronauts say this is not true: the wall is very long, but it is too narrow and its colour is similar to the land around it.

Today, the Great Wall is a UNESCO World Heritage Site and one of the most visited places in the world.`,
  glossary: [
    { term: "single", es: "único, solo" },
    { term: "towers", es: "torres" },
    { term: "forts", es: "fuertes, fortalezas" },
    { term: "dynasties", es: "dinastías" },
    { term: "purpose", es: "propósito, finalidad" },
    { term: "defence", es: "defensa", note: "En EE. UU. se escribe defense." },
    { term: "smoke", es: "humo" },
    { term: "prisoners", es: "presos" },
    { term: "steep", es: "empinadas" },
    { term: "myth", es: "mito" },
    { term: "in fact", es: "en realidad" },
    { term: "narrow", es: "estrecha" },
    { term: "world heritage site", es: "Patrimonio de la Humanidad" },
  ],
  questions: [
    {
      prompt: "What was the main purpose of the wall?",
      options: ["Defence", "Trade", "Tourism"],
      answerIndex: 0,
    },
    {
      prompt: "How did soldiers send messages?",
      options: ["With letters", "With fire and smoke", "With horses only"],
      answerIndex: 1,
    },
    {
      prompt: "Can you see the wall from space with your eyes?",
      options: ["Yes, very easily", "Only at night", "No, it is too narrow"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "The Great Wall of China is not one single wall.",
    "Building the wall was extremely hard work.",
    "In fact, astronauts say this is not true.",
  ],
};
