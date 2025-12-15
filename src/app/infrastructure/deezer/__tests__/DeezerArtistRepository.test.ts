import { beforeEach, describe,  expect, it, vi } from "vitest";
import { DeezerArtistRepository } from "../DeezerArtistRepository";
import  { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";

describe("DeezerArtistRepository", () => {
  let repository = new DeezerArtistRepository();

  beforeEach(() => {
    repository = new DeezerArtistRepository();
    vi.clearAllMocks();
  });

  describe("getById", () => {
    it("should return an artist when fetch is succesful", async () => {
      const artistId = {value: "123"} as ArtistId;
      const mockData = {
        id: 123,
        name: "Test Artist",
        picture: "http://example.com/picture.jpg",
        nb_fan: 1000,
        nb_album: 10
      }
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockData
      }
      );
      const result = await repository.getById(artistId);
      expect(result).not.toBeNull()
      expect(global.fetch).toHaveBeenCalledWith("https://api.deezer.com/artist/123")
    })  
    it("should return null when fetch fails", async () => {
      const artistId = {value: "123"} as ArtistId;
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      });
      const result = await repository.getById(artistId);    
      expect(result).toBeNull();
      expect(global.fetch).toHaveBeenCalledWith("https://api.deezer.com/artist/123")
    })
  });
});