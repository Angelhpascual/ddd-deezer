import { Artist } from "@/app/domain/Artist/Artist";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { ArtistRepository } from "@/app/domain/ArtistRepository";

export class GetArtistById { 
  private readonly repo: ArtistRepository

  constructor(repo: ArtistRepository) {
    this.repo = repo;
  }

  async execute(id: ArtistId): Promise<Artist | null> {
    return this.repo.getById(id);    
  }
}