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

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }
}
