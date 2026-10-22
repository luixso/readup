"use client";

import type { Song } from "@readup/content";
import Link from "next/link";
import { songKey, useLyrics } from "@/lib/lyrics";
import { useProgress } from "@/lib/progress";

/** Lista de pistas: marca las que ya tienen letra pegada y las estudiadas. */
export function AlbumTracks({ albumId, songs }: { albumId: string; songs: Song[] }) {
  const lyrics = useLyrics();
  const progress = useProgress();
  return (
    <div className="list">
      {songs.map((s) => {
        const key = songKey(albumId, s.n);
        const studied = !!progress?.docs[`song:${key}`];
        return (
          <Link key={s.n} href={`/musica/${albumId}/${s.n}`} className="row-link">
            <div className="row-main">
              <div className="row-title">
                <span className="muted track-n">{s.n}</span>
                {s.title}
                {studied && <span className="check" aria-label="Estudiada">✓</span>}
              </div>
              <div className="row-sub">{s.titleEs}</div>
            </div>
            <div className="row-meta">
              <span className="muted small">
                {s.instrumental ? "Instrumental" : lyrics?.[key]?.en ? "Letra guardada" : "Pegar letra"}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
