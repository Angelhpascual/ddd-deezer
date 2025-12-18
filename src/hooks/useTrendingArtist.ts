import { DeezerArtistRepository } from "@/app/infrastructure/deezer/DeezerArtistRepository";
import { useQuery } from "@tanstack/react-query";

const repo = new DeezerArtistRepository();

export const useTrendingArtist = () => {
  return useQuery({
    queryKey: ["trending-artists"],
    queryFn: async () => {
      const topArtist = await repo.getTopArtist();
      const firstArtist = topArtist.slice(0, 5);
      return repo.getById(firstArtist[0].id);
    },
  });
};
