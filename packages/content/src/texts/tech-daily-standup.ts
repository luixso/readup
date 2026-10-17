import type { GradedText } from "../types";

export const techDailyStandup: GradedText = {
  id: "tech-daily-standup",
  track: "tech",
  category: "Agile",
  title: "The Daily Stand-up",
  titleEs: "La reunión diaria (daily)",
  cefr: "A2+",
  topic: "agile",
  body: `Every morning at half past nine, my team has a short meeting called the daily stand-up. It is called a stand-up because, originally, people stood up during the meeting to keep it short. Now we do it on a video call, but the rule is the same: fifteen minutes maximum.

Each person answers three questions. What did I do yesterday? What am I going to do today? Is anything blocking me? For example, this morning I said: "Yesterday I finished the login page. Today I'm going to work on the password reset feature. I'm blocked because I need access to the email service."

Our Scrum Master, Priya, writes down the blockers and helps us solve them after the meeting. The stand-up isn't for long discussions. If two people need to talk about a technical problem, they say: "Let's take this offline," and they have a separate call later.

At first, I was nervous about speaking English in front of the whole team. So I prepared my three answers every morning in a notebook. After a few weeks, I didn't need my notes anymore.`,
  glossary: [
    { term: "half past nine", es: "las nueve y media" },
    { term: "stand-up", es: "reunión de pie (daily)" },
    { term: "originally", es: "originalmente, al principio" },
    { term: "blocking", es: "bloqueando, impidiendo avanzar" },
    { term: "finished", es: "terminé" },
    { term: "i'm going to", es: "voy a", note: "Futuro de planes: I'm going to + verbo." },
    { term: "blocked", es: "bloqueado" },
    { term: "access to", es: "acceso a" },
    { term: "writes down", es: "anota, apunta" },
    { term: "blockers", es: "impedimentos" },
    { term: "take this offline", es: "hablarlo aparte (fuera de la reunión)" },
    { term: "in front of", es: "delante de" },
    { term: "anymore", es: "ya no", note: "Se usa en negativa: I don't need it anymore." },
  ],
  questions: [
    {
      prompt: "How long can the stand-up last?",
      options: ["Fifteen minutes maximum", "Half an hour", "One hour"],
      answerIndex: 0,
    },
    {
      prompt: "Why was the writer blocked?",
      options: [
        "Her laptop was broken",
        "She needed access to the email service",
        "She was ill",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What does 'Let's take this offline' mean?",
      options: [
        "Let's turn off the internet",
        "Let's finish the meeting now",
        "Let's discuss this separately later",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Yesterday I finished the login page.",
    "Today I'm going to work on the password reset feature.",
    "Let's take this offline.",
  ],
};
