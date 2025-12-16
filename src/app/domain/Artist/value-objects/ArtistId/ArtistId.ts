export class ArtistId {
  readonly value: string;

  constructor(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("ArtistId cannot be empty");
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
