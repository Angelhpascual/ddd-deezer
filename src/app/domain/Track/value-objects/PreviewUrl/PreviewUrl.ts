export class PreviewUrl {
  readonly value: string;

  constructor(value: string) {
    try {
      new URL(value);
    } catch {
      throw new Error("Invalid URL format for PreviewUrl");
    }
    this.value = value;
  }

  static fromString(value: string): PreviewUrl {
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error("PreviewUrl cannot be empty");
    }
    return new PreviewUrl(trimmed);
  }

  getValue(): string {
    return this.value;
  }
  toString(): string {
    return this.value;
  }
}
