import { describe, expect, it } from "vitest";
import { PreviewUrl } from "./PreviewUrl";

describe("PreviewUrl", () => { 
  it("should create a valid PreviewUrl", () => {
    const previewUrl = PreviewUrl("https://preview.com");
    expect(previewUrl).toBeDefined();
    expect(previewUrl.value).toBe("https://preview.com");
  }); 

  it("should throw an error if the PreviewUrl is not a valid URL", () => {
    expect(() => PreviewUrl("not a valid URL")).toThrow("PreviewUrl must start with http");
  });
});