import type { GradedText } from "../types";

export const techTheCloud: GradedText = {
  id: "tech-the-cloud",
  track: "tech",
  category: "Cloud",
  title: "The Cloud Is Someone Else's Computer",
  titleEs: "La nube es el ordenador de otra persona",
  cefr: "B1",
  topic: "cloud",
  body: `People talk about "the cloud" as if it were something magical, but there is a famous joke among engineers: "There is no cloud. It's just someone else's computer." In fact, the cloud is made of huge data centres full of servers, owned by companies like Amazon, Microsoft and Google.

The big advantage is that you don't have to buy or maintain hardware. Instead, you rent computing resources and pay only for what you use. If your online shop suddenly gets ten times more visitors, you can scale up in minutes. When traffic goes down again, you scale down and stop paying for the extra servers.

Cloud services are usually divided into three types. With IaaS, you rent basic infrastructure, such as virtual machines and storage. With PaaS, the provider also manages the platform, so you only deploy your code. With SaaS, you simply use finished software through the browser, like email or online documents.

However, the cloud is not always cheaper. If nobody monitors the costs, the monthly bill can grow very quickly. That's why many companies now have specialists who focus only on controlling cloud spending.`,
  glossary: [
    { term: "as if it were", es: "como si fuera" },
    { term: "data centres", es: "centros de datos", note: "En EE. UU.: data centers." },
    { term: "owned by", es: "propiedad de" },
    { term: "maintain", es: "mantener" },
    { term: "rent", es: "alquilar" },
    { term: "scale up", es: "escalar (aumentar capacidad)" },
    { term: "traffic", es: "tráfico (visitas)" },
    { term: "scale down", es: "reducir capacidad" },
    { term: "storage", es: "almacenamiento" },
    { term: "bill", es: "factura" },
    { term: "focus only on", es: "centrarse solo en" },
    { term: "spending", es: "gasto" },
  ],
  questions: [
    {
      prompt: "What is the cloud, according to the joke?",
      options: ["Magic", "Someone else's computer", "A type of software"],
      answerIndex: 1,
    },
    {
      prompt: "What is the main advantage of the cloud?",
      options: [
        "You don't have to buy or maintain hardware",
        "It is always free",
        "It doesn't need the internet",
      ],
      answerIndex: 0,
    },
    {
      prompt: "Which type is email in the browser?",
      options: ["IaaS", "PaaS", "SaaS"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "It's just someone else's computer.",
    "You pay only for what you use.",
    "The monthly bill can grow very quickly.",
  ],
};
