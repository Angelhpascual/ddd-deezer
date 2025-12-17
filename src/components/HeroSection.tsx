import { Artist } from "@/app/domain/Artist/Artist";
import { Track } from "@/app/domain/Track/Track";
import { FormEvent } from "react";

type HeroSectionProps = {
  onSearchTracks: (query: string) => void;
  highlightTrack: Track;
  trendingTrackLoading: boolean;
  trendingArtistLoading: boolean;
  highlightArtist?: Artist | null;
};

export const HeroSection = ({
  onSearchTracks,
  highlightTrack,
  trendingTrackLoading,
  trendingArtistLoading,
  highlightArtist,
}: HeroSectionProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = String(new FormData(event.currentTarget).get("query") || "");
    if (!term.trim()) return;
    onSearchTracks(term);
  };

  return (
    <section className="rounded-3xl bg-linear-to-br from-indigo-500 via-purple-500 to-fuchsia-500 p-8 text-white shadow-[0_10px_60px_-15px_rgba(139,92,246,0.7)]">
      <header className="flex flex-wrap items-center gap-6">
        <div>
          <p className="text-xs tracking-[0.4em] text-white/70 uppercase">
            Tendencias
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
            Descubre el pulso de la música
          </h1>
          <p className="mt-2 text-base text-white/80">
            Busca por artista o canción y explora los hits del momento.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="ml-auto flex max-w-md flex-1 items-center rounded-full bg-white/15 px-4 py-2 backdrop-blur"
        >
          <input
            name="query"
            placeholder="Buscar artista o canción"
            className="w-full bg-transparent text-sm placeholder-white/50 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-indigo-600"
          >
            Buscar
          </button>
        </form>
      </header>

      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        {["Top Global", "Fresh Releases", "Mood Booster"].map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-white/20 px-4 py-1 text-white/90"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl bg-white/15 p-4 backdrop-blur">
          <p className="text-xs text-white/60 uppercase">Top Chart</p>
          {trendingTrackLoading ? (
            <div className="mt-4 h-6 w-32 animate-pulse rounded bg-white/30" />
          ) : highlightTrack ? (
            <>
              <h3 className="mt-2 text-xl font-semibold">
                {highlightTrack.title.toString()}
              </h3>
              <p className="text-sm text-white/70">
                {highlightTrack.artistId.toString()}
              </p>
              {highlightTrack.previewUrl ? (
                <div className="mt-4 rounded-2xl bg-white/20 p-3 text-white">
                  <p className="text-xs text-white/70 uppercase">
                    Escuchar avance
                  </p>
                  <audio
                    controls
                    src={highlightTrack.previewUrl.toString()}
                    className="mt-2 w-full"
                  />
                </div>
              ) : (
                <p className="mt-4 text-sm text-white/70">
                  No hay preview disponible.
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-white/70">No hay datos disponibles</p>
          )}
        </article>
        <article className="flex flex-col items-center justify-center rounded-2xl bg-white/15 p-4 backdrop-blur">
          <p className="mb-4 text-xs text-white/60 uppercase">
            Trending Artist
          </p>
          {trendingArtistLoading ? (
            <div className="mt-4 h-6 w-32 animate-pulse rounded bg-white/30" />
          ) : highlightArtist ? (
            <>
              <img
                className="rounded-full"
                src={highlightArtist.pictureUrl?.toString() || ""}
                alt=""
              />
              <h3 className="mt-2 text-xl font-semibold">
                {highlightArtist.name.toString()}
              </h3>
              <p className="text-sm text-white/70">
                {highlightArtist.nbFan
                  ? `${highlightArtist.nbFan.getValue().toLocaleString()} fans`
                  : "Fans desconocidos"}
              </p>
            </>
          ) : (
            <p className="text-sm text-white/70">No hay artistas disponibles</p>
          )}
        </article>
      </div>
    </section>
  );
};
