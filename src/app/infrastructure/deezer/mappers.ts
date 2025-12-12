import { ArtistId } from "@/app/domain/Artist/value-objects/ArtistId/ArtistId"
import { Track } from "@/app/domain/Track/Track"
import { Duration } from "@/app/domain/Track/value-objects/Duration/Duration"
import { PreviewUrl } from "@/app/domain/Track/value-objects/PreviewUrl/PreviewUrl"
import { Rank } from "@/app/domain/Track/value-objects/Rank/Rank"
import { Title } from "@/app/domain/Track/value-objects/Title/Title"
import { TrackId } from "@/app/domain/Track/value-objects/TrackId/TrackId"
import { DeezerArtistDTO, DeezerTrackDTO } from "./dto"
import { ArtistName } from "@/app/domain/Artist/value-objects/ArtistName/ArtistName"
import { ArtistPicture } from "@/app/domain/Artist/value-objects/ArtistPicture/ArtistPicture"
import { ArtistFanCount } from "@/app/domain/Artist/value-objects/ArtistFanCount/ArtistFanCount"
import { ArtistAlbumCount } from "@/app/domain/Artist/value-objects/ArtistAlbumCount/ArtistAlbumCount"
import { Artist } from "@/app/domain/Artist/Artist"

export const toTrack = (dto: DeezerTrackDTO): Track => {
  return {
    id: TrackId(String(dto.id)),
    title: Title(dto.title),
    artistId: ArtistId(String(dto.artist.id)),
    duration: Duration(dto.duration),
    previewUrl: dto.preview ? PreviewUrl(dto.preview) : undefined,
    explicit: dto.explicit_lyrics,
    rank: dto.rank ? Rank(dto.rank) : undefined,
  }
}

export const toArtist = (dto: DeezerArtistDTO): Artist => {
  const pictureUrl = dto.picture || dto.picture_small || dto.picture_medium || dto.picture_big || dto.picture_xl;
  
  return {
    id: ArtistId(String(dto.id)),
    name: ArtistName(dto.name),
    pictureUrl: pictureUrl && pictureUrl.trim().startsWith("http") 
      ? ArtistPicture(pictureUrl) 
      : undefined,
    nbFan: dto.nb_fan ? ArtistFanCount(dto.nb_fan) : undefined,
    nbAlbum: dto.nb_album ? ArtistAlbumCount(dto.nb_album) : undefined,
  };
}