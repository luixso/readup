import type { GradedText } from "../../types";

export const mill: GradedText = {
  id: "philo-mill",
  track: "culture",
  category: "Filosofía",
  title: "John Stuart Mill: Happiness and Freedom",
  titleEs: "John Stuart Mill: felicidad y libertad",
  cefr: "B1",
  topic: "filosofía",
  body: `John Stuart Mill was born in London in 1806. His father gave him an extraordinary education: he was learning Greek at the age of three. At twenty, after years of intense study, Mill suffered a deep depression. He later said that poetry and music helped him to recover, and that experience shaped his ideas about what makes life worth living.

Mill is one of the main defenders of utilitarianism. This theory says that the right action is the one that produces the greatest happiness for the greatest number of people. What matters is not our intentions or fixed rules, but the consequences of what we do. Unlike some earlier utilitarians, Mill argued that some pleasures are higher than others: "It is better to be a human being dissatisfied than a pig satisfied."

In his book On Liberty, published in 1859, Mill defended individual freedom. According to his "harm principle", society and the government can only limit a person's freedom to prevent harm to others. As long as you don't hurt anyone, you should be free to think, speak and live as you choose, even if others disagree.

Mill was also a strong defender of equality between men and women, at a time when women could not vote. Many of his ideas are still at the centre of debates about freedom of speech today.`,
  glossary: [
    { term: "extraordinary", es: "extraordinaria" },
    { term: "intense", es: "intenso" },
    { term: "shaped", es: "moldeó, dio forma a" },
    { term: "worth living", es: "que vale la pena vivir" },
    { term: "defenders", es: "defensores" },
    { term: "utilitarianism", es: "utilitarismo" },
    { term: "greatest happiness", es: "la mayor felicidad" },
    { term: "intentions", es: "intenciones" },
    { term: "pleasures", es: "placeres" },
    { term: "dissatisfied", es: "insatisfecho" },
    { term: "harm principle", es: "principio del daño" },
    { term: "as long as", es: "siempre que, mientras" },
    { term: "equality", es: "igualdad" },
    { term: "freedom of speech", es: "libertad de expresión" },
  ],
  questions: [
    {
      prompt: "According to utilitarianism, what makes an action right?",
      options: [
        "Producing the greatest happiness for the greatest number",
        "Following religious rules",
        "Having good intentions",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What does the harm principle say?",
      options: [
        "The government can do anything",
        "Freedom can only be limited to prevent harm to others",
        "Everyone must agree with the majority",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What else did Mill defend?",
      options: ["Strict rules for children", "The power of kings", "Equality between men and women"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "What matters are the consequences of what we do.",
    "As long as you don't hurt anyone, you should be free.",
    "It is better to be a human being dissatisfied than a pig satisfied.",
  ],
};
