import type { GradedText } from "../../types";

export const nietzsche: GradedText = {
  id: "philo-nietzsche",
  track: "culture",
  category: "Filosofía",
  title: "Nietzsche: God Is Dead",
  titleEs: "Nietzsche: Dios ha muerto",
  cefr: "B1",
  topic: "filosofía",
  body: `Friedrich Nietzsche was a German philosopher born in 1844. He became a university professor at only twenty-four, but poor health forced him to retire young. He wrote his most important books while travelling alone through Switzerland and Italy, and he was almost unknown during his lifetime.

His most famous phrase is "God is dead." Nietzsche did not mean this literally. He meant that, in modern Europe, belief in God no longer guided people's lives as it had for centuries. Science and reason had weakened traditional religion, and with it the foundation of traditional values. This, he warned, could lead to nihilism: the feeling that nothing has meaning or value.

Nietzsche's answer was not to go back, but to go forward. He believed that individuals should create their own values instead of simply obeying the rules of society. His ideal was the "Übermensch", often translated as the "overman", a person who gives meaning to life through creativity and strength.

He also proposed a strange thought experiment: imagine you had to live your life again exactly the same way, over and over, forever. Would you be happy or horrified? For Nietzsche, the goal was to love your life so much that you would say yes.

After his death in 1900, his ideas deeply influenced philosophy, literature and psychology, although they were sometimes badly misused.`,
  glossary: [
    { term: "forced", es: "obligó" },
    { term: "retire", es: "jubilarse, retirarse" },
    { term: "unknown", es: "desconocido" },
    { term: "lifetime", es: "vida (duración)" },
    { term: "literally", es: "literalmente" },
    { term: "no longer", es: "ya no" },
    { term: "weakened", es: "debilitado" },
    { term: "foundation", es: "base, fundamento" },
    { term: "values", es: "valores" },
    { term: "nihilism", es: "nihilismo" },
    { term: "obeying", es: "obedecer" },
    { term: "thought experiment", es: "experimento mental" },
    { term: "over and over", es: "una y otra vez" },
    { term: "horrified", es: "horrorizado" },
    { term: "misused", es: "mal utilizadas, tergiversadas" },
  ],
  questions: [
    {
      prompt: "What did Nietzsche mean by 'God is dead'?",
      options: [
        "Religion no longer guided people's lives",
        "He had proof that God died",
        "Churches were closing",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What is nihilism?",
      options: [
        "A new religion",
        "The feeling that nothing has meaning or value",
        "Love of nature",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What should individuals do, according to Nietzsche?",
      options: ["Obey society's rules", "Go back to old religions", "Create their own values"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "He did not mean this literally.",
    "Individuals should create their own values.",
    "Would you be happy or horrified?",
  ],
};
