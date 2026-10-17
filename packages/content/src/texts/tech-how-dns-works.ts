import type { GradedText } from "../types";

export const techHowDnsWorks: GradedText = {
  id: "tech-how-dns-works",
  track: "tech",
  category: "Redes",
  title: "How Your Browser Finds a Website",
  titleEs: "Cómo encuentra tu navegador una web",
  cefr: "B1",
  topic: "redes",
  body: `When you type a web address like example.com into your browser, the page usually appears in less than a second. But a lot happens behind the scenes.

Computers on the internet don't use names; they use numbers called IP addresses. So the first job of your computer is to translate the name into an IP address. This is the job of DNS, the Domain Name System. You can think of DNS as the phone book of the internet.

First, your computer checks its own cache to see if it already knows the address. If it doesn't, it sends a query to a DNS resolver, which is usually a server run by your internet provider. The resolver asks other servers, step by step, until it finds the server that is responsible for example.com. That server replies with the correct IP address.

Finally, the resolver sends the answer back to your computer and saves a copy for a limited time, so the next request is faster. Now your browser can connect to the web server and download the page.

When DNS fails, websites seem to be "down", even if the servers are working perfectly. That's why engineers often say: "It's always DNS!"`,
  glossary: [
    { term: "browser", es: "navegador" },
    { term: "behind the scenes", es: "entre bastidores, por detrás" },
    { term: "ip addresses", es: "direcciones IP" },
    { term: "translate", es: "traducir" },
    { term: "phone book", es: "guía telefónica" },
    { term: "cache", es: "caché", note: "Se pronuncia /kæʃ/, igual que cash." },
    { term: "query", es: "consulta", note: "Se pronuncia /ˈkwɪəri/." },
    { term: "resolver", es: "resolutor DNS" },
    { term: "provider", es: "proveedor" },
    { term: "step by step", es: "paso a paso" },
    { term: "responsible for", es: "responsable de" },
    { term: "replies", es: "responde" },
    { term: "down", es: "caído (sin servicio)", note: "The site is down = la web está caída." },
  ],
  questions: [
    {
      prompt: "What does DNS do?",
      options: [
        "It translates names into IP addresses",
        "It makes websites look better",
        "It protects computers from viruses",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What does the computer check first?",
      options: ["The web server", "Its own cache", "The internet provider"],
      answerIndex: 1,
    },
    {
      prompt: "Why do engineers say 'It's always DNS'?",
      options: [
        "Because DNS is very slow",
        "Because DNS problems make websites look down",
        "Because DNS is new technology",
      ],
      answerIndex: 1,
    },
  ],
  shadowing: [
    "A lot happens behind the scenes.",
    "You can think of DNS as the phone book of the internet.",
    "It's always DNS!",
  ],
};
