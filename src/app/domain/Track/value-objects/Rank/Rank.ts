export class Rank {
  readonly value: number;

  constructor(value: number) {
    if (value < 1) {
      throw new Error("Rank must be at least 1");
    }
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
