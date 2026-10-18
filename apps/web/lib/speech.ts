"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/*
 * Lectura en voz alta con la síntesis del navegador (gratis, sin servidor).
 *
 * Problemas que resuelve:
 * - Chrome carga las voces de forma asíncrona: getVoices() devuelve [] al principio.
 * - Sin voz explícita, el navegador usa la voz del sistema (en español) o no suena.
 * - Chrome corta las locuciones de más de ~15 s: se lee frase a frase.
 * - Llamar a speak() justo después de cancel() a veces se ignora en Chrome.
 *
 * En v0.3 se sustituirá por audio neural pregenerado (docs/03-arquitectura.md).
 */

const PREFS_KEY = "readup.voice.v1";

/** Velocidades disponibles (0.25 = muy lento, para frases difíciles). */
export const RATES = [0.25, 0.5, 0.75, 1] as const;
const DEFAULT_RATE = 0.75;

/** Ajusta velocidades guardadas de versiones anteriores (0.7, 0.9) a las disponibles. */
function snapRate(rate: number): number {
  return RATES.reduce((best, r) => (Math.abs(r - rate) < Math.abs(best - rate) ? r : best), DEFAULT_RATE);
}

/** Al ir lento, una pausa entre frases da tiempo a procesar lo escuchado. */
function pauseAfterSentence(rate: number): number {
  return rate < 1 ? Math.round(900 * (1 - rate)) : 0;
}

interface VoicePrefs {
  voiceName: string | null;
  rate: number;
}

function loadPrefs(): VoicePrefs {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (raw) {
      const prefs = { voiceName: null, rate: DEFAULT_RATE, ...(JSON.parse(raw) as Partial<VoicePrefs>) };
      return { ...prefs, rate: snapRate(prefs.rate) };
    }
  } catch {
    // Sin almacenamiento: valores por defecto.
  }
  return { voiceName: null, rate: DEFAULT_RATE };
}

function savePrefs(prefs: VoicePrefs) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    // Ignorar.
  }
}

function isSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/** Las voces neurales ("Natural", "Online") y las de Google suenan mucho mejor. */
function voiceScore(v: SpeechSynthesisVoice): number {
  let score = 0;
  if (/natural|online|neural/i.test(v.name)) score += 40;
  if (/google/i.test(v.name)) score += 30;
  if (/samantha|daniel|karen|serena|aria|jenny|guy|libby|sonia|ryan/i.test(v.name)) score += 15;
  if (/^en[-_](us|gb)/i.test(v.lang)) score += 10;
  if (!v.localService) score += 5;
  return score;
}

export function englishVoices(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  return voices
    .filter((v) => /^en([-_]|$)/i.test(v.lang))
    .sort((a, b) => voiceScore(b) - voiceScore(a));
}

export interface SpeechApi {
  supported: boolean;
  /** true cuando el navegador ya ha informado de sus voces. */
  ready: boolean;
  voices: SpeechSynthesisVoice[];
  voice: SpeechSynthesisVoice | null;
  setVoiceName: (name: string) => void;
  rate: number;
  setRate: (rate: number) => void;
  playing: boolean;
  /** Índice de la frase que se está leyendo, o null. */
  activeIndex: number | null;
  playSentences: (sentences: string[], from?: number) => void;
  say: (text: string, rate?: number) => void;
  stop: () => void;
}

export function useSpeech(): SpeechApi {
  const [supported, setSupported] = useState(true);
  const [ready, setReady] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [prefs, setPrefs] = useState<VoicePrefs>({ voiceName: null, rate: DEFAULT_RATE });
  const [playing, setPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Cada reproducción tiene un id; los eventos de reproducciones canceladas se ignoran.
  const runId = useRef(0);

  useEffect(() => {
    if (!isSupported()) {
      setSupported(false);
      setReady(true);
      return;
    }
    setPrefs(loadPrefs());
    const synth = window.speechSynthesis;
    const update = () => {
      const list = englishVoices(synth.getVoices());
      setVoices(list);
      if (list.length > 0) setReady(true);
    };
    update();
    synth.addEventListener("voiceschanged", update);
    // Algunos navegadores nunca disparan voiceschanged si no hay voces.
    const timeout = setTimeout(() => setReady(true), 2500);
    return () => {
      synth.removeEventListener("voiceschanged", update);
      clearTimeout(timeout);
      synth.cancel();
    };
  }, []);

  const voice = voices.find((v) => v.name === prefs.voiceName) ?? voices[0] ?? null;

  const updatePrefs = useCallback((patch: Partial<VoicePrefs>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      savePrefs(next);
      return next;
    });
  }, []);

  const makeUtterance = useCallback(
    (text: string, rate: number) => {
      const u = new SpeechSynthesisUtterance(text);
      if (voice) {
        u.voice = voice;
        u.lang = voice.lang;
      } else {
        u.lang = "en-US";
      }
      u.rate = rate;
      return u;
    },
    [voice],
  );

  const stop = useCallback(() => {
    runId.current++;
    if (isSupported()) window.speechSynthesis.cancel();
    setPlaying(false);
    setActiveIndex(null);
  }, []);

  const playSentences = useCallback(
    (sentences: string[], from = 0) => {
      if (!isSupported() || sentences.length === 0) return;
      const synth = window.speechSynthesis;
      const id = ++runId.current;
      synth.cancel();
      setPlaying(true);

      const speakAt = (i: number) => {
        if (id !== runId.current) return;
        if (i >= sentences.length) {
          setPlaying(false);
          setActiveIndex(null);
          return;
        }
        const u = makeUtterance(sentences[i]!, prefs.rate);
        u.onstart = () => id === runId.current && setActiveIndex(i);
        u.onend = () => {
          const pause = pauseAfterSentence(prefs.rate);
          if (pause) setTimeout(() => speakAt(i + 1), pause);
          else speakAt(i + 1);
        };
        u.onerror = (e) => {
          // "interrupted"/"canceled" son esperables al parar.
          if (e.error !== "interrupted" && e.error !== "canceled") speakAt(i + 1);
        };
        setActiveIndex(i);
        synth.speak(u);
        synth.resume();
      };

      setTimeout(() => speakAt(from), 60);
    },
    [makeUtterance, prefs.rate],
  );

  const say = useCallback(
    (text: string, rate?: number) => {
      if (!isSupported()) return;
      runId.current++;
      setPlaying(false);
      setActiveIndex(null);
      const synth = window.speechSynthesis;
      synth.cancel();
      const u = makeUtterance(text, rate ?? prefs.rate);
      setTimeout(() => {
        synth.speak(u);
        synth.resume();
      }, 60);
    },
    [makeUtterance, prefs.rate],
  );

  return {
    supported,
    ready,
    voices,
    voice,
    setVoiceName: (name) => updatePrefs({ voiceName: name }),
    rate: prefs.rate,
    setRate: (rate) => updatePrefs({ rate }),
    playing,
    activeIndex,
    playSentences,
    say,
    stop,
  };
}
