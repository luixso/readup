import type { GradedText } from "../types";

export const aNewJob: GradedText = {
  id: "a-new-job",
  title: "A New Job",
  titleEs: "Un trabajo nuevo",
  cefr: "A2",
  topic: "trabajo",
  body: `Lucía is twenty-eight years old and she lives in Madrid. Last month, she got a new job at a travel company. The office is in the city centre, so she takes the metro every morning.

On her first day, she was very nervous. Her manager, Tom, is from London and he only speaks English at work. "Don't worry," he said. "You can ask me anything." Lucía smiled, but she didn't understand everything he said.

Now she reads a short story in English every night before bed. She also listens to podcasts on the metro. At first, it was difficult. After four weeks, she can follow most meetings, and she isn't embarrassed when she makes mistakes. Actually, Tom says her English is getting better every day.

Next year, Lucía wants to work in the London office for three months. She is excited about it, and a little scared too.`,
  glossary: [
    { term: "got", es: "consiguió", note: "Pasado de get (conseguir, obtener)." },
    { term: "travel company", es: "agencia de viajes" },
    { term: "city centre", es: "centro de la ciudad", note: "En EE. UU. se escribe city center / downtown." },
    { term: "nervous", es: "nerviosa" },
    { term: "manager", es: "jefe / responsable" },
    { term: "worry", es: "preocuparse" },
    { term: "follow", es: "seguir, entender" },
    { term: "meetings", es: "reuniones" },
    { term: "embarrassed", es: "avergonzada" },
    { term: "mistakes", es: "errores" },
    { term: "actually", es: "en realidad" },
    { term: "getting better", es: "mejorando" },
    { term: "excited", es: "ilusionada, emocionada" },
    { term: "scared", es: "asustada" },
  ],
  questions: [
    {
      prompt: "Where does Lucía work?",
      options: ["At a school", "At a travel company", "At a hospital"],
      answerIndex: 1,
    },
    {
      prompt: "How did she feel on her first day?",
      options: ["Nervous", "Bored", "Angry"],
      answerIndex: 0,
    },
    {
      prompt: "What does she do on the metro?",
      options: ["She sleeps", "She reads the news", "She listens to podcasts"],
      answerIndex: 2,
    },
    {
      prompt: "What does 'actually' mean in this text?",
      options: ["Actualmente", "En realidad", "Rápidamente"],
      answerIndex: 1,
    },
  ],
  shadowing: [
    "Don't worry. You can ask me anything.",
    "At first, it was difficult.",
    "She is excited about it, and a little scared too.",
  ],
};
