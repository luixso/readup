import type { GradedText } from "../types";

export const techPhishing: GradedText = {
  id: "tech-phishing",
  track: "tech",
  category: "Seguridad",
  title: "The Email That Almost Fooled Me",
  titleEs: "El correo que casi me engaña",
  cefr: "A2+",
  topic: "seguridad",
  body: `On Monday morning, I received an email from "IT Support". The message said: "Your password expires today. Click the link below to keep your account active." It had our company logo, and it looked very professional.

I was busy, so I almost clicked the link. But then I noticed some strange details. The sender's address was it-support@company-security.net, not our real company domain. There were two small spelling mistakes. And the message was urgent: "If you don't act in the next hour, your account will be deleted."

I remembered our security training. Attackers often create a sense of urgency so that people don't stop and think. This type of attack is called phishing. The goal is to steal passwords or install malware on your computer.

I didn't click anything. Instead, I reported the email using the "Report phishing" button. Later, the security team sent a message to all employees. Fifteen people had received the same email, and two of them had entered their passwords. The team changed those passwords immediately and enabled two-factor authentication for everyone.`,
  glossary: [
    { term: "expires", es: "caduca" },
    { term: "below", es: "abajo, a continuación" },
    { term: "noticed", es: "me di cuenta de, noté" },
    { term: "sender", es: "remitente" },
    { term: "spelling mistakes", es: "faltas de ortografía" },
    { term: "urgent", es: "urgente" },
    { term: "deleted", es: "eliminada, borrada" },
    { term: "training", es: "formación" },
    { term: "attackers", es: "atacantes" },
    { term: "steal", es: "robar" },
    { term: "reported", es: "informé, denuncié" },
    { term: "two-factor authentication", es: "autenticación en dos pasos (2FA)" },
  ],
  questions: [
    {
      prompt: "Who did the email say it was from?",
      options: ["IT Support", "The bank", "The writer's manager"],
      answerIndex: 0,
    },
    {
      prompt: "Which detail was NOT suspicious?",
      options: ["The sender's address", "The spelling mistakes", "The day of the week"],
      answerIndex: 2,
    },
    {
      prompt: "What did the writer do?",
      options: [
        "Clicked the link and changed the password",
        "Reported the email",
        "Deleted the email and said nothing",
      ],
      answerIndex: 1,
    },
  ],
  shadowing: [
    "I noticed some strange details.",
    "Attackers often create a sense of urgency.",
    "I reported the email.",
  ],
};
