import { describe, expect, it } from "vitest";
import { ArtistAlbumCount } from "./ArtistAlbumCount";

describe("ArtistAlbumCount", () => {
  it("should create a valid ArtistAlbumCount", () => {
    const artistAlbumCount = new ArtistAlbumCount(100);
    expect(artistAlbumCount).toBeDefined();
    expect(artistAlbumCount.value).toBe(100);
  });
  it("should throw an error if the ArtistAlbumCount is negative", () => {
    expect(() => new ArtistAlbumCount(-1)).toThrow(
      "ArtistAlbumCount cannot be negative",
    );
  });
  it("should throw an error if the ArtistAlbumCount is not a finite number", () => {
    expect(() => new ArtistAlbumCount(NaN)).toThrow(
      "ArtistAlbumCount must be a finite number",
    );
  });
});
