export interface ArtistAlbumCount {
  value: number
}

export const ArtistAlbumCount = (value: number): ArtistAlbumCount => {
  if (value < 0) {
    throw new Error("ArtistAlbumCount cannot be negative")
  }
  return { value }
}