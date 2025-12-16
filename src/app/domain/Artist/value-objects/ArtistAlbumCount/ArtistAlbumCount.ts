export class ArtistAlbumCount {
  readonly value: number;

  constructor(value: number) {
    if (!Number.isFinite(value)) {
      throw new Error("ArtistAlbumCount must be a finite number");
    }
    if (value < 0) {
      throw new Error("ArtistAlbumCount cannot be negative");
    }
    this.value = value;
  }

  static fromNumber(value: number): ArtistAlbumCount {
    if (!Number.isFinite(value) || value < 0) {
      throw new Error("ArtistAlbumCount must be a non-negative finite number");
    }
    return new ArtistAlbumCount(value);
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
