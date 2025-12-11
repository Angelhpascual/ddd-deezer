export interface Rank {
  value: number;
}

export const Rank = (value: number): Rank => {
  if (value < 0 ) {
    throw new Error("Rank cannot be negative");
  }
  if (!Number.isFinite(value)) {
    throw new Error("Rank must be a positive finite number");
  }
  return { value };
};
