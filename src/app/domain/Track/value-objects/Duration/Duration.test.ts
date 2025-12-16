import { describe, expect, it } from "vitest";
import { Duration } from "./Duration";

describe("Duration", () => {
  it("should create a valid Duration", () => {
    const duration = new Duration(120);
    expect(duration).toBeDefined();
    expect(duration.value).toBe(120);
  });

  it("should throw an error if the Duration is negative", () => {
    expect(() => new Duration(-1)).toThrow("Duration cannot be negative");
  });
  it("should throw an error if the number is not finite", () => {
    expect(() => new Duration(NaN)).toThrow("Duration must be a finite number");
  });
});
