import type { GradedText } from "../../types";

export const printingPress: GradedText = {
  id: "culture-printing-press",
  track: "culture",
  category: "Historia",
  title: "The Machine That Changed the World",
  titleEs: "La máquina que cambió el mundo",
  cefr: "B1",
  topic: "historia",
  body: `Before the fifteenth century, most books in Europe were copied by hand, often by monks. Making a single book could take months, so books were very expensive and only a few people could read.

Around 1440, a German goldsmith called Johannes Gutenberg developed a printing press with movable metal type. Each letter was a small piece of metal that could be arranged to form words and pages, and then used again. With his machine, a small team could print hundreds of pages a day. His most famous work is the Gutenberg Bible, printed in the 1450s.

The invention spread across Europe incredibly fast. By 1500, printing presses in more than two hundred cities had produced millions of books. Prices dropped, and more people learned to read.

The consequences were enormous. Scientists could share their discoveries quickly and accurately. New ideas about religion and politics travelled further than ever before. Languages became more standardised, because the same spelling appeared in thousands of copies.

Many historians compare the printing press to the internet: both made information cheaper, faster and available to many more people, and both changed society in ways that nobody could predict.`,
  glossary: [
    { term: "copied", es: "copiados" },
    { term: "monks", es: "monjes" },
    { term: "goldsmith", es: "orfebre" },
    { term: "printing press", es: "imprenta" },
    { term: "movable", es: "móvil" },
    { term: "arranged", es: "ordenadas, colocadas" },
    { term: "spread", es: "se extendió" },
    { term: "dropped", es: "bajaron" },
    { term: "consequences", es: "consecuencias" },
    { term: "accurately", es: "con precisión" },
    { term: "travelled", es: "viajaron, se difundieron" },
    { term: "standardised", es: "estandarizadas" },
    { term: "predict", es: "predecir" },
  ],
  questions: [
    {
      prompt: "Why were books expensive before Gutenberg?",
      options: ["They were copied by hand", "Paper did not exist", "They were imported from Asia"],
      answerIndex: 0,
    },
    {
      prompt: "What was new about Gutenberg's press?",
      options: [
        "It used wooden pages",
        "It used movable metal type that could be reused",
        "It printed in colour",
      ],
      answerIndex: 1,
    },
    {
      prompt: "Why do historians compare the printing press to the internet?",
      options: [
        "Both were invented in Germany",
        "Both use electricity",
        "Both made information cheaper and more available",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "The invention spread across Europe incredibly fast.",
    "The consequences were enormous.",
    "Nobody could predict how it would change society.",
  ],
};
