import type { GradedText } from "../../types";

export const amazon: GradedText = {
  id: "culture-amazon",
  track: "culture",
  category: "Naturaleza",
  title: "The Amazon Rainforest",
  titleEs: "La selva amazónica",
  cefr: "A2+",
  topic: "naturaleza",
  body: `The Amazon is the largest tropical rainforest in the world. It covers more than five million square kilometres, and most of it is in Brazil. Parts of it are also in Peru, Colombia, Venezuela, Ecuador, Bolivia and other South American countries.

The forest is home to an incredible number of plants and animals. Scientists believe that about one in ten known species on Earth lives there, including jaguars, pink river dolphins, colourful parrots and thousands of types of insects. Every year, researchers discover new species.

The Amazon River runs through the forest. It carries more water than any other river on the planet. Millions of people, including many indigenous communities, depend on the river and the forest for food, water and medicine.

The rainforest is also important for the whole planet. Its trees absorb huge amounts of carbon dioxide and help to control the climate. That is why people sometimes call it "the lungs of the Earth".

Unfortunately, the Amazon is in danger. Every year, large areas are cut down for farming, cattle and mining. Many scientists warn that if deforestation continues, parts of the forest could turn into dry grassland.`,
  glossary: [
    { term: "rainforest", es: "selva tropical" },
    { term: "square kilometres", es: "kilómetros cuadrados" },
    { term: "species", es: "especies", note: "Igual en singular y plural: one species, two species." },
    { term: "parrots", es: "loros" },
    { term: "researchers", es: "investigadores" },
    { term: "carries", es: "lleva, transporta" },
    { term: "indigenous", es: "indígenas" },
    { term: "depend on", es: "dependen de", note: "En inglés es depend on, no depend of." },
    { term: "absorb", es: "absorben" },
    { term: "lungs", es: "pulmones" },
    { term: "cut down", es: "talados" },
    { term: "cattle", es: "ganado" },
    { term: "grassland", es: "pradera, sabana" },
  ],
  questions: [
    {
      prompt: "In which country is most of the Amazon?",
      options: ["Peru", "Brazil", "Colombia"],
      answerIndex: 1,
    },
    {
      prompt: "Why is the Amazon called 'the lungs of the Earth'?",
      options: [
        "Because it is very windy",
        "Because its trees absorb carbon dioxide and help control the climate",
        "Because it has the most rivers",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What is a danger for the Amazon?",
      options: ["Too much rain", "Tourism only", "Deforestation for farming, cattle and mining"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "The forest is home to an incredible number of plants and animals.",
    "Millions of people depend on the river and the forest.",
    "Unfortunately, the Amazon is in danger.",
  ],
};
