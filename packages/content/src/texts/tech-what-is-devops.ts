import type { GradedText } from "../types";

export const techWhatIsDevops: GradedText = {
  id: "tech-what-is-devops",
  track: "tech",
  category: "DevOps",
  title: "What Is DevOps?",
  titleEs: "¿Qué es DevOps?",
  cefr: "B1",
  topic: "devops",
  body: `In the past, most companies had two separate teams. Developers wrote new code, and the operations team was in charge of the servers where that code ran. Developers wanted to release new features quickly, but operations wanted stability, because every change could break something. As a result, the two teams often blamed each other when things went wrong.

DevOps is a culture and a set of practices that brings these two worlds together. Instead of throwing code "over the wall", developers and operations engineers share responsibility for the whole life cycle of an application: building, testing, deploying and monitoring it.

Automation is at the heart of DevOps. With a CI/CD pipeline, every time a developer pushes code, it is automatically built and tested. If all the tests pass, the code can be deployed to production in minutes instead of weeks. Infrastructure is also managed as code, using tools like Terraform, so servers can be created in a repeatable way.

The goal is simple: deliver small changes often, detect problems early and recover quickly. Companies that adopt DevOps usually release more frequently and have fewer failures.`,
  glossary: [
    { term: "in charge of", es: "a cargo de" },
    { term: "release", es: "lanzar, publicar (una versión)" },
    { term: "features", es: "funcionalidades" },
    { term: "break", es: "romper, estropear" },
    { term: "blamed", es: "culpaban" },
    { term: "set of practices", es: "conjunto de prácticas" },
    { term: "over the wall", es: "por encima del muro (pasar el problema a otro)" },
    { term: "life cycle", es: "ciclo de vida" },
    { term: "deploying", es: "desplegar", note: "deploy se pronuncia /dɪˈplɔɪ/, acento en «ploy»." },
    { term: "at the heart of", es: "en el centro de" },
    { term: "pipeline", es: "pipeline, flujo automatizado" },
    { term: "pushes", es: "sube (código al repositorio)", note: "git push." },
    { term: "recover", es: "recuperarse" },
  ],
  questions: [
    {
      prompt: "What problem did separate teams cause?",
      options: [
        "They blamed each other when things went wrong",
        "They worked too slowly on hardware",
        "They had too many meetings",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What happens in a CI/CD pipeline when code is pushed?",
      options: [
        "It is sent to the client by email",
        "It is automatically built and tested",
        "It is deleted",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What is the goal of DevOps?",
      options: [
        "Large releases once a year",
        "Replacing developers with tools",
        "Deliver small changes often and recover quickly",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Automation is at the heart of DevOps.",
    "If all the tests pass, the code can be deployed.",
    "Deliver small changes often and recover quickly.",
  ],
};
