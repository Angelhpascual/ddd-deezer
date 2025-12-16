import { describe, expect, it } from "vitest";
import { Artist } from "./Artist";
import { ArtistId } from "./value-objects/ArtistId/ArtistId";
import { ArtistName } from "./value-objects/ArtistName/ArtistName";
import { ArtistPicture } from "./value-objects/ArtistPicture/ArtistPicture";
import { ArtistFanCount } from "./value-objects/ArtistFanCount/ArtistFanCount";
import { ArtistAlbumCount } from "./value-objects/ArtistAlbumCount/ArtistAlbumCount";

describe("Artist", () => {
  it("should create a valid Artist", () => {
    const artist: Artist = {
      id: new ArtistId("123"),
      name: new ArtistName("John Doe"),
      pictureUrl: new ArtistPicture("https://example.com/picture.jpg"),
      nbFan: new ArtistFanCount(100),
      nbAlbum: new ArtistAlbumCount(10),
    };
    expect(artist).toBeDefined();
    expect(artist.id.getValue()).toBe("123");
    expect(artist.name.getValue()).toBe("John Doe");
    expect(artist.pictureUrl?.getValue()).toBe(
      "https://example.com/picture.jpg",
    );
    expect(artist.nbFan?.getValue()).toBe(100);
    expect(artist.nbAlbum?.getValue()).toBe(10);
  });
});
