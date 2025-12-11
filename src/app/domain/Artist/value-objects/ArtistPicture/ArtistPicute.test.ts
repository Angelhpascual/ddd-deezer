import { describe, expect, it } from "vitest";
import { ArtistPicture } from "./ArtistPicture";

describe("ArtistPicture", () => {
  it("should create a valid ArtistPicture", () => {
    const artistPicture = ArtistPicture("https://example.com/picture.jpg");
    expect(artistPicture).toBeDefined();
    expect(artistPicture.value).toBe("https://example.com/picture.jpg");
  });
  it("should throw an error if the ArtistPicture is empty", () => {
    expect(() => ArtistPicture("")).toThrow("ArtistPicture cannot be empty");
  });
});