import { describe, expect, it } from "vitest";
import { ArtistName } from "./ArtistName";

describe("ArtistName", () => {
  it("should create a valid ArtistName", () => {
    const artistName = ArtistName("John Doe");
    expect(artistName).toBeDefined();
    expect(artistName.value).toBe("John Doe");
  });
  it("should throw an error if the ArtistName is empty", () => {
    expect(() => ArtistName("")).toThrow("ArtistName cannot be empty");
  });
  it("should throw an error if the ArtistName is too long", () => {
    expect(() => ArtistName("a".repeat(201))).toThrow("ArtistName cannot be longer than 200 characters");
  });
});