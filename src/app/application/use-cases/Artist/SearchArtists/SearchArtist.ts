import { Artist } from "@/app/domain/Artist/Artist";
import { ArtistRepository } from "@/app/domain/ArtistRepository";

export class SearchArtist { 
  private readonly repo: ArtistRepository

  constructor(repo: ArtistRepository) {
    this.repo = repo;
  }

  async execute(query: string): Promise<Artist[]> {
    if (!query.trim()) return []
    return this.repo.search(query)
  }
}