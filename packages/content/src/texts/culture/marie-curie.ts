import type { GradedText } from "../../types";

export const marieCurie: GradedText = {
  id: "culture-marie-curie",
  track: "culture",
  category: "Ciencia",
  title: "Marie Curie",
  titleEs: "Marie Curie",
  cefr: "B1",
  topic: "ciencia",
  body: `Marie Curie was born Maria Skłodowska in Warsaw, Poland, in 1867. At that time, women were not allowed to study at university in her country, so she moved to Paris in 1891 to study physics and mathematics at the Sorbonne. She was often cold and hungry, but she finished at the top of her class.

In Paris she met Pierre Curie, a French scientist, and they got married in 1895. Together they studied a strange kind of energy coming from certain materials, which Marie called "radioactivity". In 1898 they discovered two new chemical elements: polonium, named after her home country, and radium.

In 1903, Marie and Pierre shared the Nobel Prize in Physics with Henri Becquerel. Marie was the first woman ever to win a Nobel Prize. Sadly, Pierre died in a street accident in 1906. Marie continued their work alone and, in 1911, she won a second Nobel Prize, this time in Chemistry. She is still the only person to have won Nobel Prizes in two different sciences.

During the First World War, she helped to create mobile X-ray units that treated more than a million wounded soldiers. Years of working with radioactive materials damaged her health, and she died in 1934. Her notebooks are still so radioactive that they are kept in lead boxes.`,
  glossary: [
    { term: "allowed", es: "permitido" },
    { term: "physics", es: "física" },
    { term: "hungry", es: "hambrienta" },
    { term: "at the top of her class", es: "la primera de su clase" },
    { term: "got married", es: "se casaron" },
    { term: "radioactivity", es: "radiactividad" },
    { term: "elements", es: "elementos" },
    { term: "named after", es: "llamado así en honor a" },
    { term: "shared", es: "compartieron" },
    { term: "sadly", es: "por desgracia" },
    { term: "wounded", es: "heridos" },
    { term: "damaged", es: "dañaron" },
    { term: "lead", es: "plomo", note: "Aquí se pronuncia /led/. Como verbo (guiar) es /liːd/." },
  ],
  questions: [
    {
      prompt: "Why did Marie move to Paris?",
      options: [
        "Women couldn't study at university in her country",
        "Her family lived there",
        "She wanted to work in a hospital",
      ],
      answerIndex: 0,
    },
    {
      prompt: "Why was the element polonium given that name?",
      options: ["After Pierre", "After her home country, Poland", "After a city in France"],
      answerIndex: 1,
    },
    {
      prompt: "What makes Marie Curie unique?",
      options: [
        "She invented X-rays",
        "She was the first scientist in France",
        "She won Nobel Prizes in two different sciences",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "She finished at the top of her class.",
    "Marie was the first woman ever to win a Nobel Prize.",
    "Marie continued their work alone.",
  ],
};
