import type { GradedText } from "../../types";

export const wittgenstein: GradedText = {
  id: "philo-wittgenstein",
  track: "culture",
  category: "Filosofía",
  title: "Wittgenstein: The Limits of Language",
  titleEs: "Wittgenstein: los límites del lenguaje",
  cefr: "B1",
  topic: "filosofía",
  body: `Ludwig Wittgenstein was born in Vienna in 1889 into one of the richest families in Europe. He studied engineering, but he became fascinated by logic and moved to Cambridge to work with the philosopher Bertrand Russell.

During the First World War, while he was a soldier, Wittgenstein wrote his first book, the Tractatus. In it, he argued that language works like a picture of reality: a sentence has meaning when it represents a possible fact in the world. The book famously ends with this line: "Whereof one cannot speak, thereof one must be silent." For the young Wittgenstein, questions about ethics, God or the meaning of life could not be expressed clearly in language at all.

Surprisingly, years later he rejected many of his own early ideas. In his later work, he said that the meaning of a word is not a picture but its use. Words are like tools, and we use them in many different "language games": giving orders, telling jokes, asking questions, praying. To understand a word, we should look at how people actually use it in everyday life.

Wittgenstein also said: "The limits of my language mean the limits of my world." For anyone learning a new language, it is an inspiring thought: every new word you learn makes your world a little bigger.`,
  glossary: [
    { term: "fascinated", es: "fascinado" },
    { term: "picture", es: "imagen, retrato" },
    { term: "represents", es: "representa" },
    { term: "possible", es: "posible" },
    { term: "famously", es: "de forma célebre" },
    { term: "whereof", es: "de lo que (arcaico)" },
    { term: "thereof", es: "de ello (arcaico)" },
    { term: "silent", es: "callado, en silencio" },
    { term: "rejected", es: "rechazó" },
    { term: "language games", es: "juegos de lenguaje" },
    { term: "praying", es: "rezar" },
    { term: "everyday", es: "cotidiano" },
    { term: "limits", es: "límites" },
    { term: "inspiring", es: "inspirador" },
  ],
  questions: [
    {
      prompt: "Where did Wittgenstein write the Tractatus?",
      options: ["In Cambridge", "While he was a soldier in the war", "In Vienna, at home"],
      answerIndex: 1,
    },
    {
      prompt: "In his later work, what is the meaning of a word?",
      options: ["Its use", "A picture of reality", "Its dictionary definition"],
      answerIndex: 0,
    },
    {
      prompt: "Why is his last quote inspiring for language learners?",
      options: [
        "It says languages are impossible",
        "It says only logic matters",
        "Every new word makes your world bigger",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "The meaning of a word is its use.",
    "Words are like tools.",
    "The limits of my language mean the limits of my world.",
  ],
};
