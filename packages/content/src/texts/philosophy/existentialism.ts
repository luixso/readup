import type { GradedText } from "../../types";

export const existentialism: GradedText = {
  id: "philo-existentialism",
  track: "culture",
  category: "Filosofía",
  title: "Sartre and Beauvoir: Condemned to Be Free",
  titleEs: "Sartre y Beauvoir: condenados a ser libres",
  cefr: "B1",
  topic: "filosofía",
  body: `After the Second World War, a philosophy called existentialism became extremely popular in Paris. Its best-known figures were Jean-Paul Sartre and Simone de Beauvoir, who discussed their ideas in cafés and wrote novels and plays as well as philosophy.

Sartre summarised existentialism with the phrase "existence precedes essence". A knife is designed with a purpose before it is made: its essence comes first. Human beings, Sartre said, are different. We first exist, and only later do we define who we are through our choices and actions. There is no fixed human nature that decides for us.

This means we are completely free, but freedom is not always comfortable. Sartre said we are "condemned to be free", because we cannot escape responsibility for our choices. Even not choosing is a choice. When people pretend that they had no option, when they say "I had to" or "that's just how I am", Sartre called it "bad faith".

Simone de Beauvoir applied these ideas to the situation of women. In The Second Sex, published in 1949, she wrote: "One is not born, but rather becomes, a woman." She argued that many of the roles given to women were created by society, not by nature. Her book became one of the foundations of modern feminism.`,
  glossary: [
    { term: "existentialism", es: "existencialismo" },
    { term: "figures", es: "figuras" },
    { term: "novels", es: "novelas" },
    { term: "plays", es: "obras de teatro" },
    { term: "summarised", es: "resumió" },
    { term: "precedes", es: "precede" },
    { term: "essence", es: "esencia" },
    { term: "choices", es: "elecciones, decisiones" },
    { term: "condemned", es: "condenados" },
    { term: "escape", es: "escapar de" },
    { term: "pretend", es: "fingen", note: "¡Falso amigo! pretend = fingir, no «pretender»." },
    { term: "bad faith", es: "mala fe" },
    { term: "roles", es: "papeles, roles" },
    { term: "feminism", es: "feminismo" },
  ],
  questions: [
    {
      prompt: "What does 'existence precedes essence' mean?",
      options: [
        "We exist first and define ourselves through our choices",
        "Our nature is fixed before we are born",
        "Objects are more important than people",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What did Sartre call pretending that we had no choice?",
      options: ["Freedom", "Bad faith", "Essence"],
      answerIndex: 1,
    },
    {
      prompt: "What did Beauvoir argue in The Second Sex?",
      options: [
        "Women and men have the same roles by nature",
        "Women should not work",
        "Many roles given to women are created by society",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Existence precedes essence.",
    "Even not choosing is a choice.",
    "One is not born, but rather becomes, a woman.",
  ],
};
