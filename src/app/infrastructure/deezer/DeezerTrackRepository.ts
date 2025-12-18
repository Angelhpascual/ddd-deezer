import { Track } from "@/app/domain/Track/Track";
import { DeezerTrackDTO, SearchResponseDTO } from "./dto";
import {
  TrackRepository,
  TrendingCategory,
} from "@/app/domain/TrackRepository";
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import { toTrack } from "./mappers";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";

const BASE_URL = "/deezer";

export class DeezerTrackRepository implements TrackRepository {
  async getById(id: TrackId): Promise<Track | null> {
    try {
      const response = await fetch(`${BASE_URL}/track/${id.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch track");
      }
      const data: DeezerTrackDTO = await response.json();
      return toTrack(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async search(query: string): Promise<Track[]> {
    try {
      const response = await fetch(
        `${BASE_URL}/search/track?q=${encodeURIComponent(query)}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tracks");
      }
      const data: SearchResponseDTO<DeezerTrackDTO> = await response.json();
      return data.data.map(toTrack);
    } catch (error) {
      console.error("Failed to fetch tracks", error);
      return [];
    }
  }

  async searchByArtistId(artistId: ArtistId): Promise<Track[]> {
    try {
      const response = await fetch(
        `${BASE_URL}/artist/${artistId.value}/top?limit=50`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tracks by artist");
      }
      const data: SearchResponseDTO<DeezerTrackDTO> = await response.json();
      return data.data.map(toTrack);
    } catch (error) {
      console.error("Failed to fetch tracks by artist", error);
      return [];
    }
  }

  async getTrendingTracks(category: TrendingCategory): Promise<Track[]> {
    const chartMap: Record<TrendingCategory, string> = {
      topGlobal: "0",
      freshReleases: "132",
      moodBooster: "113",
    };

    const chartId = chartMap[category];
    try {
      const response = await fetch(`${BASE_URL}/chart/${chartId}/tracks`);
      if (!response.ok) {
        throw new Error("Failed to fetch trending tracks");
      }
      const data: SearchResponseDTO<DeezerTrackDTO> = await response.json();
      return data.data.map(toTrack);
    } catch (error) {
      console.error("Failed to fetch trending tracks", error);
      return [];
    }
  }
}
