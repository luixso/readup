import type { GradedText } from "@readup/content";
import { tokenize } from "@readup/core";
import type { TextSummary } from "@/components/Library";

export function summarize(t: GradedText): TextSummary {
  return {
    id: t.id,
    title: t.title,
    titleEs: t.titleEs,
    cefr: t.cefr,
    track: t.track,
    label: t.category ?? t.topic,
    words: tokenize(t.body).length,
  };
}
