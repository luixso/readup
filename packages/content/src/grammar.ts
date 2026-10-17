/** Temas de gramática A2–B1 explicados en español, con errores típicos de hispanohablantes. */
export interface GrammarTopic {
  id: string;
  level: "A2" | "B1";
  title: string;
  titleEs: string;
  summary: string;
  /** Cuándo se usa. */
  uses: string[];
  /** Estructura: etiqueta y ejemplo. */
  form: Array<{ label: string; example: string }>;
  examples: Array<{ en: string; es: string }>;
  mistakes: Array<{ wrong: string; right: string }>;
  tip?: string;
}

export const GRAMMAR: GrammarTopic[] = [
  // ---------------------------------------------------------------- A2
  {
    id: "present-simple-continuous",
    level: "A2",
    title: "Present simple vs present continuous",
    titleEs: "Presente simple y presente continuo",
    summary: "El presente simple habla de hábitos y verdades; el continuo, de lo que pasa ahora o en este periodo.",
    uses: [
      "Present simple: rutinas, hábitos, hechos generales y horarios.",
      "Present continuous: acciones en este momento, situaciones temporales y planes ya organizados.",
      "Verbos de estado (know, like, want, need, believe) casi nunca van en continuo.",
    ],
    form: [
      { label: "Simple (+)", example: "I work / She works" },
      { label: "Simple (−)", example: "I don't work / She doesn't work" },
      { label: "Simple (?)", example: "Do you work? / Does she work?" },
      { label: "Continuo (+)", example: "I'm working / She's working" },
      { label: "Continuo (?)", example: "Are you working?" },
    ],
    examples: [
      { en: "I usually take the metro to work.", es: "Normalmente voy al trabajo en metro." },
      { en: "Today I'm working from home.", es: "Hoy estoy trabajando desde casa." },
      { en: "The server restarts every night at 2 a.m.", es: "El servidor se reinicia cada noche a las 2." },
      { en: "We're migrating the database this week.", es: "Esta semana estamos migrando la base de datos." },
    ],
    mistakes: [
      { wrong: "She work in IT.", right: "She works in IT." },
      { wrong: "I am knowing the answer.", right: "I know the answer." },
      { wrong: "Where you live?", right: "Where do you live?" },
    ],
    tip: "No olvides la -s de la tercera persona: he works, she goes, it runs.",
  },
  {
    id: "past-simple",
    level: "A2",
    title: "Past simple",
    titleEs: "Pasado simple",
    summary: "Para acciones terminadas en un momento concreto del pasado.",
    uses: [
      "Acciones terminadas con un tiempo definido: yesterday, last week, in 2020, two days ago.",
      "Secuencias de acciones en una historia.",
    ],
    form: [
      { label: "Regular (+)", example: "I worked / I played / I stopped" },
      { label: "Irregular (+)", example: "I went / I saw / I bought" },
      { label: "Negativa", example: "I didn't work / I didn't go" },
      { label: "Pregunta", example: "Did you work? / Did you go?" },
    ],
    examples: [
      { en: "I deployed the new version yesterday.", es: "Ayer desplegué la nueva versión." },
      { en: "We didn't find the bug.", es: "No encontramos el error." },
      { en: "Did you call the client?", es: "¿Llamaste al cliente?" },
    ],
    mistakes: [
      { wrong: "I didn't went.", right: "I didn't go." },
      { wrong: "Did you saw it?", right: "Did you see it?" },
      { wrong: "Yesterday I have finished.", right: "Yesterday I finished." },
    ],
    tip: "Con did / didn't el verbo vuelve a su forma base: did go, didn't see.",
  },
  {
    id: "past-continuous",
    level: "A2",
    title: "Past continuous",
    titleEs: "Pasado continuo",
    summary: "Para una acción que estaba en progreso en el pasado, a menudo interrumpida por otra.",
    uses: [
      "Acción en progreso en un momento del pasado.",
      "Acción larga interrumpida por una corta (past simple), normalmente con when o while.",
      "Describir la escena de una historia.",
    ],
    form: [
      { label: "Afirmativa", example: "I was working / They were working" },
      { label: "Negativa", example: "She wasn't listening" },
      { label: "Pregunta", example: "Were you sleeping?" },
    ],
    examples: [
      { en: "I was writing an email when the power went out.", es: "Estaba escribiendo un correo cuando se fue la luz." },
      { en: "While we were talking, the build failed.", es: "Mientras hablábamos, falló la compilación." },
    ],
    mistakes: [
      { wrong: "When I was arriving, the meeting started.", right: "When I arrived, the meeting was starting." },
      { wrong: "They was waiting.", right: "They were waiting." },
    ],
  },
  {
    id: "present-perfect",
    level: "A2",
    title: "Present perfect",
    titleEs: "Presente perfecto",
    summary: "Conecta el pasado con el presente. Lo importante es el resultado o la experiencia, no cuándo.",
    uses: [
      "Experiencias de la vida, sin decir cuándo: ever, never.",
      "Acciones recientes con resultado ahora: just, already, yet.",
      "Situaciones que empezaron en el pasado y continúan: for, since.",
    ],
    form: [
      { label: "Afirmativa", example: "I have finished / She has finished" },
      { label: "Negativa", example: "I haven't finished yet" },
      { label: "Pregunta", example: "Have you ever used Linux?" },
    ],
    examples: [
      { en: "I've never used Kubernetes.", es: "Nunca he usado Kubernetes." },
      { en: "She has just pushed the fix.", es: "Acaba de subir la corrección." },
      { en: "I've worked here for two years.", es: "Trabajo aquí desde hace dos años." },
      { en: "Have you finished the report yet?", es: "¿Ya has terminado el informe?" },
    ],
    mistakes: [
      { wrong: "I work here since 2022.", right: "I've worked here since 2022." },
      { wrong: "I have seen him yesterday.", right: "I saw him yesterday." },
      { wrong: "I am here for two years.", right: "I've been here for two years." },
    ],
    tip: "«Llevo dos años aquí» = I've been here for two years. Nunca uses el presente simple con for/since.",
  },
  {
    id: "future-will-going-to",
    level: "A2",
    title: "Will vs going to",
    titleEs: "Futuro: will y going to",
    summary: "Going to para planes e intenciones; will para decisiones del momento, promesas y predicciones.",
    uses: [
      "Going to: planes ya decididos y predicciones con evidencia («look at those clouds»).",
      "Will: decisiones espontáneas, ofrecimientos, promesas y opiniones sobre el futuro.",
      "Present continuous: planes fijos con hora y lugar.",
    ],
    form: [
      { label: "Going to", example: "I'm going to learn Docker." },
      { label: "Will", example: "I'll help you." },
      { label: "Negativa", example: "I won't forget / I'm not going to wait" },
    ],
    examples: [
      { en: "I'm going to study for the certification next month.", es: "Voy a estudiar para la certificación el mes que viene." },
      { en: "The phone is ringing. — I'll get it!", es: "Suena el teléfono. — ¡Ya lo cojo yo!" },
      { en: "I think AI will change our jobs.", es: "Creo que la IA cambiará nuestros trabajos." },
    ],
    mistakes: [
      { wrong: "I will to call you.", right: "I'll call you." },
      { wrong: "Tomorrow I go to the dentist.", right: "Tomorrow I'm going to the dentist." },
    ],
  },
  {
    id: "comparatives-superlatives",
    level: "A2",
    title: "Comparatives and superlatives",
    titleEs: "Comparativos y superlativos",
    summary: "Para comparar dos cosas (comparativo) o destacar una entre varias (superlativo).",
    uses: [
      "Adjetivos cortos (1 sílaba o terminados en -y): -er / -est.",
      "Adjetivos largos: more / the most.",
      "Irregulares: good → better → the best; bad → worse → the worst; far → further.",
    ],
    form: [
      { label: "Corto", example: "fast → faster → the fastest" },
      { label: "Terminado en -y", example: "easy → easier → the easiest" },
      { label: "Largo", example: "expensive → more expensive → the most expensive" },
      { label: "Igualdad", example: "as fast as / not as fast as" },
    ],
    examples: [
      { en: "SSDs are faster than hard drives.", es: "Los SSD son más rápidos que los discos duros." },
      { en: "This is the most important part.", es: "Esta es la parte más importante." },
      { en: "Arch is not as easy as Ubuntu.", es: "Arch no es tan fácil como Ubuntu." },
    ],
    mistakes: [
      { wrong: "It's more easy.", right: "It's easier." },
      { wrong: "She is taller that me.", right: "She is taller than me." },
      { wrong: "The more good option.", right: "The best option." },
    ],
  },
  {
    id: "countable-uncountable",
    level: "A2",
    title: "Countable and uncountable nouns",
    titleEs: "Contables e incontables",
    summary: "Algunos sustantivos no tienen plural en inglés, aunque en español sí.",
    uses: [
      "Contables: a / an, plural, many, a few (a server, two servers, many servers).",
      "Incontables: sin a/an ni plural, much, a little (information, advice, software, hardware, news, equipment).",
      "Some en afirmativas; any en negativas y preguntas.",
    ],
    form: [
      { label: "Contable", example: "How many servers? — A few." },
      { label: "Incontable", example: "How much information? — A little." },
      { label: "Ambos", example: "a lot of servers / a lot of information" },
    ],
    examples: [
      { en: "Can you give me some advice?", es: "¿Me puedes dar algún consejo?" },
      { en: "We don't have much time.", es: "No tenemos mucho tiempo." },
      { en: "There isn't any documentation.", es: "No hay documentación." },
    ],
    mistakes: [
      { wrong: "I need an advice.", right: "I need some advice / a piece of advice." },
      { wrong: "The informations are wrong.", right: "The information is wrong." },
      { wrong: "We installed new softwares.", right: "We installed new software." },
    ],
    tip: "information, advice, software, hardware, feedback, news, research: siempre en singular.",
  },
  {
    id: "modals-obligation",
    level: "A2",
    title: "Can, must, have to, should",
    titleEs: "Verbos modales: poder, deber, tener que",
    summary: "Expresan capacidad, permiso, obligación y consejo. Van seguidos del verbo sin «to».",
    uses: [
      "Can / can't: capacidad y permiso.",
      "Must: obligación que siente quien habla; mustn't = prohibido.",
      "Have to: obligación externa (normas); don't have to = no es necesario.",
      "Should: consejo y recomendación.",
    ],
    form: [
      { label: "Modal + verbo", example: "You should restart it." },
      { label: "Negativa", example: "You mustn't share passwords." },
      { label: "No necesario", example: "You don't have to come." },
    ],
    examples: [
      { en: "Can you hear me?", es: "¿Me oyes?" },
      { en: "We have to update the certificates every year.", es: "Tenemos que renovar los certificados cada año." },
      { en: "You should read the docs first.", es: "Deberías leer la documentación primero." },
    ],
    mistakes: [
      { wrong: "You must to do it.", right: "You must do it." },
      { wrong: "She cans speak English.", right: "She can speak English." },
      { wrong: "You mustn't come (= no hace falta).", right: "You don't have to come." },
    ],
    tip: "mustn't (prohibido) ≠ don't have to (no hace falta). Es una de las confusiones más comunes.",
  },
  {
    id: "prepositions-time",
    level: "A2",
    title: "Prepositions of time: in, on, at",
    titleEs: "Preposiciones de tiempo: in, on, at",
    summary: "De lo general a lo concreto: in (periodos largos), on (días), at (horas exactas).",
    uses: [
      "In: meses, años, estaciones, partes del día (in May, in 2026, in the morning).",
      "On: días y fechas (on Monday, on 5 May, on my birthday).",
      "At: horas y momentos concretos (at 9:00, at night, at the weekend en inglés británico).",
    ],
    form: [
      { label: "In", example: "in October / in the afternoon" },
      { label: "On", example: "on Friday / on 17 October" },
      { label: "At", example: "at 3 p.m. / at noon / at night" },
    ],
    examples: [
      { en: "The meeting is on Tuesday at 10.", es: "La reunión es el martes a las 10." },
      { en: "I started in 2024.", es: "Empecé en 2024." },
    ],
    mistakes: [
      { wrong: "In Monday.", right: "On Monday." },
      { wrong: "At the morning.", right: "In the morning." },
      { wrong: "On next week.", right: "Next week. (sin preposición)" },
    ],
    tip: "Con next, last, this y every no se usa preposición: next Monday, last year.",
  },
  {
    id: "frequency-adverbs",
    level: "A2",
    title: "Adverbs of frequency",
    titleEs: "Adverbios de frecuencia",
    summary: "always, usually, often, sometimes, rarely, never: dicen con qué frecuencia pasa algo.",
    uses: [
      "Van antes del verbo principal: I usually work from home.",
      "Van después de be: She is always late.",
      "Con auxiliares, entre el auxiliar y el verbo: I have never seen it.",
    ],
    form: [
      { label: "Verbo normal", example: "I often read at night." },
      { label: "Con be", example: "He is never tired." },
      { label: "Pregunta", example: "How often do you deploy?" },
    ],
    examples: [
      { en: "We usually deploy on Thursdays.", es: "Normalmente desplegamos los jueves." },
      { en: "The tests are always green.", es: "Los tests siempre están en verde." },
    ],
    mistakes: [
      { wrong: "I go always to the gym.", right: "I always go to the gym." },
      { wrong: "She always is late.", right: "She is always late." },
    ],
  },
  // ---------------------------------------------------------------- B1
  {
    id: "present-perfect-continuous",
    level: "B1",
    title: "Present perfect continuous",
    titleEs: "Presente perfecto continuo",
    summary: "Para actividades que empezaron en el pasado y siguen (o acaban de terminar), destacando la duración.",
    uses: [
      "Duración de una actividad hasta ahora: for, since, how long.",
      "Actividad reciente con resultado visible: «You're tired. — I've been running».",
    ],
    form: [
      { label: "Afirmativa", example: "I've been working on this all day." },
      { label: "Pregunta", example: "How long have you been learning English?" },
    ],
    examples: [
      { en: "I've been learning English for a year.", es: "Llevo un año aprendiendo inglés." },
      { en: "We've been waiting for the build for 20 minutes.", es: "Llevamos 20 minutos esperando la compilación." },
    ],
    mistakes: [
      { wrong: "I'm learning English since 2025.", right: "I've been learning English since 2025." },
      { wrong: "How long are you waiting?", right: "How long have you been waiting?" },
    ],
    tip: "«Llevo + tiempo + gerundio» casi siempre se traduce con present perfect continuous.",
  },
  {
    id: "past-perfect",
    level: "B1",
    title: "Past perfect",
    titleEs: "Pasado perfecto (pluscuamperfecto)",
    summary: "Una acción anterior a otra acción pasada: «ya había pasado».",
    uses: [
      "Ordenar dos acciones en el pasado: la más antigua en past perfect.",
      "Con already, just, never, before, by the time.",
    ],
    form: [
      { label: "Afirmativa", example: "had + participio: I had finished" },
      { label: "Negativa", example: "She hadn't seen it before." },
    ],
    examples: [
      { en: "When I arrived, the meeting had already started.", es: "Cuando llegué, la reunión ya había empezado." },
      { en: "I had never used Linux before that job.", es: "Nunca había usado Linux antes de ese trabajo." },
    ],
    mistakes: [
      { wrong: "When I arrived, the meeting already started.", right: "When I arrived, the meeting had already started." },
    ],
  },
  {
    id: "used-to",
    level: "B1",
    title: "Used to",
    titleEs: "Used to: «solía»",
    summary: "Hábitos y estados del pasado que ya no son ciertos.",
    uses: [
      "Hábitos pasados: I used to play football.",
      "Estados pasados: There used to be a cinema here.",
      "No confundir con be used to + -ing = estar acostumbrado a.",
    ],
    form: [
      { label: "Afirmativa", example: "I used to work in a shop." },
      { label: "Negativa", example: "I didn't use to like coffee." },
      { label: "Pregunta", example: "Did you use to live here?" },
      { label: "Acostumbrado", example: "I'm used to working at night." },
    ],
    examples: [
      { en: "I used to use Windows, but now I use Linux.", es: "Antes usaba Windows, pero ahora uso Linux." },
      { en: "I'm not used to speaking English in meetings.", es: "No estoy acostumbrado a hablar inglés en reuniones." },
    ],
    mistakes: [
      { wrong: "I use to work there (en pasado).", right: "I used to work there." },
      { wrong: "I'm used to work at night.", right: "I'm used to working at night." },
    ],
  },
  {
    id: "conditionals",
    level: "B1",
    title: "Zero, first and second conditional",
    titleEs: "Condicionales 0, 1 y 2",
    summary: "Situaciones reales, probables o imaginarias con if.",
    uses: [
      "Zero: verdades generales y reglas (if + presente, presente).",
      "First: situaciones reales o probables en el futuro (if + presente, will).",
      "Second: situaciones imaginarias o poco probables (if + pasado, would).",
    ],
    form: [
      { label: "Zero", example: "If you heat water to 100 °C, it boils." },
      { label: "First", example: "If the tests pass, we'll deploy." },
      { label: "Second", example: "If I had more time, I would learn Rust." },
    ],
    examples: [
      { en: "If you press Ctrl+C, the process stops.", es: "Si pulsas Ctrl+C, el proceso se detiene." },
      { en: "If it rains tomorrow, I'll work from home.", es: "Si llueve mañana, trabajaré desde casa." },
      { en: "If I were you, I'd read the logs.", es: "Yo que tú, leería los logs." },
    ],
    mistakes: [
      { wrong: "If it will rain, I'll stay.", right: "If it rains, I'll stay." },
      { wrong: "If I would have time, I would go.", right: "If I had time, I would go." },
    ],
    tip: "Nunca pongas will ni would justo después de if.",
  },
  {
    id: "passive-voice",
    level: "B1",
    title: "The passive voice",
    titleEs: "La voz pasiva",
    summary: "Cuando importa la acción o el resultado más que quién lo hace. Muy común en textos técnicos.",
    uses: [
      "Cuando no sabemos o no importa quién hace la acción.",
      "En documentación, procesos y noticias.",
      "Para decir quién lo hizo se usa by.",
    ],
    form: [
      { label: "Presente", example: "The data is stored in the cloud." },
      { label: "Pasado", example: "The bug was fixed yesterday." },
      { label: "Present perfect", example: "Your password has been changed." },
      { label: "Con modal", example: "The service must be restarted." },
    ],
    examples: [
      { en: "Linux was created by Linus Torvalds.", es: "Linux fue creado por Linus Torvalds." },
      { en: "The backups are made every night.", es: "Las copias de seguridad se hacen cada noche." },
    ],
    mistakes: [
      { wrong: "The email was send.", right: "The email was sent." },
      { wrong: "Is spoken English here.", right: "English is spoken here." },
    ],
    tip: "La pasiva sustituye a muchas frases con «se» en español: «se hace», «se guarda», «se usa».",
  },
  {
    id: "reported-speech",
    level: "B1",
    title: "Reported speech",
    titleEs: "Estilo indirecto",
    summary: "Contar lo que otra persona dijo. Los tiempos verbales suelen dar un paso atrás.",
    uses: [
      "say + (that): She said (that) she was busy.",
      "tell + persona: She told me (that) she was busy.",
      "Preguntas: He asked if / whether…, He asked where I lived.",
    ],
    form: [
      { label: "Presente → pasado", example: "«I'm tired» → She said she was tired." },
      { label: "Will → would", example: "«I'll help» → He said he would help." },
      { label: "Pregunta", example: "«Are you ready?» → He asked if I was ready." },
    ],
    examples: [
      { en: "My manager said the release was postponed.", es: "Mi jefe dijo que el lanzamiento se había aplazado." },
      { en: "She asked me where the logs were.", es: "Me preguntó dónde estaban los logs." },
    ],
    mistakes: [
      { wrong: "She said me that…", right: "She told me that… / She said that…" },
      { wrong: "He asked me where was the office.", right: "He asked me where the office was." },
    ],
  },
  {
    id: "relative-clauses",
    level: "B1",
    title: "Relative clauses",
    titleEs: "Oraciones de relativo",
    summary: "Who, which, that, where, whose: añaden información sobre un sustantivo.",
    uses: [
      "Who: personas. Which: cosas. That: personas o cosas (informal, solo en definidas).",
      "Where: lugares. Whose: posesión.",
      "Si el relativo es objeto, se puede omitir: The tool (that) I use.",
    ],
    form: [
      { label: "Persona", example: "The engineer who fixed it." },
      { label: "Cosa", example: "The server which crashed." },
      { label: "Lugar", example: "The office where I work." },
      { label: "Posesión", example: "The user whose account was hacked." },
    ],
    examples: [
      { en: "This is the script that deletes old logs.", es: "Este es el script que borra los logs antiguos." },
      { en: "The company where I work uses Proxmox.", es: "La empresa donde trabajo usa Proxmox." },
    ],
    mistakes: [
      { wrong: "The man which called you.", right: "The man who called you." },
      { wrong: "The book that I read it.", right: "The book that I read." },
    ],
  },
  {
    id: "gerunds-infinitives",
    level: "B1",
    title: "Gerunds and infinitives",
    titleEs: "Gerundio (-ing) o infinitivo (to)",
    summary: "Algunos verbos van seguidos de -ing y otros de to + verbo.",
    uses: [
      "Verbo + -ing: enjoy, finish, avoid, mind, suggest, keep, consider.",
      "Verbo + to: want, need, decide, hope, plan, learn, agree, forget.",
      "Después de preposiciones siempre -ing: interested in learning, good at coding.",
    ],
    form: [
      { label: "-ing", example: "I enjoy reading." },
      { label: "to", example: "I decided to learn English." },
      { label: "Preposición", example: "Thanks for helping me." },
    ],
    examples: [
      { en: "I'm thinking about changing jobs.", es: "Estoy pensando en cambiar de trabajo." },
      { en: "Avoid running commands as root.", es: "Evita ejecutar comandos como root." },
    ],
    mistakes: [
      { wrong: "I enjoy to read.", right: "I enjoy reading." },
      { wrong: "I'm interested in learn.", right: "I'm interested in learning." },
      { wrong: "I want learning.", right: "I want to learn." },
    ],
  },
  {
    id: "modals-deduction",
    level: "B1",
    title: "Modals of deduction",
    titleEs: "Modales de deducción: must, might, can't",
    summary: "Para expresar cuán seguro estás de algo.",
    uses: [
      "Must: casi seguro que sí.",
      "Might / may / could: es posible.",
      "Can't: casi seguro que no.",
    ],
    form: [
      { label: "Presente", example: "It must be the cache." },
      { label: "Posible", example: "It might be a DNS problem." },
      { label: "Imposible", example: "It can't be the network; it works." },
      { label: "Pasado", example: "He must have forgotten." },
    ],
    examples: [
      { en: "The site is slow. It might be the database.", es: "La web va lenta. Puede que sea la base de datos." },
      { en: "You've worked all night. You must be tired.", es: "Has trabajado toda la noche. Debes de estar cansado." },
    ],
    mistakes: [
      { wrong: "It mustn't be true (= no puede ser).", right: "It can't be true." },
      { wrong: "He must forgot.", right: "He must have forgotten." },
    ],
  },
  {
    id: "phrasal-verbs",
    level: "B1",
    title: "Phrasal verbs",
    titleEs: "Phrasal verbs (verbos con partícula)",
    summary: "Verbo + partícula con un significado nuevo. Son esenciales para entender a los nativos.",
    uses: [
      "Separables: el objeto puede ir en medio (turn it off). Si el objeto es un pronombre, va en medio obligatoriamente.",
      "Inseparables: look after the kids, get on the bus.",
      "En IT son muy comunes: set up, log in, back up, roll back, shut down, spin up.",
    ],
    form: [
      { label: "Separable", example: "Turn off the server / Turn it off" },
      { label: "Inseparable", example: "Look into the problem" },
      { label: "Sin objeto", example: "The site went down." },
    ],
    examples: [
      { en: "Can you set up the new laptop?", es: "¿Puedes configurar el portátil nuevo?" },
      { en: "We need to back up the database.", es: "Tenemos que hacer una copia de la base de datos." },
      { en: "Let's look into it tomorrow.", es: "Investiguémoslo mañana." },
      { en: "I gave up after three hours.", es: "Me rendí después de tres horas." },
    ],
    mistakes: [
      { wrong: "Turn off it.", right: "Turn it off." },
      { wrong: "I need to backup the files (verbo).", right: "I need to back up the files. (backup es el sustantivo)" },
    ],
    tip: "Verbo separado (log in, set up, back up); sustantivo junto (login, setup, backup).",
  },
];

export function getGrammarTopic(id: string): GrammarTopic | undefined {
  return GRAMMAR.find((g) => g.id === id);
}
