import { describe, expect, it } from "vitest";
import { ArtistFanCount } from "./ArtistFanCount";

describe("ArtistFanCount", () => {
  it("should create a valid ArtistFanCount", () => {
    const artistFanCount = ArtistFanCount(100);
    expect(artistFanCount).toBeDefined();
    expect(artistFanCount.value).toBe(100);
  });
  it("should throw an error if the ArtistFanCount is negative", () => {
    expect(() => ArtistFanCount(-1)).toThrow("ArtistFanCount cannot be negative");
  });
});