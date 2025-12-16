import { describe, expect, it } from "vitest";
import { ArtistId } from "./ArtistId";

describe("ArtistId", () => {
  it("should create a valid ArtistId", () => {
    const artistId = new ArtistId("123");
    expect(artistId).toBeDefined();
    expect(artistId.getValue()).toBe("123");
  });
  it("should throw an error if the ArtistId is empty", () => {
    expect(() => new ArtistId("")).toThrow("ArtistId cannot be empty");
  });
});
