import { ArtistId } from "./Artist/value-objects/ArtistId/ArtistId";
import { Track } from "./Track/Track";
import { TrackId } from "./Track/value-objects/TrackId/TrackId";

export type TrendingCategory = "topGlobal" | "freshReleases" | "moodBooster";

export interface TrackRepository {
  getById(id: TrackId): Promise<Track | null>;
  search(query: string): Promise<Track[]>;
  searchByArtistId(artistId: ArtistId): Promise<Track[]>;
  getTrendingTracks(category: TrendingCategory): Promise<Track[]>;
}
