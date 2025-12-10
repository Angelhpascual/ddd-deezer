export interface Duration {
  value: number;
}

export const Duration = (value: number): Duration => {
  if (!Number.isFinite(value)) {
    throw new Error("Duration must be a positive finite number");
  }
  if (value < 0) {
    throw new Error("Duration cannot be negative");
  }
  return { value };
};
