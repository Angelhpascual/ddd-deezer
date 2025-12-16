import { Artist } from "./Artist/Artist"
import { ArtistId } from "./Artist/value-objects/ArtistId/ArtistId"

export interface ArtistRepository { 
  getById(id: ArtistId): Promise<Artist | null>
  search(query: string): Promise<Artist[]>
}