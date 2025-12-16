import { describe, expect, it } from "vitest";
import { ArtistPicture } from "./ArtistPicture";

describe("ArtistPicture", () => {
  it("should create a valid ArtistPicture", () => {
    const artistPicture = new ArtistPicture("https://example.com/picture.jpg");
    expect(artistPicture).toBeDefined();
    expect(artistPicture.getValue()).toBe("https://example.com/picture.jpg");
  });
  it("should throw an error if the ArtistPicture is empty", () => {
    expect(() => new ArtistPicture("")).toThrow(
      "ArtistPicture cannot be empty",
    );
  });
  it("should throw an error if the ArtistPicture is not a valid URL", () => {
    expect(() => new ArtistPicture("not a valid URL")).toThrow(
      "ArtistPicture must be a valid URL",
    );
  });
});
