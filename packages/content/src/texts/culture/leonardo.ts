import type { GradedText } from "../../types";

export const leonardo: GradedText = {
  id: "culture-leonardo",
  track: "culture",
  category: "Arte",
  title: "Leonardo da Vinci: More Than a Painter",
  titleEs: "Leonardo da Vinci: más que un pintor",
  cefr: "B1",
  topic: "arte",
  body: `Leonardo da Vinci was born in 1452 near the small town of Vinci, in Italy. Today he is famous for two paintings, the Mona Lisa and The Last Supper, but painting was only one of his many interests.

Leonardo was curious about everything. He studied the human body, plants, water, light and the flight of birds. He filled thousands of pages of notebooks with drawings and ideas, often writing from right to left, so the text could be read in a mirror. In these notebooks we can find designs for flying machines, bridges and weapons that were centuries ahead of their time. Most of them were never built.

He was also a perfectionist. He often worked slowly and left many projects unfinished, which sometimes annoyed the rich people who paid him. The Mona Lisa took him years, and he kept it with him until he died.

Leonardo spent his last years in France, invited by King Francis I, and he died there in 1519. Because he combined art, science and engineering, he is often called the perfect example of a "Renaissance man": a person who knows a lot about many different subjects.`,
  glossary: [
    { term: "paintings", es: "cuadros, pinturas" },
    { term: "the last supper", es: "La última cena" },
    { term: "curious", es: "curioso" },
    { term: "flight", es: "vuelo" },
    { term: "notebooks", es: "cuadernos" },
    { term: "mirror", es: "espejo" },
    { term: "weapons", es: "armas" },
    { term: "ahead of their time", es: "adelantados a su época" },
    { term: "unfinished", es: "sin terminar" },
    { term: "annoyed", es: "molestaba" },
    { term: "engineering", es: "ingeniería" },
    { term: "renaissance", es: "Renacimiento" },
    { term: "subjects", es: "materias, temas" },
  ],
  questions: [
    {
      prompt: "What was special about Leonardo's writing in his notebooks?",
      options: [
        "He wrote only in Latin",
        "He often wrote from right to left",
        "He never used drawings",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What happened to most of his machine designs?",
      options: ["They were never built", "They were sold to the king", "They were destroyed in a fire"],
      answerIndex: 0,
    },
    {
      prompt: "What is a 'Renaissance man'?",
      options: [
        "A man who lived in Italy",
        "A famous painter",
        "A person who knows a lot about many subjects",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Leonardo was curious about everything.",
    "They were centuries ahead of their time.",
    "He often worked slowly and left many projects unfinished.",
  ],
};
