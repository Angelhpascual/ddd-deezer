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

  static fromNumber(value: number): Duration {
    if (!Number.isFinite(value) || value < 0) {
      throw new Error("Duration must be a non-negative finite number");
    }
    return new Duration(value);
  }
  getValue(): number {
    return this.value;
  }
  toString(): string {
    return this.value.toString();
  }

  format(): string {
    const minutes = Math.floor(this.value / 60);
    const seconds = this.value % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
}
