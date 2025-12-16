import { HeroSection } from "./components/HeroSection";
import { useSearchTracks } from "./hooks/useSearchTracks";

function App() {
  const {
    mutate: searchTracks,
    data: trackResults,
    isPending,
    error,
  } = useSearchTracks();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-16">
        <HeroSection onSearchTracks={(term) => searchTracks(term)} />

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
                <p className="text-sm text-slate-400">
                  {track.artistId.toString()}
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  {track.duration.value}s
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
