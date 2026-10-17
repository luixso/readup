"use client";

import type { SpeechApi } from "@/lib/speech";

const RATES = [
  { value: 0.7, label: "0.7×" },
  { value: 0.9, label: "0.9×" },
  { value: 1, label: "1×" },
];

interface Props {
  speech: SpeechApi;
  sentences: string[];
}

export function AudioBar({ speech, sentences }: Props) {
  const noVoices = speech.ready && speech.supported && speech.voices.length === 0;

  return (
    <>
      {!speech.supported && (
        <div className="notice">Tu navegador no permite leer en voz alta. Prueba con Chrome, Edge o Safari.</div>
      )}
      {noVoices && (
        <div className="notice">
          No hay voces en inglés instaladas en este dispositivo. <br />
          <strong>Windows:</strong> Configuración → Hora e idioma → Voz → Agregar voces → English (United States).{" "}
          <strong>Android:</strong> Ajustes → Idioma → Salida de texto a voz → Instalar datos de voz → English.{" "}
          <strong>iPhone/Mac:</strong> Accesibilidad → Contenido leído → Voces → English. Luego recarga la página.
        </div>
      )}
      <div className="audio-bar">
        <button
          className="btn primary round"
          aria-label={speech.playing ? "Parar" : "Escuchar el texto"}
          disabled={!speech.supported}
          onClick={() => (speech.playing ? speech.stop() : speech.playSentences(sentences, 0))}
        >
          {speech.playing ? "■" : "▶"}
        </button>
        <div className="grow">
          <div className="status">
            {speech.playing && speech.activeIndex !== null ? (
              <>
                Frase <strong>{speech.activeIndex + 1}</strong> de {sentences.length} · toca una frase para saltar
              </>
            ) : (
              <>
                <strong>Escuchar mientras lees</strong> · {speech.voice ? speech.voice.name : "voz en inglés"}
              </>
            )}
          </div>
        </div>
        <div className="segmented" role="group" aria-label="Velocidad">
          {RATES.map((r) => (
            <button
              key={r.value}
              className={speech.rate === r.value ? "active" : ""}
              onClick={() => speech.setRate(r.value)}
            >
              {r.label}
            </button>
          ))}
        </div>
        {speech.voices.length > 1 && (
          <select
            aria-label="Voz"
            value={speech.voice?.name ?? ""}
            onChange={(e) => speech.setVoiceName(e.target.value)}
          >
            {speech.voices.map((v) => (
              <option key={v.name} value={v.name}>
                {v.name.replace(/^(Microsoft|Google)\s*/, "")} ({v.lang})
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
}
