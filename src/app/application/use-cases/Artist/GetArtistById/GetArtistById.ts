import { Artist } from "@/app/domain/Artist/Artist";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { ArtistRepository } from "@/app/domain/ArtistRepository";

export class GetArtistById { 
  private readonly repo: ArtistRepository

  constructor(repo: ArtistRepository) {
    this.repo = repo;
  }

  async execute(id: ArtistId): Promise<Artist | null> {
    const artist = await this.repo.getById(id);
    if (!artist) {
      throw new Error("Artist not found");
    }
    return artist;
  }
}