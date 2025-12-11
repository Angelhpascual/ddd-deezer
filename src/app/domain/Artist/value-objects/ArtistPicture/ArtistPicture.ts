export interface ArtistPicture {
  value: string
}

export const ArtistPicture = (value: string): ArtistPicture => {
  const trimmed = value?.trim()
  if (!trimmed) {
    throw new Error("ArtistPicture cannot be empty")
  }
    return { value: trimmed }
}
  
