// ...existing code...
import type { DeezerTrackDTO, DeezerArtistDTO } from "./dto";
import type { Track } from "@/app/domain/Track/Track";
import type { Artist } from "@/app/domain/Artist/Artist";
import type { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import type { Title } from "@/app/domain/Track/value-objects/Title/Title";
import type { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import type { Duration } from "@/app/domain/Track/value-objects/Duration/Duration";
import type { PreviewUrl } from "@/app/domain/Track/value-objects/PreviewUrl/PreviewUrl";
import type { Rank } from "@/app/domain/Track/value-objects/Rank/Rank";
import type { ArtistName } from "@/app/domain/Artist/value-objects/ArtistName/ArtistName";
import type { ArtistPicture } from "@/app/domain/Artist/value-objects/ArtistPicture/ArtistPicture";
import type { ArtistFanCount } from "@/app/domain/Artist/value-objects/ArtistFanCount/ArtistFanCount";
import type { ArtistAlbumCount } from "@/app/domain/Artist/value-objects/ArtistAlbumCount/ArtistAlbumCount";

// helpers mínimos que crean objetos literales con la forma de los VOs
const makeTrackId = (v: string): TrackId => ({ value: v } as TrackId);
const makeTitle = (v: string): Title => ({ value: v } as Title);
const makeArtistId = (v: string): ArtistId => ({ value: v } as ArtistId);
const makeDuration = (v: number): Duration => ({ value: v } as Duration);
const makePreviewUrl = (v: string): PreviewUrl => ({ value: v } as PreviewUrl);
const makeRank = (v: number): Rank => ({ value: v } as Rank);
const makeArtistName = (v: string): ArtistName => ({ value: v } as ArtistName);
const makeArtistPicture = (v: string): ArtistPicture => ({ value: v } as ArtistPicture);
const makeArtistFanCount = (v: number): ArtistFanCount => ({ value: v } as ArtistFanCount);
const makeArtistAlbumCount = (v: number): ArtistAlbumCount => ({ value: v } as ArtistAlbumCount);

export const toTrack = (dto: DeezerTrackDTO): Track => {
  return {
    id: makeTrackId(String(dto.id)),
    title: makeTitle(dto.title ?? ""),
    artistId: makeArtistId(String(dto.artist?.id ?? dto.artist_id ?? "")),
    duration: makeDuration(Number(dto.duration ?? 0)),
    previewUrl: dto.preview ? makePreviewUrl(dto.preview) : undefined,
    explicit: Boolean(dto.explicit_lyrics),
    rank: typeof dto.rank === "number" ? makeRank(dto.rank) : undefined,
  };
};

export const toArtist = (dto: DeezerArtistDTO): Artist => {
  const picture =
    dto.picture ||
    dto.picture_small ||
    dto.picture_medium ||
    dto.picture_big ||
    dto.picture_xl ||
    undefined;

  return {
    id: makeArtistId(String(dto.id)),
    name: makeArtistName(dto.name ?? ""),
    pictureUrl: picture ? makeArtistPicture(picture) : undefined,
    nbFan:
      typeof dto.nb_fan === "number" ? makeArtistFanCount(dto.nb_fan) : undefined,
    nbAlbum:
      typeof dto.nb_album === "number" ? makeArtistAlbumCount(dto.nb_album) : undefined,
  };
};
// ...existing code...