import { Track } from "@/app/domain/Track/Track";
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import { TrackRepository } from "@/app/domain/TrackRepository";

export class GetTrackById {
  private readonly repo: TrackRepository

  constructor(repo: TrackRepository) {
    this.repo = repo;
  }

  async execute(id: TrackId): Promise<Track | null> {
    return this.repo.getById(id);
  }
}