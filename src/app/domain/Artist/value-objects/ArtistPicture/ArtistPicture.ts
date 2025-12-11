export interface ArtistPicture {
  value: string
}

export const ArtistPicture = (value: string): ArtistPicture => {
  const trimmed = value?.trim()
  if (!trimmed) {
    throw new Error("ArtistPicture cannot be empty")
  }
  if(!trimmed.startsWith("http")) {
    throw new Error("ArtistPicture must be a valid URL")
  }
    return { value: trimmed }
}
  
