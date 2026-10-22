import type { GradedText } from "../../types";

export const okComputerStory: GradedText = {
  id: "music-ok-computer-story",
  track: "music",
  category: "Radiohead",
  title: "OK Computer: Recording in an Old House",
  titleEs: "OK Computer: grabar en una casa antigua",
  cefr: "B1+",
  topic: "música",
  body: `Radiohead are a band from Oxford, in England. After their second album, they wanted to make something different from the guitar rock that was popular in the nineties. Instead of going to a normal studio, they recorded much of their third album in an old country house near the city of Bath, with the producer Nigel Godrich.

The house had big rooms, stone stairs and a strange atmosphere. The band moved their equipment from room to room to find different sounds. Some parts were recorded in a hall with a high ceiling because it gave the voice a natural echo.

The album came out in 1997. Its songs talk about a world that was changing fast: computers, cars, airports, advertising and politics. The singer, Thom Yorke, described people who feel lost and disconnected in modern life. In one song a computer voice reads a list of advice about how to live a healthy, productive life. It sounds calm, but it is actually quite scary.

Many people thought the album was too strange to sell well, but they were wrong. It reached number one in the United Kingdom, won a Grammy and today appears on almost every list of the best albums ever made.

Thirty years later, its themes feel even more relevant. We spend our days looking at screens, we receive endless notifications and we often feel tired of technology. Maybe that is why new generations still discover this album.`,
  glossary: [
    { term: "instead of", es: "en lugar de" },
    { term: "country house", es: "casa de campo, mansión rural" },
    { term: "producer", es: "productor" },
    { term: "stone stairs", es: "escaleras de piedra" },
    { term: "atmosphere", es: "ambiente" },
    { term: "equipment", es: "equipo (material)", note: "Incontable: no se dice «equipments»." },
    { term: "ceiling", es: "techo (interior)" },
    { term: "came out", es: "salió, se publicó" },
    { term: "advertising", es: "publicidad" },
    { term: "disconnected", es: "desconectado" },
    { term: "scary", es: "que da miedo, inquietante" },
    { term: "sell well", es: "venderse bien" },
    { term: "relevant", es: "pertinente, actual", note: "No siempre equivale a «relevante» (importante)." },
    { term: "endless", es: "interminable, sin fin" },
  ],
  questions: [
    {
      prompt: "Where did Radiohead record much of the album?",
      options: ["In a studio in London", "In an old country house near Bath", "In a church in Oxford"],
      answerIndex: 1,
    },
    {
      prompt: "Why did they record some parts in a hall with a high ceiling?",
      options: ["Because it was warmer", "Because it gave the voice a natural echo", "Because it was the biggest room"],
      answerIndex: 1,
    },
    {
      prompt: "What did many people think before the album came out?",
      options: ["That it was too strange to sell well", "That it was too short", "That it was a copy of their first album"],
      answerIndex: 0,
    },
  ],
  shadowing: [
    "They wanted to make something different.",
    "It sounds calm, but it is actually quite scary.",
    "Its themes feel even more relevant.",
  ],
};
