import { describe, expect, it } from "vitest";
import { Title } from "./Title";

describe("Title", () => {
  it("should create a valid Title", () => {
    const title = Title("Song Title");
    expect(title).toBeDefined();
    expect(title.value).toBe("Song Title");
  });

  it("should throw an error if the Title is empty", () => {
    expect(() => Title("")).toThrow("Title cannot be empty");
  });

  it("should throw an error if the Title is too long", () => {
    expect(() => Title("a".repeat(201))).toThrow("Title cannot be longer than 200 characters");
  });
  
}); 