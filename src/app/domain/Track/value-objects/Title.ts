export interface Title {
  value: string;
}

export const Title = (value: string, max = 200): Title => {
  const trimmed = value?.trim();
  if (!trimmed) {
    throw new Error("Title cannot be empty");
  }
  if (trimmed.length > max) {
    throw new Error(`Title cannot be longer than ${max} characters`);
  }
  return { value: trimmed };
};
