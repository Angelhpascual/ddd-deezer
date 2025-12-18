import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "./App";
import { Track } from "@/app/domain/Track/Track";
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import { Title } from "@/app/domain/Track/value-objects/Title/Title";
import { Duration } from "@/app/domain/Track/value-objects/Duration/Duration";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { useSearchTracks } from "./hooks/useSearchTracks";
import { useTrendingArtist } from "./hooks/useTrendingArtist";
import { useTrendingTracks } from "./hooks/useTrendingTracks";

// 1. Mockeamos los hooks correctamente
// IMPORTANTE: Devuelven un OBJETO, por eso los paréntesis ({ ... })
vi.mock("@/hooks/useTrendingTracks", () => ({
  useTrendingTracks: vi.fn(),
}));

vi.mock("@/hooks/useTrendingArtist", () => ({
  useTrendingArtist: vi.fn(),
}));

vi.mock("@/hooks/useSearchTracks", () => ({
  useSearchTracks: vi.fn(),
}));

const createMockTrack = (id: string, title: string): Track => ({
  id: new TrackId(id),
  title: new Title(title),
  artistId: new ArtistId("1"),
  duration: new Duration(180),
  explicit: false,
  coverUrl: "http://example.com/cover.jpg",
});

describe("App Integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  (useTrendingArtist as any).mockReturnValue({
    data: null,
    isLoading: false,
  });

  (useSearchTracks as any).mockReturnValue({
    mutate: vi.fn(),
    data: null,
    isPending: false,
    error: null,
  });

  it("renders the hero section and defaults to 'Top Globals'", () => {
    (useTrendingTracks as any).mockReturnValue({
      data: [createMockTrack("1", "Top Globals")],
      isLoading: false,
    });

    render(<App />);

    expect(screen.getByText(/Descubre el pulso/i)).toBeDefined();
    expect(screen.getByText("Top Globals")).toBeDefined();
  });
});
