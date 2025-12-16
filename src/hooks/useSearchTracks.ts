import { SearchTrack } from "@/app/application/use-cases/Track/SearchTrack/SearchTrack";
import { Track } from "@/app/domain/Track/Track";
import { DeezerTrackRepository } from "@/app/infrastructure/deezer/DeezerTrackRepository";
import { useMutation } from "@tanstack/react-query";

const repo = new DeezerTrackRepository();
const searchTrack = new SearchTrack(repo);

export const useSearchTracks = () => {
  return useMutation<Track[], Error, string>({
    mutationFn: (term: string) => searchTrack.execute(term),
  });
};
