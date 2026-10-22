import { ALBUMS, getAlbum, getText } from "@readup/content";
import { notFound } from "next/navigation";
import { AlbumTracks } from "@/components/AlbumTracks";
import { BackLink } from "@/components/BackLink";
import { MusicBadge } from "@/components/Badge";
import { TextRow } from "@/components/Library";
import { summarize } from "@/lib/summaries";

export function generateStaticParams() {
  return ALBUMS.map((a) => ({ album: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ album: string }> }) {
  const { album } = await params;
  return { title: `${getAlbum(album)?.title ?? "Disco"} · ReadUp` };
}

export default async function AlbumPage({ params }: { params: Promise<{ album: string }> }) {
  const { album: id } = await params;
  const album = getAlbum(id);
  if (!album) notFound();
  const texts = album.textIds.map((t) => getText(t)!).map(summarize);

  return (
    <div className="narrow">
      <BackLink fallback="/musica" label="Música" />
      <div className="badges">
        <MusicBadge label={album.artist} />
        <span className="muted small">{album.year} · {album.songs.length} canciones</span>
      </div>
      <h1 className="title">{album.title}</h1>
      <p className="subtitle">{album.introEs}</p>

      <h2 className="label">Fichas del disco</h2>
      <div className="list">
        {texts.map((t) => <TextRow key={t.id} t={t} />)}
      </div>

      <h2 className="label">Canciones</h2>
      <AlbumTracks albumId={album.id} songs={album.songs} />
    </div>
  );
}
