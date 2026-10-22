import { ALBUMS, getAlbum } from "@readup/content";
import { notFound } from "next/navigation";
import { SongReader } from "@/components/SongReader";

export function generateStaticParams() {
  return ALBUMS.flatMap((a) => a.songs.map((s) => ({ album: a.id, n: String(s.n) })));
}

export async function generateMetadata({ params }: { params: Promise<{ album: string; n: string }> }) {
  const { album, n } = await params;
  return { title: `${getAlbum(album)?.songs.find((s) => s.n === Number(n))?.title ?? "Canción"} · ReadUp` };
}

export default async function SongPage({ params }: { params: Promise<{ album: string; n: string }> }) {
  const { album: id, n } = await params;
  const album = getAlbum(id);
  const song = album?.songs.find((s) => s.n === Number(n));
  if (!album || !song) notFound();
  return <SongReader album={{ id: album.id, artist: album.artist, title: album.title }} song={song} />;
}
