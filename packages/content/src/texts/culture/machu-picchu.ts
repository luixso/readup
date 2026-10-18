import type { GradedText } from "../../types";

export const machuPicchu: GradedText = {
  id: "culture-machu-picchu",
  track: "culture",
  category: "Historia",
  title: "Machu Picchu, the City in the Clouds",
  titleEs: "Machu Picchu, la ciudad entre las nubes",
  cefr: "A2+",
  topic: "historia",
  body: `High in the Andes mountains of Peru, about 2,400 metres above sea level, there is an ancient city called Machu Picchu. The Incas built it in the fifteenth century, probably as a country estate for the emperor Pachacuti.

The city is famous for its stone buildings. The Incas cut the stones so precisely that they fit together without any cement. In many walls, you cannot put even a knife between two stones. This technique also helped the buildings to survive earthquakes.

Around the city, there are agricultural terraces on the steep sides of the mountain. The Incas used them to grow food and to stop the soil from sliding down the hill when it rained.

About a hundred years after it was built, the city was abandoned, probably around the time of the Spanish conquest. The Spanish never found it, so it was not destroyed. Local farmers always knew about it, but the rest of the world only learned about Machu Picchu in 1911, after the American explorer Hiram Bingham visited it and published photographs.

Today it is a UNESCO World Heritage Site and one of the New Seven Wonders of the World. To protect it, the number of visitors per day is limited.`,
  glossary: [
    { term: "above sea level", es: "sobre el nivel del mar" },
    { term: "country estate", es: "finca, residencia de campo" },
    { term: "precisely", es: "con precisión" },
    { term: "fit together", es: "encajan" },
    { term: "knife", es: "cuchillo" },
    { term: "survive", es: "sobrevivir" },
    { term: "earthquakes", es: "terremotos" },
    { term: "terraces", es: "terrazas, andenes" },
    { term: "soil", es: "tierra, suelo" },
    { term: "sliding down", es: "deslizarse hacia abajo" },
    { term: "abandoned", es: "abandonada" },
    { term: "conquest", es: "conquista" },
    { term: "wonders", es: "maravillas" },
  ],
  questions: [
    {
      prompt: "Who built Machu Picchu?",
      options: ["The Spanish", "The Incas", "The Aztecs"],
      answerIndex: 1,
    },
    {
      prompt: "What is special about the stone walls?",
      options: [
        "The stones fit together without cement",
        "They are painted gold",
        "They are made of wood inside",
      ],
      answerIndex: 0,
    },
    {
      prompt: "Why was Machu Picchu not destroyed?",
      options: [
        "It was too big",
        "The Incas defended it",
        "The Spanish never found it",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "The Incas built it in the fifteenth century.",
    "The stones fit together without any cement.",
    "The number of visitors per day is limited.",
  ],
};
