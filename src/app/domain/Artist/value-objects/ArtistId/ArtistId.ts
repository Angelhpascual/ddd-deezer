export class ArtistId {
  readonly value: string;

  constructor(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("ArtistId cannot be empty");
    }
    this.value = value;
  }

  static fromString(value: string): ArtistId {
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error("ArtistId cannot be empty");
    }
    return new ArtistId(trimmed);
  }
  getValue(): string {
    return this.value;
  }
  toString(): string {
    return this.value;
  }
}
