import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { Track } from "@/app/domain/Track/Track";
import { TrackRepository } from "@/app/domain/TrackRepository";

export class SearchByArtistId { 
  private readonly repo: TrackRepository  

  constructor(repo: TrackRepository) {
    this.repo = repo;
  }

  async execute(artistId: ArtistId): Promise<Track[]> {
    return this.repo.searchByArtistId(artistId);
  }
}