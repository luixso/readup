import type { GradedText } from "../../types";

export const kant: GradedText = {
  id: "philo-kant",
  track: "culture",
  category: "Filosofía",
  title: "Kant: Dare to Know",
  titleEs: "Kant: atrévete a saber",
  cefr: "B1",
  topic: "filosofía",
  body: `Immanuel Kant was born in 1724 in Königsberg, in Prussia, and he almost never travelled far from his home city. People said his daily walk was so regular that neighbours could set their clocks by it. Yet from that quiet life came some of the most influential ideas in the history of philosophy.

Kant tried to combine the two great traditions before him. Like the empiricists, he believed that knowledge begins with experience. But he argued that the mind is not a passive blank slate. It actively organises what we perceive, using built-in structures such as space, time and cause. We can never know things exactly as they are "in themselves", only as they appear to us.

In ethics, Kant is famous for the "categorical imperative". In simple terms, it says: act only in a way that you would want everyone else to act. Before lying, for example, ask yourself what would happen if everybody lied. He also said that we must always treat people as ends in themselves, never simply as tools to get what we want.

Kant was a key thinker of the Enlightenment. In a short essay, he defined it as humanity leaving its immaturity behind, and he gave it a motto: "Sapere aude!", which means "Dare to know!" In other words: have the courage to use your own reason.`,
  glossary: [
    { term: "neighbours", es: "vecinos" },
    { term: "yet", es: "sin embargo" },
    { term: "influential", es: "influyentes" },
    { term: "passive", es: "pasivo" },
    { term: "perceive", es: "percibimos" },
    { term: "built-in", es: "incorporadas, innatas" },
    { term: "ethics", es: "ética" },
    { term: "categorical imperative", es: "imperativo categórico" },
    { term: "lying", es: "mentir" },
    { term: "ends in themselves", es: "fines en sí mismos" },
    { term: "enlightenment", es: "la Ilustración" },
    { term: "immaturity", es: "inmadurez, minoría de edad" },
    { term: "dare", es: "atreverse" },
    { term: "courage", es: "valor, coraje" },
  ],
  questions: [
    {
      prompt: "How was Kant's daily walk described?",
      options: ["Very long", "So regular that people set their clocks by it", "Always with friends"],
      answerIndex: 1,
    },
    {
      prompt: "According to Kant, what does the mind do?",
      options: [
        "It actively organises what we perceive",
        "It receives everything passively",
        "It knows things exactly as they are",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What does 'Sapere aude' mean?",
      options: ["Think less", "Obey the king", "Dare to know"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Knowledge begins with experience.",
    "Act only in a way that you would want everyone else to act.",
    "Have the courage to use your own reason.",
  ],
};
