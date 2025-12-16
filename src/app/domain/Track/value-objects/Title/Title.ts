export class Title {
  private readonly value: string;

  constructor(value: string) {
    if (value.length > 200) {
      throw new Error("Title cannot be longer than 200 characters");
    }
    if (!value || value.trim() === "") {
      throw new Error("Title cannot be empty");
    }
    this.value = value;
  }

  static fromString(value: string): Title {
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error("Title cannot be empty");
    }
    return new Title(trimmed);
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }
}
