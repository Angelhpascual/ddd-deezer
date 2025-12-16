import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId";
import { DeezerArtistDTO, DeezerTrackDTO } from "./dto";
import { Title } from "@/app/domain/Track/value-objects/Title/Title";
import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId";
import { Duration } from "@/app/domain/Track/value-objects/Duration/Duration";
import { Rank } from "@/app/domain/Track/value-objects/Rank/Rank";
import { PreviewUrl } from "@/app/domain/Track/value-objects/PreviewUrl/PreviewUrl";
import { Track } from "@/app/domain/Track/Track";
import { Artist } from "@/app/domain/Artist/Artist";
import { ArtistName } from "@/app/domain/Artist/value-objects/ArtistName/ArtistName";
import { ArtistPicture } from "@/app/domain/Artist/value-objects/ArtistPicture/ArtistPicture";
import { ArtistFanCount } from "@/app/domain/Artist/value-objects/ArtistFanCount/ArtistFanCount";
import { ArtistAlbumCount } from "@/app/domain/Artist/value-objects/ArtistAlbumCount/ArtistAlbumCount";

export const toTrack = (dto: DeezerTrackDTO): Track => ({
  id: TrackId.fromString(String(dto.id)),
  title: Title.fromString(dto.title ?? ""),
  artistId: ArtistId.fromString(String(dto.artist?.id ?? "")),
  duration: Duration.fromNumber(Number(dto.duration ?? 0)),
  previewUrl: dto.preview ? PreviewUrl.fromString(dto.preview) : undefined,
  explicit: Boolean(dto.explicit_lyrics),
  rank: typeof dto.rank === "number" ? Rank.fromNumber(dto.rank) : undefined,
});

export const toArtist = (dto: DeezerArtistDTO): Artist => {
  const picture =
    dto.picture ||
    dto.picture_small ||
    dto.picture_medium ||
    dto.picture_big ||
    dto.picture_xl;

  const pictureUrl = picture ? ArtistPicture.fromString(picture) : undefined;

  const nbFan =
    typeof dto.nb_fan === "number"
      ? ArtistFanCount.fromNumber(dto.nb_fan)
      : undefined;

  const nbAlbum =
    typeof dto.nb_album === "number"
      ? ArtistAlbumCount.fromNumber(dto.nb_album)
      : undefined;
  return {
    id: ArtistId.fromString(String(dto.id)),
    name: ArtistName.fromString(dto.name ?? ""),
    pictureUrl: pictureUrl,
    nbFan: nbFan,
    nbAlbum: nbAlbum,
  };
};
