import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { Track } from "@/app/domain/Track/Track";
import { Duration } from "@/app/domain/Track/value-objects/Duration/Duration";
import { Rank } from "@/app/domain/Track/value-objects/Rank/Rank";
import { Title } from "@/app/domain/Track/value-objects/Title/Title";
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import { TrackRepository } from "@/app/domain/TrackRepository";
import { SearchByArtistId } from "./SearchByArtistId";
import { describe, expect, it } from "vitest";
import { PreviewUrl } from "@/app/domain/Track/value-objects/PreviewUrl/PreviewUrl";



class TrackRepositoryMock implements TrackRepository { 
  async getById(): Promise<Track | null> {
    return null;
  }
 async search(): Promise<Track[]> {
    return [];
  }
  async searchByArtistId(): Promise<Track[]> {
    return [
      {
        id: TrackId("123"),
        title: Title("Song Title"),
        artistId: ArtistId("123"),
        duration: Duration(120),
        previewUrl: PreviewUrl("(https://example.com/preview.mp3"),
        explicit: false,
        rank: Rank(1),
      }
    ];
  }
}

describe("SearchByArtistId", () => {  
  it("should search for tracks by artist id", async () => {
    const trackRepository = new TrackRepositoryMock();
    const searchByArtistId = new SearchByArtistId(trackRepository);
    const tracks = await searchByArtistId.execute(ArtistId("123"));
    expect(tracks).toBeDefined();
    expect(tracks?.length).toBe(1);
  });
});
