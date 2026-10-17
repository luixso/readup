import type { GradedText } from "../types";

export const theWeekendMarket: GradedText = {
  id: "the-weekend-market",
  track: "general",
  title: "The Weekend Market",
  titleEs: "El mercado del fin de semana",
  cefr: "A2",
  topic: "vida diaria",
  body: `Every Saturday morning, Daniel goes to the market near his flat. He likes it more than the supermarket because the fruit is fresher and the people are friendly.

This Saturday, it was sunny and the market was full. Daniel bought tomatoes, some bread and a big piece of cheese. The cheese seller, an old woman called Rose, always gives him a small piece to try first. "This one is from a farm in the north," she told him. "It's my favourite."

Then Daniel looked for a present for his sister. Her birthday is on Monday. He found a beautiful blue cup at a small stall. It was a bit expensive, but he knew she would love it.

On the way home, he stopped at a café and ordered a coffee. He sat outside, watched the people walking past and thought: "This is the best part of my week."`,
  glossary: [
    { term: "flat", es: "piso, apartamento", note: "Inglés británico; en EE. UU. se dice apartment." },
    { term: "fresher", es: "más fresca" },
    { term: "friendly", es: "amable, simpática" },
    { term: "full", es: "lleno" },
    { term: "bought", es: "compró", note: "Pasado irregular de buy." },
    { term: "piece", es: "trozo" },
    { term: "seller", es: "vendedora" },
    { term: "try", es: "probar" },
    { term: "farm", es: "granja" },
    { term: "present", es: "regalo", note: "También significa presente, pero aquí es regalo." },
    { term: "stall", es: "puesto (de mercado)" },
    { term: "a bit", es: "un poco" },
    { term: "on the way home", es: "de camino a casa" },
    { term: "walking past", es: "pasando (por delante)" },
  ],
  questions: [
    {
      prompt: "Why does Daniel prefer the market?",
      options: [
        "It is cheaper",
        "The fruit is fresher and people are friendly",
        "It is open every day",
      ],
      answerIndex: 1,
    },
    {
      prompt: "Who is Rose?",
      options: ["Daniel's sister", "The cheese seller", "A waitress"],
      answerIndex: 1,
    },
    {
      prompt: "What did he buy for his sister?",
      options: ["A blue cup", "Some cheese", "Flowers"],
      answerIndex: 0,
    },
  ],
  shadowing: [
    "It's my favourite.",
    "It was a bit expensive, but he knew she would love it.",
    "This is the best part of my week.",
  ],
};
