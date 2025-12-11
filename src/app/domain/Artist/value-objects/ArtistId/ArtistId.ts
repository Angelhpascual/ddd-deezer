export interface ArtistId {
  value: string
}

export const ArtistId = (value: string): ArtistId => {
  const trimmed = value?.trim()
  if (!trimmed) {
    throw new Error("ArtistId cannot be empty")
  }
  return { value: trimmed }
}