import type { GradedText } from "../../types";

export const californicationSongs: GradedText = {
  id: "music-californication-songs",
  track: "music",
  category: "Red Hot Chili Peppers",
  title: "Californication: A Guide to the Songs",
  titleEs: "Californication: guía de las canciones",
  cefr: "B1",
  topic: "música",
  body: `"Around the World" opens the album with a powerful bass line by Flea. It is about the joy of travelling and playing music in different countries. The words are fast and playful, so it is a hard song to understand at first.

"Scar Tissue" is calmer. A scar is the mark that a wound leaves on your skin, and the song uses this image to talk about loneliness and about recovering from a difficult past. Listen to the slide guitar: it sounds a bit like a voice that cries.

"Otherside" deals with addiction and with friends who died because of drugs, including Hillel Slovak, the first guitarist of the band. It is dark, but it also shows the strength to fight.

The title song, "Californication", is a critique of Hollywood. It describes a culture of fame, plastic surgery and fantasy that California sends to the rest of the world through films and television. The name is a play on words that mixes "California" with another word in a cheeky way.

The album also has quieter songs. "Porcelain" is soft and gentle, and "Savior" is about Kiedis and his father. The last song, "Road Trippin'", uses only acoustic guitars and strings. It remembers a trip along the coast of California to go surfing with friends.

Kiedis often sings quickly and uses slang, so read the lyrics slowly. Look for the words that repeat, because the chorus is the easiest part to learn.`,
  glossary: [
    { term: "bass line", es: "línea de bajo" },
    { term: "joy", es: "alegría" },
    { term: "playful", es: "juguetón, desenfadado" },
    { term: "scar", es: "cicatriz" },
    { term: "wound", es: "herida", note: "Se pronuncia /wuːnd/." },
    { term: "skin", es: "piel" },
    { term: "loneliness", es: "soledad" },
    { term: "deals with", es: "trata de, aborda" },
    { term: "strength", es: "fuerza" },
    { term: "critique of", es: "crítica de" },
    { term: "plastic surgery", es: "cirugía estética" },
    { term: "play on words", es: "juego de palabras" },
    { term: "cheeky", es: "pícaro, descarado" },
    { term: "strings", es: "instrumentos de cuerda" },
    { term: "slang", es: "jerga, argot" },
    { term: "chorus", es: "estribillo" },
  ],
  questions: [
    {
      prompt: "What image does \"Scar Tissue\" use?",
      options: ["A scar, the mark that a wound leaves on the skin", "A broken guitar", "A long road"],
      answerIndex: 0,
    },
    {
      prompt: "What does the song \"Californication\" criticise?",
      options: ["The weather in California", "Hollywood and the culture of fame", "Surfing"],
      answerIndex: 1,
    },
    {
      prompt: "What is \"Road Trippin'\" about?",
      options: ["A tour in Europe", "A trip along the coast to go surfing", "Driving to a concert"],
      answerIndex: 1,
    },
  ],
  shadowing: [
    "It is about the joy of travelling.",
    "It sounds a bit like a voice that cries.",
    "The chorus is the easiest part to learn.",
  ],
};
