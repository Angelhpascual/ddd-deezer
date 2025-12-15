import { ArtistAlbumCount } from "./value-objects/ArtistAlbumCount/ArtistAlbumCount"
import { ArtistFanCount } from "./value-objects/ArtistFanCount/ArtistFanCount"
import { ArtistId } from "./value-objects/ArtistId/ArtistId"
import { ArtistName } from "./value-objects/ArtistName/ArtistName"
import { ArtistPicture } from "./value-objects/ArtistPicture/ArtistPicture"

export interface Artist { 
  id: ArtistId
  name: ArtistName
  pictureUrl?: ArtistPicture | undefined
  nbFan?: ArtistFanCount | undefined
  nbAlbum?: ArtistAlbumCount  | undefined
}