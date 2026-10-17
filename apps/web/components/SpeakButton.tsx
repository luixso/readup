"use client";

import { useSpeech } from "@/lib/speech";

export function SpeakButton({ text, rate = 0.85 }: { text: string; rate?: number }) {
  const speech = useSpeech();
  return (
    <button
      className="btn round"
      aria-label={`Escuchar ${text}`}
      onClick={() => speech.say(text, rate)}
      disabled={!speech.supported}
    >
      ▶
    </button>
  );
}
