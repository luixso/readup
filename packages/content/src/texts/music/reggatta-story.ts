import type { GradedText } from "../../types";

export const reggattaStory: GradedText = {
  id: "music-reggatta-story",
  track: "music",
  category: "The Police",
  title: "Reggatta de Blanc: White Reggae on a Small Budget",
  titleEs: "Reggatta de Blanc: reggae blanco con poco presupuesto",
  cefr: "B1",
  topic: "música",
  body: `The Police were a trio from London: Sting played bass and sang, Andy Summers played guitar and Stewart Copeland played drums. In 1979, after the success of their first album, they went back to a small studio in the south of England to record their second one. They did not have much money, so they worked quickly and recorded the whole album in only a few weeks.

The band mixed the energy of punk with the rhythm of reggae, a style of music from Jamaica. That is why they chose a strange name for the album. "Reggatta de Blanc" is not real French. It is a joke that means something like "white reggae", because three white musicians from England were playing a Caribbean style in their own way.

The album was a huge success. It went straight to number one in the United Kingdom, and two of its singles, "Message in a Bottle" and "Walking on the Moon", also reached the top of the charts. The title song, which has almost no words, won a Grammy award.

Many critics say that this album defined the sound of the band: a busy, creative drummer, a guitar full of space and echo, and a clear, high voice. For people who are learning English, the songs are useful because the lyrics are short, simple and repeat many times.`,
  glossary: [
    { term: "trio", es: "trío" },
    { term: "bass", es: "bajo (instrumento)", note: "Se pronuncia /beɪs/, como «base»." },
    { term: "drums", es: "batería" },
    { term: "record", es: "grabar" },
    { term: "the whole album", es: "el disco entero" },
    { term: "rhythm", es: "ritmo" },
    { term: "huge", es: "enorme" },
    { term: "went straight to", es: "llegó directamente a" },
    { term: "singles", es: "sencillos" },
    { term: "reached the top of the charts", es: "llegaron a lo más alto de las listas de éxitos" },
    { term: "award", es: "premio" },
    { term: "critics", es: "críticos" },
    { term: "busy", es: "lleno de notas, muy activo" },
    { term: "echo", es: "eco" },
    { term: "lyrics", es: "letra (de una canción)", note: "Siempre en plural: the lyrics." },
  ],
  questions: [
    {
      prompt: "Why did the band record the album quickly?",
      options: ["They were going on tour", "They did not have much money", "The studio was closing"],
      answerIndex: 1,
    },
    {
      prompt: "What does the title of the album mean?",
      options: ["Something like \"white reggae\"", "A boat race in France", "The name of their studio"],
      answerIndex: 0,
    },
    {
      prompt: "Why are the songs useful for learners of English?",
      options: [
        "Because they are very slow",
        "Because they come with a translation",
        "Because the lyrics are short, simple and repeat many times",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "They did not have much money, so they worked quickly.",
    "It is a joke that means something like white reggae.",
    "The album was a huge success.",
  ],
};
