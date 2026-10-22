import type { GradedText } from "../../types";

export const reggattaSongs: GradedText = {
  id: "music-reggatta-songs",
  track: "music",
  category: "The Police",
  title: "Reggatta de Blanc: A Guide to the Songs",
  titleEs: "Reggatta de Blanc: guía de las canciones",
  cefr: "B1",
  topic: "música",
  body: `The album opens with "Message in a Bottle", probably the most famous song by The Police. It tells the story of a lonely man on an island who sends a message across the sea and waits for an answer. The idea of feeling alone, and then discovering that many other people feel the same, is at the heart of the song.

"Walking on the Moon" is slower and full of space. Sting has said that he wrote it in a hotel room. The song compares the feeling of being in love to walking without gravity, light and almost floating. Listen to the bass: it leaves long silences between the notes, and that silence is part of the music.

"The Bed's Too Big Without You" is a sad reggae song about the empty feeling after a relationship ends. "Bring On the Night" is also melancholic, while "Deathwish" and "No Time This Time" are fast and nervous, closer to punk.

Stewart Copeland, the drummer, wrote some of the songs. "On Any Other Day" is a funny story about a man whose whole day goes wrong, and "Does Everyone Stare" is about a shy young man who feels that everybody is looking at him.

When you study a song, first listen without reading. Then read the lyrics, tap the words you don't know and listen again. Finally, try to sing along: it is a great way to practise rhythm and pronunciation.`,
  glossary: [
    { term: "opens with", es: "empieza con" },
    { term: "lonely", es: "solitario, que se siente solo" },
    { term: "at the heart of", es: "en el centro de, en el corazón de" },
    { term: "gravity", es: "gravedad" },
    { term: "floating", es: "flotando" },
    { term: "silences", es: "silencios" },
    { term: "empty", es: "vacío" },
    { term: "relationship", es: "relación (de pareja)" },
    { term: "goes wrong", es: "sale mal" },
    { term: "shy", es: "tímido" },
    { term: "stare", es: "mirar fijamente" },
    { term: "sing along", es: "cantar a la vez (que la canción)" },
    { term: "practise", es: "practicar", note: "Ortografía británica; en EE. UU. se escribe «practice»." },
  ],
  questions: [
    {
      prompt: "What is the main idea of \"Message in a Bottle\"?",
      options: [
        "A sailor who wants to go home",
        "Feeling alone and discovering that others feel the same",
        "A love story on a beach",
      ],
      answerIndex: 1,
    },
    {
      prompt: "What does \"Walking on the Moon\" compare being in love to?",
      options: ["Walking without gravity", "Travelling in a rocket", "Sleeping in a hotel"],
      answerIndex: 0,
    },
    {
      prompt: "Who wrote \"On Any Other Day\"?",
      options: ["Sting", "Andy Summers", "Stewart Copeland"],
      answerIndex: 2,
    },
  ],
  shadowing: [
    "It tells the story of a lonely man on an island.",
    "That silence is part of the music.",
    "First listen without reading.",
  ],
};
