import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { Track } from "@/app/domain/Track/Track";
import { Duration } from "@/app/domain/Track/value-objects/Duration/Duration";
import { PreviewUrl } from "@/app/domain/Track/value-objects/PreviewUrl/PreviewUrl";
import { Rank } from "@/app/domain/Track/value-objects/Rank/Rank";
import { Title } from "@/app/domain/Track/value-objects/Title/Title";
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import { TrackRepository } from "@/app/domain/TrackRepository";
import { describe, expect, it } from "vitest";
import { SearchTrack } from "./SearchTrack";

class TrackRepositoryMock implements TrackRepository {
  async getById(): Promise<Track | null> {
    return null;
  }
  async search(): Promise<Track[]> {
    return [
      {
        id: new TrackId("123"),
        title: new Title("Song Title"),
        artistId: new ArtistId("123"),
        duration: new Duration(120),
        previewUrl: new PreviewUrl("https://www.youtube.com/watch?v=123"),
        explicit: false,
        rank: new Rank(1),
      },
    ];
  }
  async searchByArtistId(): Promise<Track[]> {
    return [];
  }
}

describe("SearchTrack", () => {
  it("should search for tracks", async () => {
    const trackRepository = new TrackRepositoryMock();
    const searchTrack = new SearchTrack(trackRepository);
    const tracks = await searchTrack.execute("Song Title");
    expect(tracks).toBeDefined();
    expect(tracks?.length).toBe(1);
  });
});
