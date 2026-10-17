"use client";

import type { FalseFriend } from "@readup/content";
import type { SpeechApi } from "@/lib/speech";

export interface WordSelection {
  word: string;
  term: string;
  es?: string;
  note?: string;
  /** true mientras se busca la traducción en línea. */
  loading?: boolean;
  falseFriend?: FalseFriend;
  context: string;
}

interface Props {
  selection: WordSelection;
  saved: boolean;
  speech: SpeechApi;
  onSave: () => void;
  onClose: () => void;
}

/** Ficha inferior con la traducción de la palabra tocada. */
export function WordSheet({ selection, saved, speech, onSave, onClose }: Props) {
  return (
    <aside className="sheet" role="dialog" aria-label="Significado">
      <div className="sheet-head">
        <span className="sheet-term">{selection.term}</span>
        <div className="row">
          <button className="btn round" aria-label="Escuchar" onClick={() => speech.say(selection.term, 0.75)}>
            🔊
          </button>
          <button className="btn primary" onClick={onSave} disabled={saved || selection.loading}>
            {saved ? "Guardada" : "+ Repasar"}
          </button>
          <button className="btn round ghost" aria-label="Cerrar" onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
      {selection.loading ? (
        <p className="sheet-es muted">Buscando traducción…</p>
      ) : selection.es ? (
        <p className="sheet-es">{selection.es}</p>
      ) : (
        <p className="sheet-es muted">
          Sin traducción.{" "}
          <a
            className="link"
            href={`https://www.wordreference.com/es/translation.asp?tranword=${encodeURIComponent(selection.word)}`}
            target="_blank"
            rel="noreferrer"
          >
            Buscar en WordReference ↗
          </a>
        </p>
      )}
      {selection.note && <p className="muted small">{selection.note}</p>}
      {selection.falseFriend && (
        <p className="ff-box">
          Falso amigo: significa «{selection.falseFriend.means}», no {selection.falseFriend.notMeans}.
        </p>
      )}
      {selection.context && <p className="context">“{selection.context}”</p>}
    </aside>
  );
}
