/** Consejos de aprendizaje basados en la investigación (ver docs/01-investigacion-metodos.md). */
export interface Tip {
  title: string;
  body: string;
}

export const TIPS: Tip[] = [
  { title: "Lee fácil, lee mucho", body: "Si entiendes el 98 % de un texto, aprendes sin esfuerzo. Es mejor leer 10 textos fáciles que 1 difícil." },
  { title: "No traduzcas todo", body: "Toca solo las palabras que impiden entender la frase. Las demás, adivínalas por el contexto." },
  { title: "Lee y escucha a la vez", body: "Leer mientras escuchas el audio conecta cómo se escribe una palabra con cómo suena." },
  { title: "Relee", body: "Leer el mismo texto 2 o 3 veces en días distintos mejora la velocidad y fija el vocabulario." },
  { title: "Aprende frases, no palabras", body: "Guarda «make a decision» en vez de «decision». Los nativos hablan en bloques." },
  { title: "Repasa antes de olvidar", body: "Hacer tus repasos cada día, aunque sean 5 minutos, vale más que una hora el domingo." },
  { title: "Recordar es mejor que releer", body: "Intenta recordar el significado antes de mirarlo. Ese pequeño esfuerzo es lo que fija la palabra." },
  { title: "Habla desde el primer día", body: "Lee en voz alta 2 minutos al día. Tu boca también necesita práctica." },
  { title: "Shadowing", body: "Repite el audio medio segundo detrás, imitando ritmo y entonación, no solo las palabras." },
  { title: "Graba tu voz", body: "Grábate leyendo un párrafo hoy y repítelo dentro de un mes. Notarás el progreso." },
  { title: "Cuidado con los falsos amigos", body: "«Actually» es «en realidad», no «actualmente». «Embarrassed» es «avergonzado», no «embarazada»." },
  { title: "Siempre con sujeto", body: "En inglés el sujeto es obligatorio: «It is raining», nunca «Is raining»." },
  { title: "Las vocales largas importan", body: "«Ship» y «sheep», «live» y «leave» son palabras distintas. Alarga la vocal cuando toca." },
  { title: "Nada de «eschool»", body: "No añadas una «e» antes de s + consonante: school, Spain, study, start." },
  { title: "Las terminaciones -ed", body: "«Worked» suena /t/, «played» /d/ y solo «wanted» o «needed» añaden una sílaba /ɪd/." },
  { title: "Lee sobre lo que te gusta", body: "Si te interesa el tema, lees más y recuerdas más. Usa la documentación técnica de tus herramientas." },
  { title: "Lectura estrecha", body: "Lee varios textos del mismo tema seguidos: el vocabulario se repite y lo aprendes sin darte cuenta." },
  { title: "Una palabra necesita encuentros", body: "Hacen falta entre 8 y 12 encuentros con una palabra para dominarla. No te frustres si la olvidas." },
  { title: "Piensa en inglés", body: "Describe en voz baja lo que haces: «I'm making coffee. Now I'm opening my laptop»." },
  { title: "Errores = progreso", body: "Equivocarse al hablar es parte del aprendizaje. Comunica primero, perfecciona después." },
  { title: "Cambia el idioma de tus apps", body: "Pon el móvil, el navegador y tu editor de código en inglés. Es exposición gratis cada día." },
  { title: "Subtítulos en inglés", body: "Con series, usa subtítulos en inglés, no en español. Es lectura y escucha a la vez." },
  { title: "Constancia > intensidad", body: "20 minutos cada día durante un año son unas 120 horas. Eso es casi un nivel MCER." },
  { title: "Escribe un resumen", body: "Después de leer, escribe 3 frases sobre el texto. Usar las palabras nuevas las activa." },
  { title: "Present perfect", body: "Si dices cuándo («yesterday», «in 2020»), usa pasado simple. Si no importa cuándo, present perfect." },
  { title: "Make vs do", body: "«Make» para crear (make a cake, a decision, a mistake). «Do» para tareas (do homework, the dishes, your job)." },
  { title: "Pregunta como un nativo", body: "En reuniones técnicas: «Could you clarify…?», «Just to confirm…», «Does that make sense?»." },
  { title: "Velocidad lenta, luego normal", body: "Escucha primero a 0.75× y después a 1×. El objetivo es entender a velocidad real." },
  { title: "Descansa también", body: "Dormir consolida lo que aprendes. Repasar antes de dormir funciona especialmente bien." },
  { title: "Celebra la racha", body: "Una lectura al día mantiene la racha viva. Un día flojo con una lectura corta también cuenta." },
];

/** Un consejo distinto cada día, igual para todos los usuarios ese día. */
export function tipOfTheDay(date: Date): Tip {
  return TIPS[tipIndexOfTheDay(date)]!;
}

/** Posición en TIPS del consejo del día (el carrusel empieza ahí). */
export function tipIndexOfTheDay(date: Date): number {
  const dayNumber = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000,
  );
  return dayNumber % TIPS.length;
}
