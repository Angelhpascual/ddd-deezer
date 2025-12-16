import { FormEvent } from "react";

type HeroSectionProps = {
  onSearchTracks: (query: string) => void;
};

export const HeroSection = ({ onSearchTracks }: HeroSectionProps) => {
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
          <h3 className="mt-2 text-xl font-semibold">Midnight Echoes</h3>
          <p className="text-sm text-white/70">Nova Pulse • 2.3M plays</p>
        </article>
        <article className="rounded-2xl bg-white/15 p-4 backdrop-blur">
          <p className="text-xs text-white/60 uppercase">Trending Artist</p>
          <h3 className="mt-2 text-xl font-semibold">Luna Coast</h3>
          <p className="text-sm text-white/70">+320K fans esta semana</p>
        </article>
      </div>
    </section>
  );
};
