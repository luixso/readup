import type { GradedText } from "../../types";

export const okComputerSongs: GradedText = {
  id: "music-ok-computer-songs",
  track: "music",
  category: "Radiohead",
  title: "OK Computer: A Guide to the Songs",
  titleEs: "OK Computer: guía de las canciones",
  cefr: "B1+",
  topic: "música",
  body: `The first song, "Airbag", is about surviving a car accident. The narrator feels lucky to be alive, almost as if he has been born again. Cars, roads and travel appear again and again on the album.

"Paranoid Android" is more than six minutes long and has several very different parts, from soft guitars to loud, angry sections. Its title is a reference to Marvin, a sad robot from a famous science fiction comedy. The song describes greedy and violent people that the narrator sees around him.

In "Subterranean Homesick Alien", the narrator dreams of being taken away by aliens, so that he can look at the world from the outside. "Exit Music (For a Film)" was written for a film version of Romeo and Juliet, and it feels like two young lovers escaping in the night.

"Karma Police" began as a joke between the band members, but it became one of their most popular songs. "No Surprises" has a sweet, gentle melody, like music for a child, but the words talk about wanting a quiet life without any shocks.

The album ends with "The Tourist". The guitarist Jonny Greenwood wrote it after watching tourists who were rushing from one famous place to another without really seeing anything. Its message is simple: slow down.

A tip for learners: Thom Yorke often sings softly and stretches the vowels, so read the lyrics while you listen. Don't worry if some lines seem strange. Many of them are images, not stories.`,
  glossary: [
    { term: "surviving", es: "sobrevivir a" },
    { term: "narrator", es: "narrador" },
    { term: "born again", es: "vuelto a nacer" },
    { term: "loud", es: "fuerte, ruidoso" },
    { term: "reference to", es: "referencia a" },
    { term: "greedy", es: "codicioso" },
    { term: "taken away", es: "llevado lejos, secuestrado" },
    { term: "escaping", es: "escapando" },
    { term: "gentle", es: "suave, delicado" },
    { term: "shocks", es: "sobresaltos, sustos" },
    { term: "rushing", es: "yendo a toda prisa" },
    { term: "slow down", es: "ir más despacio" },
    { term: "stretches the vowels", es: "alarga las vocales" },
    { term: "lines", es: "versos, líneas" },
  ],
  questions: [
    {
      prompt: "What is \"Airbag\" about?",
      options: ["Buying a new car", "Surviving a car accident", "A journey by plane"],
      answerIndex: 1,
    },
    {
      prompt: "Where does the title \"Paranoid Android\" come from?",
      options: ["A video game", "A sad robot from a science fiction comedy", "A newspaper article"],
      answerIndex: 1,
    },
    {
      prompt: "What is the message of \"The Tourist\"?",
      options: ["Travel more", "Take more photos", "Slow down"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "Cars, roads and travel appear again and again.",
    "It began as a joke between the band members.",
    "Its message is simple: slow down.",
  ],
};
