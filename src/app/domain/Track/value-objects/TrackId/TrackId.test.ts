import { describe, expect, it } from "vitest";
import { TrackId } from "./TrackId";

describe("TrackId", () => {
  it("should create a valid TrackId", () => {
    const trackId = TrackId("123");
    expect(trackId).toBeDefined();
    expect(trackId.value).toBe("123");
  });
  it("should throw an error if the TrackId is empty", () => {
    expect(() => TrackId("")).toThrow("TrackId cannot be empty");
  });
});