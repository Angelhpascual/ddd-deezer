export class ArtistName {
  readonly value: string;

  constructor(value: string) {
    if (!value || value.trim() === "" || value.length > 200) {
      throw new Error("ArtistName cannot be empty");
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
