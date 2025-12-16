export class ArtistPicture {
  readonly value: string;

  constructor(value: string) {
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error("ArtistPicture cannot be empty");
    }
    if (!trimmed.startsWith("http")) {
      throw new Error("ArtistPicture must be a valid URL");
    }
    this.value = trimmed;
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }
}
