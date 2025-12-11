import { describe, expect, it } from "vitest";
import { ArtistId } from "./ArtistId";

describe("ArtistId", () => {
  it("should create a valid ArtistId", () => {
    const artistId = ArtistId("123");
    expect(artistId).toBeDefined();
    expect(artistId.value).toBe("123");
  });
  it("should throw an error if the ArtistId is empty", () => {
    expect(() => ArtistId("")).toThrow("ArtistId cannot be empty");
  });
});