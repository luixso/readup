"use client";

import { RATES, type SpeechApi } from "@/lib/speech";

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
          No hay voces en inglés instaladas en este dispositivo.
          <br />
          <strong>Windows:</strong> Configuración → Hora e idioma → Voz → Agregar voces → English.{" "}
          <strong>Android:</strong> Ajustes → Idioma → Salida de texto a voz → English.{" "}
          <strong>iPhone/Mac:</strong> Accesibilidad → Contenido leído → Voces → English.{" "}
          <strong>Linux:</strong> instala <code>speech-dispatcher</code> y <code>espeak-ng</code>. Luego recarga.
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
        <div className="grow status">
          {speech.playing && speech.activeIndex !== null ? (
            <>
              Frase {speech.activeIndex + 1} / {sentences.length}
            </>
          ) : (
            <>Escuchar</>
          )}
        </div>
        <div className="segmented" role="group" aria-label="Velocidad">
          {RATES.map((r) => (
            <button key={r} className={speech.rate === r ? "active" : ""} onClick={() => speech.setRate(r)}>
              {r}×
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
                {v.name.replace(/^(Microsoft|Google)\s*/, "").replace(/\s*-\s*English.*$/, "")} · {v.lang}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
}
