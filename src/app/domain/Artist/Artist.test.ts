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
      id: ArtistId("123"),
      name: ArtistName("John Doe"),
      pictureUrl: ArtistPicture("https://example.com/picture.jpg"),
      nbFan: ArtistFanCount(100),
      nbAlbum: ArtistAlbumCount(10),
    };
    expect(artist).toBeDefined();
    expect(artist.id.value).toBe("123");
    expect(artist.name.value).toBe("John Doe");
    expect(artist.pictureUrl?.value).toBe("https://example.com/picture.jpg");
    expect(artist.nbFan?.value).toBe(100);
    expect(artist.nbAlbum?.value).toBe(10);
  });
}); 