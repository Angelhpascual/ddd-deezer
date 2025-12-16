export class ArtistName {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.trim() === "") {
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
