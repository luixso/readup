import type { GradedText } from "../../types";

export const olympics: GradedText = {
  id: "culture-olympics",
  track: "culture",
  category: "Sociedad",
  title: "A Short History of the Olympic Games",
  titleEs: "Breve historia de los Juegos Olímpicos",
  cefr: "A2+",
  topic: "sociedad",
  body: `The first recorded Olympic Games took place in 776 BC in Olympia, in ancient Greece. They were part of a religious festival for the god Zeus. At first there was only one event: a running race of about 190 metres. Later, the Greeks added wrestling, boxing, horse racing and the pentathlon.

Only free men who spoke Greek could compete, and married women were not even allowed to watch. The winners did not receive gold medals. Instead, they got a crown made of olive leaves, but they became heroes in their home cities.

The ancient Games continued for more than a thousand years, until they ended at the end of the fourth century AD.

In the nineteenth century, a French educator called Pierre de Coubertin wanted to bring them back. He believed that sport could promote peace and friendship between nations. The first modern Olympic Games were held in Athens in 1896, with athletes from fourteen countries. Women competed for the first time four years later, in Paris.

Today, the Summer and Winter Games each take place every four years, and the five rings of the Olympic flag represent the union of the continents.`,
  glossary: [
    { term: "recorded", es: "registrados, documentados" },
    { term: "took place", es: "tuvieron lugar" },
    { term: "ancient", es: "antigua" },
    { term: "event", es: "prueba (deportiva)" },
    { term: "race", es: "carrera" },
    { term: "wrestling", es: "lucha" },
    { term: "compete", es: "competir" },
    { term: "crown", es: "corona" },
    { term: "olive leaves", es: "hojas de olivo" },
    { term: "bring them back", es: "recuperarlos, hacerlos volver" },
    { term: "promote", es: "fomentar" },
    { term: "were held", es: "se celebraron" },
    { term: "rings", es: "anillos, aros" },
  ],
  questions: [
    {
      prompt: "Where did the first recorded Olympic Games take place?",
      options: ["In Athens", "In Olympia", "In Rome"],
      answerIndex: 1,
    },
    {
      prompt: "What did ancient winners receive?",
      options: ["A crown of olive leaves", "A gold medal", "Money"],
      answerIndex: 0,
    },
    {
      prompt: "Why did Pierre de Coubertin bring the Games back?",
      options: [
        "To make money",
        "To build stadiums in France",
        "To promote peace and friendship between nations",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "They were part of a religious festival.",
    "Instead, they got a crown made of olive leaves.",
    "Sport can promote peace and friendship between nations.",
  ],
};
