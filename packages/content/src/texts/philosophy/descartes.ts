import type { GradedText } from "../../types";

export const descartes: GradedText = {
  id: "philo-descartes",
  track: "culture",
  category: "Filosofía",
  title: "Descartes: I Think, Therefore I Am",
  titleEs: "Descartes: pienso, luego existo",
  cefr: "B1",
  topic: "filosofía",
  body: `René Descartes, a French philosopher born in 1596, is often called the father of modern philosophy. He lived at a time when new scientific discoveries were challenging old beliefs, and he wanted to find knowledge that was absolutely certain.

His method was radical: he decided to doubt everything that could possibly be doubted. Our senses sometimes deceive us, so he could not fully trust them. When we dream, everything seems real, so how can we be sure that we are not dreaming right now? He even imagined an evil demon who tried to trick him about everything.

But Descartes realised that there was one thing he could not doubt. Even if he was wrong about everything else, the fact that he was doubting proved that he was thinking. And if he was thinking, he had to exist. He expressed this idea in a famous sentence: "I think, therefore I am."

From this starting point, Descartes tried to rebuild knowledge step by step. He also argued that the mind and the body are two completely different things, an idea known as dualism. Philosophers still debate how the mind and the body are connected today.`,
  glossary: [
    { term: "therefore", es: "por lo tanto, luego" },
    { term: "challenging", es: "poniendo en duda" },
    { term: "beliefs", es: "creencias" },
    { term: "knowledge", es: "conocimiento" },
    { term: "doubt", es: "dudar; duda", note: "La b es muda: /daʊt/." },
    { term: "senses", es: "sentidos" },
    { term: "deceive", es: "engañar" },
    { term: "evil demon", es: "genio maligno" },
    { term: "trick", es: "engañar" },
    { term: "realised", es: "se dio cuenta" },
    { term: "starting point", es: "punto de partida" },
    { term: "argued", es: "sostuvo, argumentó" },
    { term: "dualism", es: "dualismo" },
  ],
  questions: [
    {
      prompt: "What was Descartes looking for?",
      options: ["Knowledge that was absolutely certain", "A new religion", "A way to become rich"],
      answerIndex: 0,
    },
    {
      prompt: "Why couldn't he doubt that he existed?",
      options: [
        "Because his senses told him",
        "Because doubting proved that he was thinking",
        "Because a demon told him",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What is dualism?",
      options: [
        "The idea that there are two gods",
        "A method of doubting",
        "The idea that mind and body are different things",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: ["I think, therefore I am.", "Our senses sometimes deceive us.", "He decided to doubt everything."],
};
