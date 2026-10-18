import type { GradedText } from "../../types";

export const fridaKahlo: GradedText = {
  id: "culture-frida-kahlo",
  track: "culture",
  category: "Arte",
  title: "Frida Kahlo",
  titleEs: "Frida Kahlo",
  cefr: "B1",
  topic: "arte",
  body: `Frida Kahlo was born in 1907 in Coyoacán, a neighbourhood of Mexico City, in a house that is known today as the Blue House. As a child she suffered from polio, which left her with one leg thinner than the other.

When she was eighteen, a terrible accident changed her life. The bus she was travelling on crashed into a tram, and she suffered serious injuries to her spine and pelvis. She spent months in bed, and it was then that she started painting. Her mother put a mirror above her bed, so Frida became her own model.

That is one reason why about a third of her paintings are self-portraits. In them she shows her pain, her feelings and her identity with great honesty. She often wore traditional Mexican clothes and included plants, animals and symbols from Mexican culture.

In 1929 she married the famous muralist Diego Rivera. Their relationship was passionate but difficult, and they divorced and remarried.

During her life, Frida was less famous than her husband. Today, however, she is one of the best-known artists in the world. Her image appears everywhere, and the Blue House is now a museum visited by thousands of people every year.`,
  glossary: [
    { term: "neighbourhood", es: "barrio", note: "En EE. UU. se escribe neighborhood." },
    { term: "suffered from", es: "padeció" },
    { term: "thinner", es: "más delgada" },
    { term: "crashed into", es: "chocó contra" },
    { term: "tram", es: "tranvía" },
    { term: "injuries", es: "lesiones" },
    { term: "spine", es: "columna vertebral" },
    { term: "self-portraits", es: "autorretratos" },
    { term: "pain", es: "dolor" },
    { term: "honesty", es: "sinceridad, honestidad" },
    { term: "muralist", es: "muralista" },
    { term: "remarried", es: "volvieron a casarse" },
    { term: "best-known", es: "más conocidos" },
  ],
  questions: [
    {
      prompt: "When did Frida start painting?",
      options: [
        "When she was a little child",
        "While she was in bed after her accident",
        "After she married Diego Rivera",
      ],
      answerIndex: 1,
    },
    {
      prompt: "Why did she paint so many self-portraits?",
      options: [
        "A mirror above her bed made her her own model",
        "Her teachers asked her to",
        "She could not afford other models",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What is the Blue House today?",
      options: ["A school", "A hotel", "A museum"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "A terrible accident changed her life.",
    "She shows her pain and her feelings with great honesty.",
    "Today she is one of the best-known artists in the world.",
  ],
};
