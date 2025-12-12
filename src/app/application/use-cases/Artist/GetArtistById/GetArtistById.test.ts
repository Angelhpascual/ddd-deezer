import { Artist } from "@/app/domain/Artist/Artist";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { ArtistRepository } from "@/app/domain/ArtistRepository";
import { GetArtistById } from "./GetArtistById";
import { describe, expect, it } from "vitest";
import { ArtistAlbumCount } from "@/app/domain/Artist/value-objects/ArtistAlbumCount/ArtistAlbumCount";
import { ArtistName } from "@/app/domain/Artist/value-objects/ArtistName/ArtistName";
import { ArtistFanCount } from "@/app/domain/Artist/value-objects/ArtistFanCount/ArtistFanCount";
import { ArtistPicture } from "@/app/domain/Artist/value-objects/ArtistPicture/ArtistPicture";

export class GetArtistByIdTest implements ArtistRepository{
  async getById(id: ArtistId): Promise<Artist | null> {
    return {
      id,
      name: ArtistName("John Doe"),
      pictureUrl: ArtistPicture("https://example.com/picture.jpg"),
      nbFan: ArtistFanCount(100),
      nbAlbum: ArtistAlbumCount(10),
    }
  }
  async search(): Promise<Artist[]> {
    return [];
  }
}

describe("GetArtistById", () => {
  it("should get an artist by id", async () => {
    const artistRepository = new GetArtistByIdTest();
    const getArtistById = new GetArtistById(artistRepository);
    const artist = await getArtistById.execute(ArtistId("123"));
    expect(artist).toBeDefined();
    expect(artist?.id.value).toStrictEqual("123");
  });
});