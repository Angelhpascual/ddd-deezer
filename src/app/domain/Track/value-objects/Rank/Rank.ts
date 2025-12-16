export class Rank {
  readonly value: number;

  constructor(value: number) {
    if (!Number.isFinite(value)) {
      throw new Error("Rank must be a finite number");
    }
    if (value < 0) {
      throw new Error("Rank cannot be negative");
    }
    this.value = value;
  }

  static fromNumber(value: number): Rank {
    if (!Number.isFinite(value) || value < 0) {
      throw new Error("Rank must be a non-negative finite number");
    }
    return new Rank(value);
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
