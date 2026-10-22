import { ALBUMS } from "@readup/content";
import Link from "next/link";

export const metadata = { title: "Música · ReadUp" };

export default function MusicPage() {
  return (
    <div className="narrow">
      <h1 className="title">Música</h1>
      <p className="subtitle">
        Discos completos en inglés: lee sus fichas, pega la letra de cada canción y estúdiala tocando las palabras.
      </p>
      <div className="list">
        {ALBUMS.map((a) => (
          <Link key={a.id} href={`/musica/${a.id}`} className="row-link">
            <div className="row-main">
              <div className="row-title">{a.title}</div>
              <div className="row-sub">{a.artist} · {a.year}</div>
            </div>
            <div className="row-meta">
              <span className="muted small">{a.songs.length} canciones</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
