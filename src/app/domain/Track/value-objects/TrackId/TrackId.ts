export interface TrackId {
  value: string;
}

export const TrackId = (value: string): TrackId => {
  const trimmed = value?.trim();
  if (!trimmed) {
    throw new Error("TrackId cannot be empty");
  }
  return { value: trimmed };
};
