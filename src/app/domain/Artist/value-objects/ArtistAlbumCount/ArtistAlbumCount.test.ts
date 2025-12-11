import { describe, expect, it } from "vitest";
import { ArtistAlbumCount } from "./ArtistAlbumCount";

describe("ArtistAlbumCount", () => {
  it("should create a valid ArtistAlbumCount", () => {
    const artistAlbumCount = ArtistAlbumCount(100);
    expect(artistAlbumCount).toBeDefined();
    expect(artistAlbumCount.value).toBe(100);
  });
  it("should throw an error if the ArtistAlbumCount is negative", () => {
    expect(() => ArtistAlbumCount(-1)).toThrow("ArtistAlbumCount cannot be negative");
  });
});