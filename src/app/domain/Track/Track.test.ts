import { Track } from './Track';
import { describe, expect, it } from "vitest";
import { Duration } from "./value-objects/Duration/Duration";
import { Title } from "./value-objects/Title/Title";
import { TrackId } from "./value-objects/TrackId/TrackId";
import { Rank } from './value-objects/Rank/Rank';
import { PreviewUrl } from './value-objects/PreviewUrl/PreviewUrl';

describe("Track", () => {
  it("should create a valid Track", () => {
    const track: Track = {
      id: TrackId("123"),
      title: Title("Song Title"),
      artistId: "123",
      duration: Duration(120),
      previewUrl: PreviewUrl("https://www.youtube.com/watch?v=123"),
      explicit: false,
      rank: Rank(1),
    };
    expect(track).toBeDefined();
    expect(track.id.value).toBe("123");
    expect(track.title.value).toBe("Song Title");
    expect(track.artistId).toBe("123");
    expect(track.duration.value).toBe(120);
    expect(track.previewUrl?.value).toBe("https://www.youtube.com/watch?v=123");
    expect(track.explicit).toBe(false);
    expect(track.rank?.value).toBe(1);
  });
});