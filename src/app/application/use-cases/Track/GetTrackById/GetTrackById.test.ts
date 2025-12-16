import { describe, expect, it } from "vitest";
import { GetTrackById } from "./GetTrackById";
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import { TrackRepository } from "@/app/domain/TrackRepository";
import { Title } from "@/app/domain/Track/value-objects/Title/Title";
import { Rank } from "@/app/domain/Track/value-objects/Rank/Rank";
import { Duration } from "@/app/domain/Track/value-objects/Duration/Duration";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { PreviewUrl } from "@/app/domain/Track/value-objects/PreviewUrl/PreviewUrl";
import { Track } from "@/app/domain/Track/Track";

class TrackRepositoryMock implements TrackRepository {
  async getById(id: TrackId): Promise<Track | null> {
    return {
      id,
      title: new Title("Song Title"),
      artistId: new ArtistId("123"),
      duration: new Duration(120),
      previewUrl: new PreviewUrl("https://www.youtube.com/watch?v=123"),
      explicit: false,
      rank: new Rank(1),
    };
  }
  async search(): Promise<Track[]> {
    return [];
  }
  async searchByArtistId(): Promise<Track[]> {
    return [];
  }
}

describe("GetTrackById", () => {
  it("should get a track by id", async () => {
    const trackRepository = new TrackRepositoryMock();

    const getTrackById = new GetTrackById(trackRepository);

    const track = await getTrackById.execute(new TrackId("123"));

    expect(track).toBeDefined();
    expect(track?.id.getValue()).toBe("123");
  });
});
