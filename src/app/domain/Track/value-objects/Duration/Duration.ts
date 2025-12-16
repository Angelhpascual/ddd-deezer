export class Duration {
  readonly value: number;

  constructor(value: number) {
    if (!Number.isFinite(value)) {
      throw new Error("Duration must be a finite number");
    }
    if (value < 0) {
      throw new Error("Duration cannot be negative");
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
