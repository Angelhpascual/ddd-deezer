import { Duration } from "./value-objects/Duration/Duration";
import { PreviewUrl } from "./value-objects/PreviewUrl/PreviewUrl";
import { Rank } from "./value-objects/Rank/Rank";
import { Title } from "./value-objects/Title/Title";
import { TrackId } from "./value-objects/TrackId/TrackId";

export interface Track {
  id: TrackId;
  title: Title;
  artistId: string;
  duration: Duration;
  previewUrl?: PreviewUrl;
  explicit: boolean;
  rank?: Rank;
}
