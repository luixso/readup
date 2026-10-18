import type { GradedText } from "../../types";

export const coffee: GradedText = {
  id: "culture-coffee",
  track: "culture",
  category: "Sociedad",
  title: "Coffee: A Journey Around the World",
  titleEs: "El café: un viaje alrededor del mundo",
  cefr: "A2+",
  topic: "sociedad",
  body: `Coffee is one of the most popular drinks in the world, but where did it come from? According to a famous legend, a goat herder in Ethiopia called Kaldi noticed that his goats became full of energy after eating red berries from a certain bush. He tried the berries himself and felt the same effect. Nobody knows if the story is true, but coffee plants really do come from Ethiopia.

By the fifteenth century, people in Yemen were growing coffee and drinking it. Religious men drank it to stay awake during long nights of prayer. From there, coffee spread to Mecca, Cairo and Istanbul, where the first coffee houses opened. People went there to drink coffee, listen to music, play games and talk about the news.

In the seventeenth century, coffee arrived in Europe. Some people were suspicious of this "bitter drink" at first, but coffee houses soon became popular in cities like Venice, London and Paris. Some of them were called "penny universities", because for the price of a coffee you could listen to interesting conversations.

Later, Europeans took coffee plants to their colonies in Asia and America. Today, Brazil is the largest producer in the world, and Colombia, Vietnam and Ethiopia are also major producers.`,
  glossary: [
    { term: "according to", es: "según" },
    { term: "goat herder", es: "pastor de cabras" },
    { term: "berries", es: "bayas" },
    { term: "bush", es: "arbusto" },
    { term: "growing", es: "cultivando" },
    { term: "stay awake", es: "mantenerse despiertos" },
    { term: "prayer", es: "oración" },
    { term: "coffee houses", es: "cafeterías, casas de café" },
    { term: "suspicious of", es: "desconfiados de" },
    { term: "bitter", es: "amarga" },
    { term: "penny", es: "penique" },
    { term: "colonies", es: "colonias" },
    { term: "producer", es: "productor" },
  ],
  questions: [
    {
      prompt: "In the legend, what did Kaldi notice?",
      options: [
        "His goats had more energy after eating red berries",
        "His goats were sleeping all day",
        "The berries were poisonous",
      ],
      answerIndex: 0,
    },
    {
      prompt: "Why did religious men in Yemen drink coffee?",
      options: ["To feel warm", "To stay awake during long nights of prayer", "Because it was cheap"],
      answerIndex: 1,
    },
    {
      prompt: "Which country is the largest producer today?",
      options: ["Ethiopia", "Colombia", "Brazil"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Nobody knows if the story is true.",
    "People went there to talk about the news.",
    "Coffee houses soon became popular.",
  ],
};
