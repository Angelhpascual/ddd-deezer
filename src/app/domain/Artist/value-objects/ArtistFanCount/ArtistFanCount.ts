export interface ArtistFanCount {
  value: number
}

export const ArtistFanCount = (value: number): ArtistFanCount => {
  if (value < 0) {
    throw new Error("ArtistFanCount cannot be negative")
  }
  if(!Number.isFinite(value)) {
    throw new Error("ArtistFanCount must be a positive finite number")
  }
  return { value }
}