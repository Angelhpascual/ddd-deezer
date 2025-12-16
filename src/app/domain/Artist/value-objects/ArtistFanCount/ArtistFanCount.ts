export class ArtistFanCount {
  private readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  static fromNumber(value: number): ArtistFanCount {
    if (!Number.isFinite(value) || value < 0) {
      throw new Error("ArtistFanCount must be a non-negative finite number");
    }
    if (value < 0) {
      throw new Error("ArtistFanCount cannot be negative");
    }
    return new ArtistFanCount(value);
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
