import type { GradedText } from "../types";

export const techContainersDocker: GradedText = {
  id: "tech-containers-docker",
  track: "tech",
  category: "DevOps",
  title: "Containers, Simply Explained",
  titleEs: "Contenedores, explicado fácil",
  cefr: "B1",
  topic: "devops",
  body: `Every developer has heard this sentence: "But it works on my machine!" An application runs perfectly on a developer's laptop, but it fails on the server because the operating system, the libraries or the settings are slightly different.

Containers solve this problem. A container packages an application together with everything it needs to run: the code, the runtime, the libraries and the configuration. Because the package is the same everywhere, the application behaves the same on a laptop, on a test server and in production.

The most popular tool for containers is Docker. To create a container, you first write a Dockerfile, a simple text file with instructions. Docker uses it to build an image. An image is like a template, and a container is a running instance of that image. You can start many containers from one image.

Containers are often compared to virtual machines, but they are much lighter. A virtual machine includes a full operating system, while containers share the kernel of the host. That means they start in seconds and use less memory.

When a company runs hundreds of containers, it needs a tool to manage them. That is where Kubernetes comes in.`,
  glossary: [
    { term: "works on my machine", es: "en mi máquina funciona" },
    { term: "operating system", es: "sistema operativo" },
    { term: "libraries", es: "bibliotecas (de código)", note: "¡Falso amigo! library = biblioteca, no librería." },
    { term: "settings", es: "configuración, ajustes" },
    { term: "slightly", es: "ligeramente" },
    { term: "packages", es: "empaqueta" },
    { term: "runtime", es: "entorno de ejecución" },
    { term: "behaves", es: "se comporta" },
    { term: "image", es: "imagen", note: "Se pronuncia /ˈɪmɪdʒ/, «ímich»." },
    { term: "template", es: "plantilla" },
    { term: "lighter", es: "más ligeros" },
    { term: "kernel", es: "núcleo (del sistema)" },
    { term: "comes in", es: "entra en juego" },
  ],
  questions: [
    {
      prompt: "What problem do containers solve?",
      options: [
        "Applications behaving differently on different machines",
        "Slow internet connections",
        "Forgotten passwords",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What is the relationship between an image and a container?",
      options: [
        "They are exactly the same",
        "A container is a running instance of an image",
        "An image is a running container",
      ],
      answerIndex: 1,
    },
    {
      prompt: "Why are containers lighter than virtual machines?",
      options: [
        "They don't use any memory",
        "They only run on laptops",
        "They share the kernel of the host",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "But it works on my machine!",
    "A container is a running instance of an image.",
    "That is where Kubernetes comes in.",
  ],
};
