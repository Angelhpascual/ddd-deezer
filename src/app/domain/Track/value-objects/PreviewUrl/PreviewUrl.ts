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

  getValue(): string {
    return this.value;
  }
  toString(): string {
    return this.value;
  }
}
