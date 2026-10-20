import type { GradedText } from "../../types";

export const lockeHume: GradedText = {
  id: "philo-empiricism",
  track: "culture",
  category: "Filosofía",
  title: "Locke and Hume: Knowledge Comes from Experience",
  titleEs: "Locke y Hume: el conocimiento viene de la experiencia",
  cefr: "B1",
  topic: "filosofía",
  body: `Not everyone agreed with Descartes. In England, a group of philosophers called empiricists believed that all our knowledge comes from experience, not from pure reason.

John Locke, writing in 1690, compared the mind of a newborn baby to a "blank slate", a clean board with nothing written on it. According to Locke, we are not born with ideas. Everything we know, from the colour red to the idea of a triangle, enters the mind through our senses and is then combined by our thinking.

Locke was also an important political thinker. He argued that all people have natural rights to life, liberty and property, and that governments exist to protect these rights. His ideas later influenced the American Declaration of Independence.

The Scottish philosopher David Hume took empiricism even further. He asked a simple but disturbing question: how do we know that the future will be like the past? We see the sun rise every morning and expect it to rise tomorrow, but we never actually observe the cause that makes it happen. We only observe one event following another. For Hume, our belief in cause and effect is based on habit, not on logic.

Hume's scepticism was so powerful that, years later, it "woke up" another great philosopher: Immanuel Kant.`,
  glossary: [
    { term: "empiricists", es: "empiristas" },
    { term: "pure reason", es: "razón pura" },
    { term: "newborn", es: "recién nacido" },
    { term: "blank slate", es: "tabla rasa, pizarra en blanco" },
    { term: "rights", es: "derechos" },
    { term: "liberty", es: "libertad" },
    { term: "property", es: "propiedad" },
    { term: "influenced", es: "influyeron en" },
    { term: "disturbing", es: "inquietante" },
    { term: "observe", es: "observar" },
    { term: "cause and effect", es: "causa y efecto" },
    { term: "habit", es: "hábito, costumbre" },
    { term: "scepticism", es: "escepticismo", note: "En EE. UU. se escribe skepticism." },
  ],
  questions: [
    {
      prompt: "According to empiricists, where does knowledge come from?",
      options: ["From experience", "From pure reason", "From religion"],
      answerIndex: 0,
    },
    {
      prompt: "What did Locke mean by a 'blank slate'?",
      options: [
        "A mind that is already full of ideas",
        "A mind with no ideas at birth",
        "A school blackboard",
      ],
      answerIndex: 1,
    },
    {
      prompt: "For Hume, our belief in cause and effect is based on…",
      options: ["Logic", "Mathematics", "Habit"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "We are not born with ideas.",
    "How do we know that the future will be like the past?",
    "Our belief is based on habit, not on logic.",
  ],
};
