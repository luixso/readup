import type { GradedText } from "../types";

export const techIncident: GradedText = {
  id: "tech-incident",
  track: "tech",
  category: "DevOps",
  title: "An Incident at 3 a.m.",
  titleEs: "Un incidente a las 3 de la mañana",
  cefr: "B1",
  topic: "devops",
  body: `At 3:07 a.m., Ana's phone woke her up. She was on call that week, and the monitoring system had sent an alert: the error rate of the payment service was above ten per cent. Customers couldn't pay for their orders.

She opened her laptop and joined the incident channel. First, she checked the dashboards. The problems had started at 2:55, exactly when a new version of the service was deployed. That was a strong clue. She looked at the logs and found hundreds of database timeout errors.

Ana decided not to search for the root cause in the middle of the night. Her priority was to restore the service. She rolled back to the previous version, and within five minutes the error rate dropped to normal. She posted an update in the channel and went back to bed.

The next day, the team held a blameless post-mortem. Nobody was blamed; instead, they focused on what went wrong in the process. They discovered that the new version opened too many database connections. As action items, they added a test for this and configured an automatic rollback when the error rate is too high.`,
  glossary: [
    { term: "woke her up", es: "la despertó" },
    { term: "on call", es: "de guardia" },
    { term: "alert", es: "alerta" },
    { term: "error rate", es: "tasa de errores" },
    { term: "dashboards", es: "paneles de control" },
    { term: "clue", es: "pista" },
    { term: "logs", es: "registros (logs)" },
    { term: "timeout", es: "tiempo de espera agotado" },
    { term: "root cause", es: "causa raíz" },
    { term: "restore", es: "restaurar" },
    { term: "rolled back", es: "revirtió (volvió a la versión anterior)", note: "Phrasal verb: roll back. Sustantivo: rollback." },
    { term: "dropped", es: "bajó" },
    { term: "blameless post-mortem", es: "análisis posterior sin culpables" },
    { term: "action items", es: "tareas de seguimiento" },
  ],
  questions: [
    {
      prompt: "Why did Ana wake up?",
      options: [
        "The monitoring system sent an alert",
        "A customer called her",
        "Her manager sent a message",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What was the strong clue?",
      options: [
        "The database was very old",
        "The problems started when a new version was deployed",
        "There was a storm",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What is special about a blameless post-mortem?",
      options: [
        "It happens at night",
        "Only managers attend",
        "Nobody is blamed; the team focuses on the process",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "I'm on call this week.",
    "My priority is to restore the service.",
    "We rolled back to the previous version.",
  ],
};
