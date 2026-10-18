import type { GradedText } from "../../types";

export const blueSky: GradedText = {
  id: "culture-blue-sky",
  track: "culture",
  category: "Ciencia",
  title: "Why Is the Sky Blue?",
  titleEs: "¿Por qué el cielo es azul?",
  cefr: "B1",
  topic: "ciencia",
  body: `It is one of the first questions children ask, and many adults cannot answer it. Why is the sky blue and not white, green or purple?

Sunlight looks white, but it is actually a mixture of all the colours of the rainbow. Each colour travels as a wave, and each one has a different wavelength. Red light has the longest waves, and blue and violet light have the shortest.

When sunlight enters the atmosphere, it hits tiny molecules of gas, mainly nitrogen and oxygen. These molecules scatter light in all directions, but they scatter short waves much more than long ones. This effect is called Rayleigh scattering, after the British scientist who explained it in the nineteenth century. As a result, blue light is spread all over the sky, and wherever we look, we see it.

But if violet waves are even shorter, why isn't the sky violet? There are two reasons: sunlight contains less violet than blue, and our eyes are much more sensitive to blue.

The same idea explains red sunsets. In the evening, sunlight has to travel through much more air to reach us. Most of the blue light is scattered away before it arrives, so the light that reaches our eyes looks orange and red.`,
  glossary: [
    { term: "sunlight", es: "luz del sol" },
    { term: "mixture", es: "mezcla" },
    { term: "rainbow", es: "arcoíris" },
    { term: "wave", es: "onda" },
    { term: "wavelength", es: "longitud de onda" },
    { term: "tiny", es: "diminutas" },
    { term: "scatter", es: "dispersan" },
    { term: "as a result", es: "como resultado" },
    { term: "wherever", es: "dondequiera que" },
    { term: "sensitive to", es: "sensibles a", note: "¡Falso amigo! sensitive = sensible; sensible = sensato." },
    { term: "sunsets", es: "atardeceres, puestas de sol" },
    { term: "reach", es: "llegar a" },
  ],
  questions: [
    {
      prompt: "What is white sunlight made of?",
      options: ["Only blue light", "A mixture of all the colours", "Gas molecules"],
      answerIndex: 1,
    },
    {
      prompt: "Which light do air molecules scatter most?",
      options: ["Short waves, like blue", "Long waves, like red", "All colours equally"],
      answerIndex: 0,
    },
    {
      prompt: "Why are sunsets red and orange?",
      options: [
        "The sun is hotter in the evening",
        "There are more clouds",
        "Most blue light is scattered away before it reaches us",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Sunlight looks white, but it is actually a mixture of colours.",
    "As a result, blue light is spread all over the sky.",
    "Our eyes are much more sensitive to blue.",
  ],
};
