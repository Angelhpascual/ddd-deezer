import { describe, expect, it } from "vitest";
import { Rank } from "./Rank";

describe("Rank", () => {
  it("should create a valid Rank", () => {
    const rank = Rank(1);
    expect(rank).toBeDefined();
    expect(rank.value).toBe(1);
  });

  it("should throw an error if the Rank is negative", () => {
    expect(() => Rank(-1)).toThrow("Rank cannot be negative");
  });
})