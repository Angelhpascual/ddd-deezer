export interface ArtistName {
  value: string
}

export const ArtistName = (value: string, max = 200): ArtistName => {
  const trimmed = value?.trim()
  if (!trimmed) {
    throw new Error("ArtistName cannot be empty")
  }
  if (trimmed.length > max) {
    throw new Error(`ArtistName cannot be longer than ${max} characters`)
  }
  return { value: trimmed }
}