"use client";

import type { Album, Song } from "@readup/content";
import { findFalseFriend } from "@readup/content";
import { tokenize } from "@readup/core";
import { useMemo, useState } from "react";
import { AudioBar } from "@/components/AudioBar";
import { BackLink } from "@/components/BackLink";
import { MusicBadge } from "@/components/Badge";
import { type Unit, UnitText, sentenceAt, useSentences } from "@/components/Tappable";
import { WordSheet, type WordSelection } from "@/components/WordSheet";
import { addCard } from "@/lib/deck";
import { lookupOffline, translateOnline } from "@/lib/dictionary";
import { useCloseOnBack } from "@/lib/history";
import { type StoredLyrics, deleteLyrics, saveLyrics, songKey, useLyrics } from "@/lib/lyrics";
import { markDocRead, useProgress } from "@/lib/progress";
import { useSpeech } from "@/lib/speech";

interface Props {
  album: Pick<Album, "id" | "artist" | "title">;
  song: Song;
}

/** Enlaces para buscar la letra oficial y escuchar la canción fuera de la app. */
function searchLinks(album: Props["album"], song: Song) {
  const q = encodeURIComponent(`${album.artist} ${song.title}`);
  return {
    lyrics: `https://genius.com/search?q=${q}`,
    listen: `https://www.youtube.com/results?search_query=${q}`,
  };
}

export function SongReader({ album, song }: Props) {
  const key = songKey(album.id, song.n);
  const all = useLyrics();
  const [editing, setEditing] = useState(false);
  const stored = all?.[key];
  const hasLyrics = !!stored?.en;
  const links = searchLinks(album, song);

  return (
    <article className="narrow">
      <BackLink fallback={`/musica/${album.id}`} label={album.title} />
      <div className="badges">
        <MusicBadge label={album.artist} />
        <span className="muted small">Pista {song.n} · {album.title}</span>
      </div>
      <h1 className="title">{song.title}</h1>
      <p className="subtitle">{song.titleEs}</p>
      <p className="song-about">{song.aboutEs}</p>
      <p className="small">
        <a className="link" href={links.listen} target="_blank" rel="noreferrer">Escuchar ↗</a>
        {!song.instrumental && (
          <>
            {" · "}
            <a className="link" href={links.lyrics} target="_blank" rel="noreferrer">Buscar la letra ↗</a>
          </>
        )}
      </p>

      {song.instrumental ? (
        <p className="notice">Esta pista es instrumental: no tiene letra que estudiar. Escúchala con atención al ritmo.</p>
      ) : all === null ? null : editing || !hasLyrics ? (
        <LyricsEditor
          initial={stored}
          canCancel={hasLyrics}
          onSave={(en, es) => {
            saveLyrics(key, en, es);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <LyricsView
          id={key}
          title={song.title}
          lyrics={stored!}
          onEdit={() => setEditing(true)}
          onDelete={() => {
            if (confirm("¿Borrar la letra guardada de esta canción?")) deleteLyrics(key);
          }}
        />
      )}
    </article>
  );
}

function LyricsEditor({
  initial,
  canCancel,
  onSave,
  onCancel,
}: {
  initial?: StoredLyrics;
  canCancel: boolean;
  onSave: (en: string, es: string) => void;
  onCancel: () => void;
}) {
  const [en, setEn] = useState(initial?.en ?? "");
  const [es, setEs] = useState(initial?.es ?? "");
  return (
    <form
      className="lyrics-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (en.trim()) onSave(en, es);
      }}
    >
      <p className="notice">
        ReadUp no incluye las letras porque tienen <strong>derechos de autor</strong>. Busca la letra oficial, pégala aquí
        y se guardará solo para ti: en este dispositivo y, si has iniciado sesión, en tu cuenta.
      </p>
      <label className="label" htmlFor="lyrics-en">Letra en inglés</label>
      <textarea id="lyrics-en" rows={12} value={en} onChange={(e) => setEn(e.target.value)} placeholder="Pega aquí la letra, un verso por línea…" />
      <label className="label" htmlFor="lyrics-es">Traducción al español (opcional)</label>
      <textarea
        id="lyrics-es"
        rows={8}
        value={es}
        onChange={(e) => setEs(e.target.value)}
        placeholder="Tu traducción, con los mismos saltos de línea que la letra en inglés para que cada verso quede debajo del suyo."
      />
      <div className="row">
        <button className="btn primary" type="submit" disabled={!en.trim()}>Guardar letra</button>
        {canCancel && <button className="btn ghost" type="button" onClick={onCancel}>Cancelar</button>}
      </div>
    </form>
  );
}

function LyricsView({
  id,
  title,
  lyrics,
  onEdit,
  onDelete,
}: {
  id: string;
  title: string;
  lyrics: StoredLyrics;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const speech = useSpeech();
  const progress = useProgress();
  const [selected, setSelected] = useState<WordSelection | null>(null);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [showEs, setShowEs] = useState(true);
  const [studied, setStudied] = useState(false);
  const closeSheet = useCloseOnBack(selected !== null, () => setSelected(null));

  // Cada verso es una unidad tocable; las líneas vacías separan estrofas.
  const lines = useMemo(() => lyrics.en.split(/\r?\n/).map((l) => l.trim()), [lyrics.en]);
  const esLines = useMemo(() => lyrics.es.split(/\r?\n/).map((l) => l.trim()), [lyrics.es]);
  const { units, unitOfLine } = useMemo(() => {
    const units: Unit[] = [];
    const unitOfLine = lines.map((l) => (l ? units.push({ inlines: [{ t: l }] }) - 1 : -1));
    return { units, unitOfLine };
  }, [lines]);
  const sentences = useSentences(units);
  const words = useMemo(() => tokenize(lyrics.en).length, [lyrics.en]);
  const active = speech.activeIndex !== null ? sentences[speech.activeIndex] : undefined;
  const progressId = `song:${id}`;
  const alreadyStudied = studied || !!progress?.docs[progressId];
  const hasEs = lyrics.es.length > 0;

  async function onWord(surface: string, unit: number, offset: number) {
    const index = sentenceAt(sentences, unit, offset);
    if (speech.playing) {
      speech.playSentences(sentences.map((s) => s.text), Math.max(0, index));
      return;
    }
    const word = surface.toLowerCase().replace(/’/g, "'");
    const base = { word, term: word, falseFriend: findFalseFriend(word), context: units[unit]!.inlines[0]!.t };
    const offline = lookupOffline(word);
    if (offline) {
      setSelected({ ...base, es: offline.es, note: offline.note });
      return;
    }
    setSelected({ ...base, loading: true });
    const es = await translateOnline(word);
    setSelected((cur) => (cur?.word === word ? { ...base, es } : cur));
  }

  function save() {
    if (!selected) return;
    addCard({ term: selected.term, es: selected.es || "(añade tu traducción)", context: selected.context, textId: progressId });
    setSaved((prev) => new Set(prev).add(selected.word));
  }

  return (
    <>
      <AudioBar speech={speech} sentences={sentences.map((s) => s.text)} />
      <div className="row lyrics-tools">
        <span className="muted small">{words} palabras</span>
        {hasEs && (
          <button className="btn small" onClick={() => setShowEs((v) => !v)}>
            {showEs ? "Ocultar español" : "Mostrar español"}
          </button>
        )}
        <button className="btn small ghost" onClick={onEdit}>Editar</button>
        <button className="btn small ghost" onClick={onDelete}>Borrar</button>
      </div>

      <div className="prose lyrics">
        {lines.map((line, i) =>
          line ? (
            <div key={i} className="verse">
              <span>
                <UnitText
                  unit={units[unitOfLine[i]!]!}
                  index={unitOfLine[i]!}
                  active={active}
                  selected={selected?.word}
                  saved={saved}
                  onWord={onWord}
                />
              </span>
              {showEs && esLines[i] && <span className="verse-es">{esLines[i]}</span>}
            </div>
          ) : (
            <div key={i} className="stanza-gap" />
          ),
        )}
      </div>
      <p className="hint">Toca una palabra para ver su traducción y guardarla en tu repaso.</p>

      <div className="doc-end">
        <button
          className="btn primary"
          disabled={alreadyStudied}
          onClick={() => {
            markDocRead(progressId, title, words);
            setStudied(true);
          }}
        >
          {alreadyStudied ? "✓ Estudiada" : "Marcar como estudiada"}
        </button>
        <span className="muted small">Cuenta para tu racha diaria.</span>
      </div>

      {selected && (
        <WordSheet selection={selected} saved={saved.has(selected.word)} speech={speech} onSave={save} onClose={closeSheet} />
      )}
      <div style={{ height: selected ? 220 : 0 }} />
    </>
  );
}
