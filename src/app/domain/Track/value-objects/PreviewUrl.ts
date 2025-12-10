export interface PreviewUrl {
  value: string;
}

export const PreviewUrl = (value: string): PreviewUrl => {
  if (!value.startsWith("http")) {
    throw new Error("PreviewUrl must start with http");
  }
  return { value };
};
