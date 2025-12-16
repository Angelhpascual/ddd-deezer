export class ArtistName {
  readonly value: string;

  constructor(value: string) {
    if (!value || value.trim() === "" || value.length > 200) {
      throw new Error("ArtistName cannot be empty");
    }
    this.value = value;
  }

  static fromString(value: string): ArtistName {
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error("ArtistName cannot be empty");
    }
    return new ArtistName(trimmed);
  }
  getValue(): string {
    return this.value;
  }
  toString(): string {
    return this.value;
  }
}
