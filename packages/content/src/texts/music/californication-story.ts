import type { GradedText } from "../../types";

export const californicationStory: GradedText = {
  id: "music-californication-story",
  track: "music",
  category: "Red Hot Chili Peppers",
  title: "Californication: The Return of a Guitarist",
  titleEs: "Californication: la vuelta de un guitarrista",
  cefr: "B1",
  topic: "música",
  body: `Red Hot Chili Peppers started in Los Angeles in the early eighties. They became famous for mixing funk, punk and rap, and for their wild concerts. The singer is Anthony Kiedis, the bass player is Flea and the drummer is Chad Smith.

In the mid nineties the band was in trouble. Their guitarist, John Frusciante, had left the group years before and was very ill because of drugs. Without him, the band struggled to write new songs. Then, in 1998, Frusciante got better and the others invited him to come back. Flea later said that it felt like getting a brother back.

They recorded Californication with the producer Rick Rubin and released it in 1999. The sound was different from their earlier albums: there was still funk, but the songs were more melodic and emotional. Frusciante played simple, beautiful guitar parts and sang high harmonies behind Kiedis.

The album became their biggest success. It has sold more than fifteen million copies, and singles like "Scar Tissue", "Otherside" and "Californication" were played on radios all over the world. "Scar Tissue" won a Grammy for best rock song.

Many of the lyrics talk about California, fame, addiction, friendship and second chances. In a way, the story of the album is also a story of recovery: a band and a friend who found each other again.`,
  glossary: [
    { term: "early eighties", es: "principios de los ochenta" },
    { term: "wild", es: "salvajes, desenfrenados" },
    { term: "in trouble", es: "en apuros, con problemas" },
    { term: "ill", es: "enfermo" },
    { term: "struggled to", es: "le costó mucho, luchó por" },
    { term: "got better", es: "se recuperó, mejoró" },
    { term: "released", es: "publicaron, lanzaron" },
    { term: "earlier", es: "anteriores" },
    { term: "harmonies", es: "armonías, segundas voces" },
    { term: "copies", es: "copias, ejemplares" },
    { term: "fame", es: "fama" },
    { term: "addiction", es: "adicción" },
    { term: "second chances", es: "segundas oportunidades" },
    { term: "recovery", es: "recuperación" },
  ],
  questions: [
    {
      prompt: "Why was the band in trouble in the mid nineties?",
      options: [
        "Their singer had lost his voice",
        "They had no money for a studio",
        "Their guitarist had left and they struggled to write songs",
      ],
      answerIndex: 2,
    },
    {
      prompt: "How was the sound of Californication different?",
      options: ["It was more melodic and emotional", "It had no guitars", "It was only rap"],
      answerIndex: 0,
    },
    {
      prompt: "Which song won a Grammy?",
      options: ["Otherside", "Scar Tissue", "Road Trippin'"],
      answerIndex: 1,
    },
  ],
  shadowing: [
    "It felt like getting a brother back.",
    "The album became their biggest success.",
    "It is also a story of recovery.",
  ],
};
