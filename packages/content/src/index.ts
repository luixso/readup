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
import type { GradedText, TechCategory, Track } from "./types";

export * from "./types";
export * from "./false-friends";
export * from "./tech-terms";

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
].sort((a, b) => CEFR_ORDER.indexOf(a.cefr) - CEFR_ORDER.indexOf(b.cefr));

export const TECH_CATEGORIES: TechCategory[] = [
  "Soporte IT",
  "Redes",
  "DevOps",
  "Cloud",
  "Seguridad",
  "Agile",
];

export function textsByTrack(track: Track): GradedText[] {
  return TEXTS.filter((t) => t.track === track);
}

export function getText(id: string): GradedText | undefined {
  return TEXTS.find((t) => t.id === id);
}
