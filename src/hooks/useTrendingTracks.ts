import { TrendingCategory } from "@/app/domain/TrackRepository";
import { DeezerTrackRepository } from "@/app/infrastructure/deezer/DeezerTrackRepository";
import { useQuery } from "@tanstack/react-query";

const repo = new DeezerTrackRepository();

export const useTrendingTracks = (category: TrendingCategory) => {
  return useQuery({
    queryKey: ["trending-tracks", category],
    queryFn: () => repo.getTrendingTracks(category),
  });
};
