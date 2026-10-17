/** Falsos amigos frecuentes para hispanohablantes: palabra inglesa → significado real y trampa. */
export interface FalseFriend {
  en: string;
  means: string;
  notMeans: string;
}

export const FALSE_FRIENDS: FalseFriend[] = [
  { en: "actually", means: "en realidad", notMeans: "actualmente (currently)" },
  { en: "embarrassed", means: "avergonzado", notMeans: "embarazada (pregnant)" },
  { en: "library", means: "biblioteca", notMeans: "librería (bookshop)" },
  { en: "sensible", means: "sensato", notMeans: "sensible (sensitive)" },
  { en: "assist", means: "ayudar", notMeans: "asistir (attend)" },
  { en: "carpet", means: "alfombra", notMeans: "carpeta (folder)" },
  { en: "exit", means: "salida", notMeans: "éxito (success)" },
  { en: "realize", means: "darse cuenta", notMeans: "realizar (carry out)" },
  { en: "large", means: "grande", notMeans: "largo (long)" },
  { en: "constipated", means: "estreñido", notMeans: "constipado (have a cold)" },
  { en: "fabric", means: "tela", notMeans: "fábrica (factory)" },
  { en: "eventually", means: "finalmente", notMeans: "eventualmente (possibly)" },
  { en: "attend", means: "asistir", notMeans: "atender (serve, deal with)" },
  { en: "record", means: "grabar / registro", notMeans: "recordar (remember)" },
  { en: "lecture", means: "conferencia, clase", notMeans: "lectura (reading)" },
  { en: "molest", means: "abusar sexualmente", notMeans: "molestar (bother)" },
  { en: "success", means: "éxito", notMeans: "suceso (event)" },
  { en: "pretend", means: "fingir", notMeans: "pretender (intend)" },
  { en: "argument", means: "discusión, pelea", notMeans: "argumento de una película (plot)" },
  { en: "parents", means: "padres", notMeans: "parientes (relatives)" },
];

const BY_WORD = new Map(FALSE_FRIENDS.map((f) => [f.en, f]));

export function findFalseFriend(word: string): FalseFriend | undefined {
  return BY_WORD.get(word.toLowerCase());
}
