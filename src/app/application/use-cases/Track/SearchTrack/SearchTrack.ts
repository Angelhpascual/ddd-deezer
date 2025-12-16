import { Track } from "@/app/domain/Track/Track";
import { TrackRepository } from "@/app/domain/TrackRepository";

export class SearchTrack { 
  private readonly repo: TrackRepository

  constructor(repo: TrackRepository) {
    this.repo = repo;
  }

  async execute(query: string): Promise<Track[]> {
    if (!query.trim()) return []
    return this.repo.search(query)
  }
}