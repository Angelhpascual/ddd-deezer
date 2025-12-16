import { describe, expect, it } from "vitest";
import { PreviewUrl } from "./PreviewUrl";

describe("PreviewUrl", () => {
  it("should create a valid PreviewUrl", () => {
    const previewUrl = new PreviewUrl("https://preview.com");
    expect(previewUrl).toBeDefined();
    expect(previewUrl.getValue()).toBe("https://preview.com");
  });

  it("should throw an error if the PreviewUrl is not a valid URL", () => {
    expect(() => new PreviewUrl("not a valid URL")).toThrow(
      "Invalid URL format for PreviewUrl",
    );
  });
});
