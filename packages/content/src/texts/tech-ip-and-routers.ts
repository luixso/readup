import type { GradedText } from "../types";

export const techIpAndRouters: GradedText = {
  id: "tech-ip-and-routers",
  track: "tech",
  category: "Redes",
  title: "Routers, Switches and Your Home Network",
  titleEs: "Routers, switches y tu red de casa",
  cefr: "B1",
  topic: "redes",
  body: `Most homes today have a small network, even if people don't realise it. Your phone, your laptop, your smart TV and maybe even your fridge are all connected to it.

At the centre of this network is the router. Its main job is to connect your local network to the internet. When you turn on a device, the router gives it a private IP address, such as 192.168.1.20, using a service called DHCP. These private addresses only work inside your home.

But the internet only sees one public IP address: the address of your router. So how does a web page reach the right device? The router uses a technique called NAT, which stands for Network Address Translation. It keeps a table of which device made each request, and it forwards each response to the correct device.

In offices, networks are bigger, so engineers also use switches. A switch connects many devices inside the same network using cables and sends data only to the device that needs it. Routers connect different networks; switches connect devices within one network.

Understanding these basics is the first step to troubleshooting almost any connection problem.`,
  glossary: [
    { term: "realise", es: "darse cuenta", note: "¡Falso amigo! No significa «realizar». En EE. UU.: realize." },
    { term: "router", es: "router", note: "UK /ˈruːtə/ («rúter»), US /ˈraʊtər/ («ráuter»)." },
    { term: "device", es: "dispositivo" },
    { term: "turn on", es: "encender" },
    { term: "such as", es: "como, por ejemplo" },
    { term: "reach", es: "llegar a" },
    { term: "stands for", es: "significa (siglas)", note: "NAT stands for... = NAT son las siglas de..." },
    { term: "forwards", es: "reenvía" },
    { term: "switches", es: "conmutadores, switches" },
    { term: "cables", es: "cables" },
    { term: "within", es: "dentro de" },
    { term: "troubleshooting", es: "diagnosticar y resolver problemas" },
  ],
  questions: [
    {
      prompt: "What is the main job of a router?",
      options: [
        "To connect your local network to the internet",
        "To store files",
        "To charge devices",
      ],
      answerIndex: 0,
    },
    {
      prompt: "What does DHCP do?",
      options: [
        "It translates names into numbers",
        "It gives devices private IP addresses",
        "It blocks viruses",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What is the difference between a router and a switch?",
      options: [
        "There is no difference",
        "Switches are only for Wi-Fi",
        "Routers connect networks; switches connect devices within one network",
      ],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "NAT stands for Network Address Translation.",
    "Routers connect different networks.",
    "This is the first step to troubleshooting.",
  ],
};
