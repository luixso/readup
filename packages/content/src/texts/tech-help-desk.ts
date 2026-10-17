import type { GradedText } from "../types";

export const techHelpDesk: GradedText = {
  id: "tech-help-desk",
  track: "tech",
  category: "Soporte IT",
  title: "My First Week on the Help Desk",
  titleEs: "Mi primera semana en el soporte técnico",
  cefr: "A2+",
  topic: "soporte IT",
  body: `Last month, I started my first job in IT. I work on the help desk of a big insurance company, and my job is to help employees when their computers or apps don't work.

Every day, users open tickets. A ticket is a request for help in our system. Each ticket has a priority: low, medium, high or critical. On my first morning, I received twenty tickets before ten o'clock! Most of them were simple. One woman forgot her password, and I had to reset it. A man couldn't connect to the Wi-Fi, so I asked him to restart his laptop. It worked.

The hardest part is talking to users on the phone in English. Some of them speak very fast, and they don't always explain the problem clearly. My team lead gave me a useful tip: "Always repeat the problem in your own words. For example: So, you can't log in to your email. Is that right?"

When I can't solve a problem, I escalate the ticket to the second-level team. I'm learning a lot, and I hope to join that team next year.`,
  glossary: [
    { term: "help desk", es: "mesa de ayuda / soporte técnico" },
    { term: "insurance company", es: "aseguradora" },
    { term: "employees", es: "empleados" },
    { term: "tickets", es: "incidencias, tickets" },
    { term: "request", es: "solicitud, petición" },
    { term: "priority", es: "prioridad" },
    { term: "reset", es: "restablecer", note: "reset a password = restablecer una contraseña." },
    { term: "restart", es: "reiniciar" },
    { term: "team lead", es: "jefe de equipo" },
    { term: "tip", es: "consejo" },
    { term: "log in", es: "iniciar sesión", note: "Verbo: log in (separado). Sustantivo: login." },
    { term: "solve", es: "resolver" },
    { term: "escalate", es: "escalar (pasar al siguiente nivel)" },
  ],
  questions: [
    {
      prompt: "What is a ticket?",
      options: ["A request for help", "A type of password", "A computer program"],
      answerIndex: 0,
    },
    {
      prompt: "How did the writer fix the Wi-Fi problem?",
      options: ["He changed the router", "He asked the user to restart the laptop", "He escalated it"],
      answerIndex: 1,
    },
    {
      prompt: "What was the team lead's tip?",
      options: [
        "Speak slowly",
        "Close tickets quickly",
        "Repeat the problem in your own words",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "So, you can't log in to your email. Is that right?",
    "Could you restart your laptop, please?",
    "I'm going to escalate this ticket.",
  ],
};
