export interface ArtistAlbumCount {
  value: number
}

export const ArtistAlbumCount = (value: number): ArtistAlbumCount => {
  if(!Number.isFinite(value)) {
    throw new Error("ArtistAlbumCount must be a positive finite number")
  }
  if (value < 0) {
    throw new Error("ArtistAlbumCount cannot be negative")
  }
  return { value }
}