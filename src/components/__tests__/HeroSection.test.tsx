import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HeroSection } from "../HeroSection";
import { Track } from "@/app/domain/Track/Track";
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import { Title } from "@/app/domain/Track/value-objects/Title/Title";
import { Duration } from "@/app/domain/Track/value-objects/Duration/Duration";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { TrendingCategory } from "@/app/domain/TrackRepository";

const createMockTrack = (id: string, title: string): Track => {
  return {
    id: new TrackId(id),
    title: new Title(title),
    artistId: new ArtistId("1"),
    duration: new Duration(180),
    explicit: false,
    coverUrl: "http://example.com/cover.jpg",
  };
};

describe("HeroSection", () => {
  const mockTrack = createMockTrack("1", "Song 1");

  const defaultProps = {
    onSearchTracks: vi.fn(),
    highlightTrack: mockTrack,
    trendingTrackLoading: false,
    trendingArtistLoading: false,
    highlightArtist: null,
    top5Tracks: [],
    selectedCategory: "topGlobal" as TrendingCategory,
    onSelectedCategory: vi.fn(),
  };

  it("renders all category chips", () => {
    render(<HeroSection {...defaultProps} />);

    expect(screen.getByText("Top Global")).toBeDefined();
    expect(screen.getByText("Fresh Releases")).toBeDefined();
    expect(screen.getByText("Mood Booster")).toBeDefined();
  });

  it("calls onSelectedCategory with 'freshReleases' when clicking Fresh Releases", () => {
    render(<HeroSection {...defaultProps} />);

    const freshBtn = screen.getByText("Fresh Releases");
    fireEvent.click(freshBtn);

    expect(defaultProps.onSelectedCategory).toHaveBeenCalledWith(
      "freshReleases",
    );
  });

  it("calls onSelectedCategory with 'moodBooster' when clicking Mood Booster", () => {
    render(<HeroSection {...defaultProps} />);

    const moodBtn = screen.getByText("Mood Booster");
    fireEvent.click(moodBtn);

    expect(defaultProps.onSelectedCategory).toHaveBeenCalledWith("moodBooster");
  });

  it("shows active style for the selected category", () => {
    render(<HeroSection {...defaultProps} selectedCategory="moodBooster" />);

    const moodBtn = screen.getByText("Mood Booster");

    expect(moodBtn.className).toContain("bg-white");
    expect(moodBtn.className).toContain("text-indigo-600");

    const globalBtn = screen.getByText("Top Global");
    expect(globalBtn.className).not.toContain("text-indigo-600");
  });

  it("renders the highlight track in the top chart", () => {
    render(<HeroSection {...defaultProps} top5Tracks={[mockTrack]} />);

    expect(screen.getByText("Song 1")).toBeDefined();
  });
});
