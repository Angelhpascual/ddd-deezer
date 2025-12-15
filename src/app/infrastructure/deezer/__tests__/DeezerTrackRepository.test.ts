import { beforeEach, describe, expect, it, vi } from "vitest";
import { DeezerTrackRepository } from "../DeezerTrackRepository";
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";

describe("DeezerTrackRepository", () => {
  let repository = new DeezerTrackRepository();

  beforeEach(() => {
    repository = new DeezerTrackRepository();
    vi.clearAllMocks();
  });
  
  describe("getById", () => {
    it("should return a track when fetch is successful", async () => {
      const trackId = { value: "456" } as TrackId;
      const mockData = {
        id: 456,
        title: "Test Track",
        duration: 240,
        artist: {
          id: 123,
          name: "Test Artist"
        },
        album: {
          id: 789,
          title: "Test Album",
          cover: "http://example.com/cover.jpg"
        }
      }
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockData
      });
      const result = await repository.getById(trackId);
      expect(result).not.toBeNull();
      expect(global.fetch).toHaveBeenCalledWith("https://api.deezer.com/track/456");
    }      
    );
    it("should return null when fetch fails", async () => {
      const trackId = { value: "456" } as TrackId;
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      });
      const result = await repository.getById(trackId);    
      expect(result).toBeNull();
      expect(global.fetch).toHaveBeenCalledWith("https://api.deezer.com/track/456");
    });
  });
});
