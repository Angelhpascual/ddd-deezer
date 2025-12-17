import { DeezerTrackRepository } from "@/app/infrastructure/deezer/DeezerTrackRepository";
import { useQuery } from "@tanstack/react-query";

const repo = new DeezerTrackRepository();

export const useTrendingTracks = () => {
  return useQuery({
    queryKey: ["trending-tracks"],
    queryFn: () => repo.getTopTracks(),
  });
};
