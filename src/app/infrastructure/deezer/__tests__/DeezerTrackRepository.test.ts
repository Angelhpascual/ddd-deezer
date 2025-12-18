import { beforeEach, describe, expect, it, vi } from "vitest";
import { DeezerTrackRepository } from "../DeezerTrackRepository";
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";

const BASE_URL = "/deezer";

describe("DeezerTrackRepository", () => {
  let repository = new DeezerTrackRepository();

  beforeEach(() => {
    repository = new DeezerTrackRepository();
    vi.clearAllMocks();
  });

  describe("getById", () => {
    it("should return a track when fetch is successful", async () => {
      const trackId = new TrackId("456");
      const mockData = {
        id: 456,
        title: "Test Track",
        duration: 240,
        artist: {
          id: 123,
          name: "Test Artist",
        },
        album: {
          id: 789,
          title: "Test Album",
          cover: "http://example.com/cover.jpg",
        },
      };
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockData,
      });
      const result = await repository.getById(trackId);
      expect(result).not.toBeNull();
      expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/track/456`);
    });
    it("should return null when fetch fails", async () => {
      const trackId = new TrackId("456");
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      });
      const result = await repository.getById(trackId);
      console.log(result);
      expect(result).toBeNull();

      expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/track/456`);
    });

    describe("search", () => {
      it("should return a list of tracks when fetch is successful", async () => {
        const query = "test";
        const mockData = [
          {
            id: 456,
            title: "Test Track",
            duration: 240,
            artist: {
              id: 123,
              name: "Test Artist",
            },
            album: {
              id: 789,
              title: "Test Album",
              cover: "http://example.com/cover.jpg",
            },
          },
        ];
        global.fetch = vi.fn().mockResolvedValue({
          ok: true,
          json: async () => mockData,
        });
        const result = await repository.search(query);
        expect(result).not.toBeNull();
        expect(global.fetch).toHaveBeenCalledWith(
          `${BASE_URL}/search/track?q=test`,
        );
      });
    });

    describe("searchByArtistId", () => {
      it("should return a list of tracks when fetch is successful", async () => {
        const artistId = new ArtistId("123");
        const mockData = [
          {
            id: 456,
            title: "Test Track",
            duration: 240,
            artist: {
              id: 123,
              name: "Test Artist",
            },
            album: {
              id: 789,
              title: "Test Album",
              cover: "http://example.com/cover.jpg",
            },
          },
        ];
        global.fetch = vi.fn().mockResolvedValue({
          ok: true,
          json: async () => mockData,
        });
        const result = await repository.searchByArtistId(artistId);
        expect(result).not.toBeNull();
        expect(global.fetch).toHaveBeenCalledWith(
          `${BASE_URL}/artist/123/top?limit=50`,
        );
      });
    });

    describe("getTrendingTracks", () => {
      it("should return a list of tracks when fetch is successful", async () => {
        const category = "topGlobal";
        const mockData = [
          {
            id: 456,
            title: "Test Track",
            duration: 240,
            artist: {
              id: 123,
              name: "Test Artist",
            },
            album: {
              id: 789,
              title: "Test Album",
              cover: "http://example.com/cover.jpg",
            },
          },
        ];
        global.fetch = vi.fn().mockResolvedValue({
          ok: true,
          json: async () => mockData,
        });
        const result = await repository.getTrendingTracks(category);
        expect(result).not.toBeNull();
        expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/chart/0/tracks`);
      });

      it("should fetch chart 132 for freshReleases", async () => {
        global.fetch = vi.fn().mockResolvedValue({
          ok: true,
          json: async () => ({ data: [], total: 0 }),
        });

        await repository.getTrendingTracks("freshReleases");
        expect(global.fetch).toHaveBeenCalledWith(
          `${BASE_URL}/chart/132/tracks`,
        );
      });

      it("should fetch chart 113 for moodBooster", async () => {
        global.fetch = vi.fn().mockResolvedValue({
          ok: true,
          json: async () => ({ data: [], total: 0 }),
        });

        await repository.getTrendingTracks("moodBooster");
        expect(global.fetch).toHaveBeenCalledWith(
          `${BASE_URL}/chart/113/tracks`,
        );
      });

      it("should return empty array when fetch fails", async () => {
        global.fetch = vi.fn().mockResolvedValue({
          ok: false,
        });

        const result = await repository.getTrendingTracks("topGlobal");
        expect(result).toEqual([]);
      });
    });
  });
});
