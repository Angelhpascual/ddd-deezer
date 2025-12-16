import { Artist } from "@/app/domain/Artist/Artist";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { ArtistRepository } from "@/app/domain/ArtistRepository";
import { describe, expect, it } from "vitest";
import { SearchArtist } from "./SearchArtist";
import { ArtistName } from "@/app/domain/Artist/value-objects/ArtistName/ArtistName";
import { ArtistPicture } from "@/app/domain/Artist/value-objects/ArtistPicture/ArtistPicture";
import { ArtistFanCount } from "@/app/domain/Artist/value-objects/ArtistFanCount/ArtistFanCount";
import { ArtistAlbumCount } from "@/app/domain/Artist/value-objects/ArtistAlbumCount/ArtistAlbumCount";

export class SearchArtistTest implements ArtistRepository {
  async getById(): Promise<Artist | null> {
    return null;
  }
  async search(): Promise<Artist[]> {
    return [
      {
        id: new ArtistId("123"),
        name: new ArtistName("John Doe"),
        pictureUrl: new ArtistPicture("https://example.com/picture.jpg"),
        nbFan: ArtistFanCount.fromNumber(100),
        nbAlbum: ArtistAlbumCount.fromNumber(10),
      },
    ];
  }
}

describe("SearchArtist", () => {
  it("should search for artists", async () => {
    const artistRepository = new SearchArtistTest();
    const searchArtist = new SearchArtist(artistRepository);
    const artists: Artist[] = await searchArtist.execute("John Doe");
    expect(artists).toBeDefined();
    expect(artists?.length).toStrictEqual(1);
  });
});
