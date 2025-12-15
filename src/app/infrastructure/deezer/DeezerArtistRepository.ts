import { Artist } from "@/app/domain/Artist/Artist";
import { ArtistRepository } from "@/app/domain/ArtistRepository";
import { toArtist } from "./mappers";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { DeezerArtistDTO, SearchResponseDTO } from "./dto";

export class DeezerArtistRepository implements ArtistRepository {
  async getById(id: ArtistId): Promise<Artist | null> {
    try {
      const response = await fetch(`https://api.deezer.com/artist/${id.value}`);
      if (!response.ok) {
        throw new Error("Failed to fetch artist");
      }
      const data: DeezerArtistDTO = await response.json();
      return toArtist(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async search(query: string): Promise<Artist[]> {
    try {
      const response = await fetch(`https://api.deezer.com/search/artist?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch artists");
      }
      const data: SearchResponseDTO<DeezerArtistDTO> = await response.json();
      return data.data.map(toArtist);
    } catch (error) {
      console.error("Failed to fetch artists", error);
      return [];
    }
  }  
}