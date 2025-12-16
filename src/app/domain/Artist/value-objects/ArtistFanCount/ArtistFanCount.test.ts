import { describe, expect, it } from "vitest";
import { ArtistFanCount } from "./ArtistFanCount";

describe("ArtistFanCount", () => {
  it("should create a valid ArtistFanCount", () => {
    const artistFanCount = ArtistFanCount.fromNumber(100);
    expect(artistFanCount).toBeDefined();
    expect(artistFanCount.getValue()).toBe(100);
  });
  it("should throw an error if the ArtistFanCount is negative", () => {
    expect(() => ArtistFanCount.fromNumber(-1)).toThrow(
      "ArtistFanCount must be a non-negative finite number",
    );
  });
  it("should throw an error if the ArtistFanCount is not a finite number", () => {
    expect(() => ArtistFanCount.fromNumber(NaN)).toThrow(
      "ArtistFanCount must be a non-negative finite number",
    );
  });
});
