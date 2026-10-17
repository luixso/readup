import { aNewJob } from "./texts/a-new-job";
import { aTripToTheCoast } from "./texts/a-trip-to-the-coast";
import { theWeekendMarket } from "./texts/the-weekend-market";
import type { GradedText } from "./types";

export * from "./types";
export * from "./false-friends";

export const TEXTS: GradedText[] = [aNewJob, theWeekendMarket, aTripToTheCoast];

export function getText(id: string): GradedText | undefined {
  return TEXTS.find((t) => t.id === id);
}
