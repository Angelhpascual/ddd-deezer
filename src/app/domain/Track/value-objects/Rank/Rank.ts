export interface Rank {
  value: number;
}

export const Rank = (value: number): Rank => {
  if (value < 0) {
    throw new Error("Rank cannot be negative");
  }
  return { value };
};
