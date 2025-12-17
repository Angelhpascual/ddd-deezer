import { HeroSection } from "./components/HeroSection";
import { useSearchTracks } from "./hooks/useSearchTracks";
import { useTrendingArtist } from "./hooks/useTrendingArtist";
import { useTrendingTracks } from "./hooks/useTrendingTracks";

function App() {
  const {
    mutate: searchTracks,
    data: trackResults,
    isPending,
    error,
  } = useSearchTracks();

  const { data: trendingTracks = [], isLoading: trendingTrackLoading } =
    useTrendingTracks();

  const { data: trendingArtists, isLoading: trendingArtistsLoading } =
    useTrendingArtist();

  const highlightArtist = trendingArtists;
  const top5Tracks = trendingTracks.slice(0, 5);
  console.log({ searchTracks });
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-16">
        <HeroSection
          onSearchTracks={(term) => searchTracks(term)}
          highlightTrack={trendingTracks[0]}
          highlightArtist={highlightArtist ?? null}
          trendingTrackLoading={trendingTrackLoading}
          trendingArtistLoading={trendingArtistsLoading}
          top5Tracks={top5Tracks}
        />

        {isPending && <p className="mt-8 text-slate-400">Buscando...</p>}
        {error && <p className="mt-8 text-rose-400">Error: {error.message}</p>}
        {trackResults && (
          <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trackResults.map((track) => (
              <article
                key={track.id.toString()}
                className="rounded-2xl bg-slate-900/60 p-4"
              >
                <p className="text-xs text-slate-400 uppercase">
                  Rank {track.rank?.value ?? "-"}
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  {track.title.toString()}
                </h3>
                {track.coverUrl ? (
                  <img
                    src={track.coverUrl}
                    alt={track.title.toString()}
                    className="mt-3 h-40 w-full rounded-lg object-contain"
                  />
                ) : (
                  <div className="mt-3 h-40 w-full rounded-lg bg-slate-700" />
                )}
                <p className="mt-3 text-sm text-slate-400">
                  Duration: {track.duration.format()}
                </p>
                {track.previewUrl && (
                  <audio
                    controls
                    src={track.previewUrl.toString()}
                    className="mt-3 w-full"
                  />
                )}
              </article>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
