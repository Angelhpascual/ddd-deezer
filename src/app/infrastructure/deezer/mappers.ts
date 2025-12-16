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

export const toTrack = (dto: DeezerTrackDTO): Track => {
  if (!dto.id) {
    throw new Error("Track DTO must have an id");
  }
  if (!dto.title) {
    throw new Error("Track DTO must have a title");
  }
  if (!dto.artist || !dto.artist.id) {
    throw new Error("Track DTO must have an artist with an id");
  }
  if (typeof dto.duration !== "number") {
    throw new Error("Track DTO must have a duration");
  }

  const rank =
    typeof dto.rank === "number" ? Rank.fromNumber(dto.rank) : undefined;

  return {
    id: TrackId.fromString(dto.id.toString()),
    title: Title.fromString(dto.title),
    artistId: ArtistId.fromString(dto.artist.id.toString()),
    duration: Duration.fromNumber(dto.duration),
    previewUrl: dto.preview ? PreviewUrl.fromString(dto.preview) : undefined,
    explicit: Boolean(dto.explicit_lyrics),
    rank: rank,
  };
};

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
    id: ArtistId.fromString(dto.id.toString()),
    name: ArtistName.fromString(dto.name),
    pictureUrl: pictureUrl,
    nbFan: nbFan,
    nbAlbum: nbAlbum,
  };
};
