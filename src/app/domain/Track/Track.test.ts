import { Track } from "./Track";
import { describe, expect, it } from "vitest";
import { Duration } from "./value-objects/Duration/Duration";
import { Title } from "./value-objects/Title/Title";
import { TrackId } from "./value-objects/TrackId/TrackId";
import { Rank } from "./value-objects/Rank/Rank";
import { PreviewUrl } from "./value-objects/PreviewUrl/PreviewUrl";
import { ArtistId } from "../Artist/value-objects/ArtistId/ArtistId";

describe("Track", () => {
  it("should create a valid Track", () => {
    const track: Track = {
      id: new TrackId("123"),
      title: new Title("Song Title"),
      artistId: new ArtistId("123"),
      duration: new Duration(120),
      previewUrl: new PreviewUrl("https://www.youtube.com/watch?v=123"),
      explicit: false,
      rank: new Rank(1),
    };
    expect(track).toBeDefined();
    expect(track.id.getValue()).toBe("123");
    expect(track.title.getValue()).toBe("Song Title");
    expect(track.artistId.getValue()).toBe("123");
    expect(track.duration.getValue()).toBe(120);
    expect(track.previewUrl?.getValue()).toBe(
      "https://www.youtube.com/watch?v=123",
    );
    expect(track.explicit).toBe(false);
    expect(track.rank?.getValue()).toBe(1);
  });
});
