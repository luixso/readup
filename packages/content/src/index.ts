import { branches } from "./texts/philosophy/branches";
import { descartes } from "./texts/philosophy/descartes";
import { lockeHume } from "./texts/philosophy/locke-hume";
import { kant } from "./texts/philosophy/kant";
import { mill } from "./texts/philosophy/mill";
import { nietzsche } from "./texts/philosophy/nietzsche";
import { existentialism } from "./texts/philosophy/existentialism";
import { wittgenstein } from "./texts/philosophy/wittgenstein";
import { amazon } from "./texts/culture/amazon";
import { blueSky } from "./texts/culture/blue-sky";
import { coffee } from "./texts/culture/coffee";
import { fridaKahlo } from "./texts/culture/frida-kahlo";
import { greatWall } from "./texts/culture/great-wall";
import { humanBrain } from "./texts/culture/human-brain";
import { leonardo } from "./texts/culture/leonardo";
import { machuPicchu } from "./texts/culture/machu-picchu";
import { marieCurie } from "./texts/culture/marie-curie";
import { moonLanding } from "./texts/culture/moon-landing";
import { olympics } from "./texts/culture/olympics";
import { printingPress } from "./texts/culture/printing-press";
import { californicationSongs } from "./texts/music/californication-songs";
import { californicationStory } from "./texts/music/californication-story";
import { okComputerSongs } from "./texts/music/ok-computer-songs";
import { okComputerStory } from "./texts/music/ok-computer-story";
import { reggattaSongs } from "./texts/music/reggatta-songs";
import { reggattaStory } from "./texts/music/reggatta-story";
import { aDayWithoutTheInternet } from "./texts/a-day-without-the-internet";
import { aNewJob } from "./texts/a-new-job";
import { aTripToTheCoast } from "./texts/a-trip-to-the-coast";
import { cookingWithGrandma } from "./texts/cooking-with-grandma";
import { learningToDrive } from "./texts/learning-to-drive";
import { techContainersDocker } from "./texts/tech-containers-docker";
import { techDailyStandup } from "./texts/tech-daily-standup";
import { techHelpDesk } from "./texts/tech-help-desk";
import { techHowDnsWorks } from "./texts/tech-how-dns-works";
import { techIncident } from "./texts/tech-incident";
import { techIpAndRouters } from "./texts/tech-ip-and-routers";
import { techPhishing } from "./texts/tech-phishing";
import { techTheCloud } from "./texts/tech-the-cloud";
import { techWhatIsDevops } from "./texts/tech-what-is-devops";
import { theLostPhone } from "./texts/the-lost-phone";
import { theNightBus } from "./texts/the-night-bus";
import { theWeekendMarket } from "./texts/the-weekend-market";
import { whyWeNeedSleep } from "./texts/why-we-need-sleep";
import type { CultureCategory, GradedText, MusicCategory, TechCategory, Track } from "./types";

export * from "./types";
export * from "./false-friends";
export * from "./tech-terms";
export * from "./albums";

const CEFR_ORDER = ["A2", "A2+", "B1", "B1+", "B2"];

/** Todos los textos, ordenados por nivel. */
export const TEXTS: GradedText[] = [
  aNewJob,
  theWeekendMarket,
  theLostPhone,
  cookingWithGrandma,
  aTripToTheCoast,
  aDayWithoutTheInternet,
  learningToDrive,
  theNightBus,
  whyWeNeedSleep,
  techHelpDesk,
  techPhishing,
  techDailyStandup,
  techHowDnsWorks,
  techIpAndRouters,
  techWhatIsDevops,
  techContainersDocker,
  techTheCloud,
  techIncident,
  greatWall,
  amazon,
  olympics,
  moonLanding,
  machuPicchu,
  coffee,
  leonardo,
  printingPress,
  marieCurie,
  blueSky,
  fridaKahlo,
  humanBrain,
  branches,
  descartes,
  lockeHume,
  kant,
  mill,
  nietzsche,
  existentialism,
  wittgenstein,
  reggattaStory,
  reggattaSongs,
  okComputerStory,
  okComputerSongs,
  californicationStory,
  californicationSongs,
].sort((a, b) => CEFR_ORDER.indexOf(a.cefr) - CEFR_ORDER.indexOf(b.cefr));

export const TECH_CATEGORIES: TechCategory[] = [
  "Soporte IT",
  "Redes",
  "DevOps",
  "Cloud",
  "Seguridad",
  "Agile",
];

export const CULTURE_CATEGORIES: CultureCategory[] = ["Historia", "Ciencia", "Arte", "Naturaleza", "Sociedad", "Filosofía"];

export const MUSIC_CATEGORIES: MusicCategory[] = ["The Police", "Radiohead", "Red Hot Chili Peppers"];

export function textsByTrack(track: Track): GradedText[] {
  return TEXTS.filter((t) => t.track === track);
}

export function getText(id: string): GradedText | undefined {
  return TEXTS.find((t) => t.id === id);
}
export * from "./tips";
export * from "./grammar";
export * from "./dictionary";
