import type { GradedText } from "../../types";

export const branches: GradedText = {
  id: "philo-branches",
  track: "culture",
  category: "Filosofía",
  title: "The Big Questions: Branches of Philosophy",
  titleEs: "Las grandes preguntas: ramas de la filosofía",
  cefr: "A2+",
  topic: "filosofía",
  body: `The word "philosophy" comes from Greek and means "love of wisdom". Philosophers ask big questions that science alone cannot always answer. To organise these questions, philosophy is usually divided into several branches.

Metaphysics asks what reality is. Does the world exist outside our minds? Do we have free will, or is everything already decided?

Epistemology studies knowledge. How do we know what we know? What is the difference between a belief and a fact? When can we say that something is true?

Ethics asks how we should live and act. What makes an action good or bad? Is it ever right to lie? Do we have duties to animals or to future generations?

Logic studies correct reasoning. It teaches us to recognise good arguments and to find mistakes in bad ones. Modern logic is also the basis of computer science.

Political philosophy asks how society should be organised. What makes a government legitimate? What is justice? How much freedom should people have?

Finally, aesthetics studies beauty and art. Why do we find some things beautiful? Is beauty only in the eye of the beholder?

You don't need to be a professor to do philosophy. Every time you ask "why?" and try to give a careful answer, you are already doing it.`,
  glossary: [
    { term: "wisdom", es: "sabiduría" },
    { term: "branches", es: "ramas" },
    { term: "metaphysics", es: "metafísica" },
    { term: "free will", es: "libre albedrío" },
    { term: "epistemology", es: "epistemología, teoría del conocimiento" },
    { term: "duties", es: "deberes" },
    { term: "generations", es: "generaciones" },
    { term: "reasoning", es: "razonamiento" },
    { term: "arguments", es: "argumentos" },
    { term: "legitimate", es: "legítimo" },
    { term: "justice", es: "justicia" },
    { term: "aesthetics", es: "estética" },
    { term: "in the eye of the beholder", es: "en los ojos de quien mira" },
  ],
  questions: [
    {
      prompt: "What does 'philosophy' mean?",
      options: ["Love of wisdom", "Study of stars", "Science of the mind"],
      answerIndex: 0,
    },
    {
      prompt: "Which branch studies knowledge?",
      options: ["Aesthetics", "Epistemology", "Ethics"],
      answerIndex: 1,
    },
    {
      prompt: "Which branch asks 'What is justice?'",
      options: ["Logic", "Metaphysics", "Political philosophy"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Philosophy means love of wisdom.",
    "How do we know what we know?",
    "Every time you ask why, you are already doing philosophy.",
  ],
};
