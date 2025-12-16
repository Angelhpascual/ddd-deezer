export class TrackId {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("TrackId cannot be empty");
    }
    this.value = value;
  }

  static fromString(value: string): TrackId {
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error("TrackId cannot be empty");
    }
    return new TrackId(trimmed);
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }
}
