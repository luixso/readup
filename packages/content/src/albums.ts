import type { Album } from "./types";

/**
 * Discos de la sección Música. Solo se incluyen datos y descripciones propias:
 * las letras tienen derechos de autor, así que el usuario pega la suya en el lector.
 */
export const ALBUMS: Album[] = [
  {
    id: "reggatta-de-blanc",
    artist: "The Police",
    title: "Reggatta de Blanc",
    year: 1979,
    introEs:
      "Segundo disco de The Police (Sting, Andy Summers y Stewart Copeland). Mezcla punk, rock y reggae; el título es un juego de palabras en falso francés que significa algo así como «reggae blanco». Fue su primer número 1 en el Reino Unido.",
    textIds: ["music-reggatta-story", "music-reggatta-songs"],
    songs: [
      { n: 1, title: "Message in a Bottle", titleEs: "Mensaje en una botella", aboutEs: "Un náufrago solitario lanza un mensaje al mar pidiendo ayuda y descubre que no es el único que se siente solo. Fue su primer número 1 en el Reino Unido." },
      { n: 2, title: "Reggatta de Blanc", titleEs: "Reggae blanco", aboutEs: "Pieza casi instrumental nacida de las improvisaciones en directo; solo hay vocalizaciones sin letra. Ganó un Grammy a la mejor interpretación instrumental de rock.", instrumental: true },
      { n: 3, title: "It's Alright for You", titleEs: "Para ti es fácil", aboutEs: "Rock rápido con energía punk, firmado por Sting y Copeland. Buena para practicar frases cortas y directas." },
      { n: 4, title: "Bring On the Night", titleEs: "Que llegue la noche", aboutEs: "Canción melancólica y lenta sobre el cansancio vital de alguien que espera el final del día." },
      { n: 5, title: "Deathwish", titleEs: "Deseo de muerte", aboutEs: "Habla de jugar con el peligro y tentar a la suerte, con un ritmo nervioso que imita la velocidad." },
      { n: 6, title: "Walking on the Moon", titleEs: "Caminando sobre la luna", aboutEs: "La sensación de ligereza de estar enamorado, como si no hubiera gravedad. Sting la compuso en una habitación de hotel. Fue su segundo número 1." },
      { n: 7, title: "On Any Other Day", titleEs: "Cualquier otro día", aboutEs: "Compuesta y cantada por Copeland: un hombre cuenta con humor un día en el que todo le sale mal." },
      { n: 8, title: "The Bed's Too Big Without You", titleEs: "La cama es demasiado grande sin ti", aboutEs: "Reggae lento sobre el vacío que queda después de una ruptura." },
      { n: 9, title: "Contact", titleEs: "Contacto", aboutEs: "Tema de Copeland con un aire inquieto sobre la dificultad de conectar con otra persona." },
      { n: 10, title: "Does Everyone Stare", titleEs: "¿Todo el mundo me mira?", aboutEs: "Copeland canta sobre la timidez y la inseguridad de un chico enamorado. Nació como una pieza de piano." },
      { n: 11, title: "No Time This Time", titleEs: "Esta vez no hay tiempo", aboutEs: "Rock muy rápido sobre las prisas de la vida moderna; cierra el disco a toda velocidad." },
    ],
  },
  {
    id: "ok-computer",
    artist: "Radiohead",
    title: "OK Computer",
    year: 1997,
    introEs:
      "Tercer disco de Radiohead, producido por Nigel Godrich junto al grupo. Retrata la ansiedad de la vida moderna: la tecnología, el consumo, la política y la sensación de estar desconectado. Es uno de los discos más influyentes de los años noventa.",
    textIds: ["music-ok-computer-story", "music-ok-computer-songs"],
    songs: [
      { n: 1, title: "Airbag", titleEs: "Airbag", aboutEs: "Alguien sobrevive a un accidente de coche y siente que ha vuelto a nacer." },
      { n: 2, title: "Paranoid Android", titleEs: "Androide paranoico", aboutEs: "Suite de más de seis minutos en varias partes. El título viene de Marvin, el robot deprimido de la novela «Guía del autoestopista galáctico». Critica la codicia y la violencia que el narrador ve a su alrededor." },
      { n: 3, title: "Subterranean Homesick Alien", titleEs: "Extraterrestre subterráneo con morriña", aboutEs: "El narrador sueña con que unos extraterrestres se lo lleven y le muestren el mundo desde fuera. El título juega con una canción de Bob Dylan." },
      { n: 4, title: "Exit Music (For a Film)", titleEs: "Música de salida (para una película)", aboutEs: "Escrita para el final de la película «Romeo + Julieta» (1996): dos amantes que huyen juntos." },
      { n: 5, title: "Let Down", titleEs: "Decepción", aboutEs: "La sensación de estar atrapado en la rutina, el transporte y la vida moderna, y el miedo a decepcionar." },
      { n: 6, title: "Karma Police", titleEs: "Policía del karma", aboutEs: "Nació de una broma interna del grupo: la idea de una policía que castiga a la gente según su karma." },
      { n: 7, title: "Fitter Happier", titleEs: "Más en forma, más feliz", aboutEs: "No se canta: una voz de ordenador recita una lista de consejos para tener una vida sana, productiva y perfecta. Ideal para practicar pronunciación pausada." },
      { n: 8, title: "Electioneering", titleEs: "Campaña electoral", aboutEs: "Rock duro y cínico sobre las campañas políticas y las promesas vacías." },
      { n: 9, title: "Climbing Up the Walls", titleEs: "Subiéndose por las paredes", aboutEs: "La canción más oscura del disco: miedo, locura y algo que acecha en la oscuridad." },
      { n: 10, title: "No Surprises", titleEs: "Sin sorpresas", aboutEs: "Una melodía dulce de carillón con un mensaje triste: el deseo de una vida tranquila y sin sobresaltos." },
      { n: 11, title: "Lucky", titleEs: "Afortunado", aboutEs: "Se publicó primero en 1995 en un disco benéfico para niños en zonas de guerra. Habla de sobrevivir a un desastre y sentirse con suerte." },
      { n: 12, title: "The Tourist", titleEs: "El turista", aboutEs: "La escribió Jonny Greenwood al ver a turistas corriendo de un monumento a otro. Su mensaje es ir más despacio." },
    ],
  },
  {
    id: "californication",
    artist: "Red Hot Chili Peppers",
    title: "Californication",
    year: 1999,
    introEs:
      "Séptimo disco de Red Hot Chili Peppers, producido por Rick Rubin. Marca la vuelta del guitarrista John Frusciante y un sonido más melódico. Habla de California, la fama, las adicciones y la amistad. Ha vendido más de 15 millones de copias.",
    textIds: ["music-californication-story", "music-californication-songs"],
    songs: [
      { n: 1, title: "Around the World", titleEs: "Alrededor del mundo", aboutEs: "Funk con un bajo explosivo de Flea sobre la alegría de viajar y recorrer el mundo de gira." },
      { n: 2, title: "Parallel Universe", titleEs: "Universo paralelo", aboutEs: "California como el borde del mundo occidental; una canción intensa sobre sentirse en otra dimensión." },
      { n: 3, title: "Scar Tissue", titleEs: "Tejido cicatricial", aboutEs: "Soledad y recuperación después de las adicciones, con una guitarra slide muy reconocible. Ganó el Grammy a la mejor canción de rock." },
      { n: 4, title: "Otherside", titleEs: "El otro lado", aboutEs: "La lucha contra la adicción y el recuerdo de los amigos que murieron por ella, como el guitarrista original del grupo, Hillel Slovak." },
      { n: 5, title: "Get On Top", titleEs: "Ponte encima", aboutEs: "Funk rápido y rapeado, lleno de energía y juegos de palabras." },
      { n: 6, title: "Californication", titleEs: "Californicación", aboutEs: "El lado oscuro de Hollywood y del sueño californiano: la fama, la cirugía estética y una cultura que se exporta al mundo entero." },
      { n: 7, title: "Easily", titleEs: "Fácilmente", aboutEs: "Canción con muchas imágenes sobre emociones contradictorias y la búsqueda de calma." },
      { n: 8, title: "Porcelain", titleEs: "Porcelana", aboutEs: "Balada suave inspirada en una madre joven con problemas de adicción que Kiedis conoció." },
      { n: 9, title: "Emit Remmus", titleEs: "Emit Remmus («summer time» al revés)", aboutEs: "El título es «summer time» escrito al revés; habla de un romance de verano." },
      { n: 10, title: "I Like Dirt", titleEs: "Me gusta la tierra", aboutEs: "Funk juguetón y desenfadado sobre el gusto por las cosas simples y la naturaleza." },
      { n: 11, title: "This Velvet Glove", titleEs: "Este guante de terciopelo", aboutEs: "Una canción sobre el amor y la vulnerabilidad, con una melodía delicada." },
      { n: 12, title: "Savior", titleEs: "Salvador", aboutEs: "Kiedis la dedicó a su padre: habla de la relación entre ambos y del perdón." },
      { n: 13, title: "Purple Stain", titleEs: "Mancha morada", aboutEs: "Funk desenfadado y con mucho humor." },
      { n: 14, title: "Right on Time", titleEs: "Justo a tiempo", aboutEs: "Punk-funk muy rápido, de los más acelerados del disco." },
      { n: 15, title: "Road Trippin'", titleEs: "De viaje por carretera", aboutEs: "Acústica y tranquila: recuerda un viaje para hacer surf por la costa de California con Flea y Frusciante." },
    ],
  },
];

export function getAlbum(id: string): Album | undefined {
  return ALBUMS.find((a) => a.id === id);
}
