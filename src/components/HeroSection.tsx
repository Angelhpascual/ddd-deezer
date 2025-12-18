import { Artist } from "@/app/domain/Artist/Artist";
import { Track } from "@/app/domain/Track/Track";
import { TrendingCategory } from "@/app/domain/TrackRepository";
import { FormEvent } from "react";

type HeroSectionProps = {
  onSearchTracks: (query: string) => void;
  highlightTrack: Track;
  trendingTrackLoading: boolean;
  trendingArtistLoading: boolean;
  highlightArtist?: Artist | null;
  top5Tracks?: Track[];
  selectedCategory: TrendingCategory;
  onSelectedCategory: (category: TrendingCategory) => void;
};

export const HeroSection = ({
  onSearchTracks,
  selectedCategory,
  onSelectedCategory,
  trendingTrackLoading,
  trendingArtistLoading,
  highlightArtist,
  top5Tracks = [],
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
        {["Top Global", "Fresh Releases", "Mood Booster"].map((chip, index) => {
          // Mapeamos el índice del array visual a tus IDs del dominio
          const categoryIds: TrendingCategory[] = [
            "topGlobal",
            "freshReleases",
            "moodBooster",
          ];
          const currentId = categoryIds[index];
          const isSelected = selectedCategory === currentId;
          return (
            <button
              key={chip}
              type="button"
              onClick={() => onSelectedCategory(currentId)}
              className={`rounded-full px-4 py-1 transition-colors ${
                isSelected
                  ? "bg-white font-semibold text-indigo-600 shadow-sm" // Activo
                  : "bg-white/20 text-white/90 hover:bg-white/30" // Inactivo
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl bg-white/15 p-4 backdrop-blur">
          <p className="text-xs text-white/60 uppercase">Top Chart</p>
          {trendingTrackLoading ? (
            <div className="mt-4 space-y-3">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-10 animate-pulse rounded bg-white/20"
                />
              ))}
            </div>
          ) : top5Tracks.length ? (
            <ul className="mt-4 space-y-4">
              {top5Tracks.map((track, index) => (
                <li
                  key={track.id.toString()}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl font-bold text-white/40">
                    #{index + 1}
                  </span>
                  {track.coverUrl ? (
                    <img
                      src={track.coverUrl}
                      alt={track.title.toString()}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-lg bg-white/20" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-semibold">
                      {track.title.toString()}
                    </p>
                    <p className="text-xs text-white/70">
                      Rank:{track.rank?.toString()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-white/70">
              No hay datos disponibles
            </p>
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
