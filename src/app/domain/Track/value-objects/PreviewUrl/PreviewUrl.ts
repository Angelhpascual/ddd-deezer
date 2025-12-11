export interface PreviewUrl {
  value: string;
}

export const PreviewUrl = (value: string): PreviewUrl => {
  const trimmed = value?.trim();
  if (!trimmed || !trimmed.startsWith("http")) {
    throw new Error("PreviewUrl must start with http");
  }
  return { value: trimmed };
};
