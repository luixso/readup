import type { GradedText } from "../types";

export const cookingWithGrandma: GradedText = {
  id: "cooking-with-grandma",
  track: "general",
  title: "Cooking with Grandma",
  titleEs: "Cocinando con la abuela",
  cefr: "A2",
  topic: "familia",
  body: `When I was a child, I spent every summer at my grandmother's house in the countryside. She didn't have a television, but she had a big kitchen, and that was the centre of the house.

Every Sunday, we made bread together. First, she mixed flour, water, salt and yeast in a large bowl. Then I had to knead the dough with my hands for ten minutes. It was hard work for a small boy, and my arms always hurt. After that, we covered the bowl with a cloth and waited for the dough to rise.

While we waited, Grandma told me stories about her life. She grew up with seven brothers and sisters, and they never had much money. "We were poor," she said, "but we always had bread on the table."

Now I live in a city flat, and I'm very busy. But on Sundays, I still make bread. When the kitchen smells of fresh bread, I remember her voice and her stories.`,
  glossary: [
    { term: "spent", es: "pasé (tiempo)", note: "Pasado de spend: spend time = pasar tiempo." },
    { term: "countryside", es: "campo" },
    { term: "flour", es: "harina", note: "Se pronuncia igual que flower (flor)." },
    { term: "yeast", es: "levadura" },
    { term: "bowl", es: "cuenco, bol" },
    { term: "knead", es: "amasar", note: "La k no se pronuncia: /niːd/." },
    { term: "dough", es: "masa", note: "Se pronuncia /dəʊ/, como «dou»." },
    { term: "hurt", es: "dolían" },
    { term: "cloth", es: "paño, trapo" },
    { term: "rise", es: "subir, levar" },
    { term: "grew up", es: "creció", note: "Phrasal verb: grow up = criarse, crecer." },
    { term: "smells of", es: "huele a" },
  ],
  questions: [
    {
      prompt: "What was the centre of Grandma's house?",
      options: ["The garden", "The kitchen", "The living room"],
      answerIndex: 1,
    },
    {
      prompt: "What did the boy do with the dough?",
      options: ["He kneaded it", "He cut it", "He cooked it"],
      answerIndex: 0,
    },
    {
      prompt: "What does the narrator do on Sundays now?",
      options: ["He visits his grandmother", "He goes to a restaurant", "He makes bread"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "It was hard work for a small boy.",
    "We were poor, but we always had bread on the table.",
    "I remember her voice and her stories.",
  ],
};
