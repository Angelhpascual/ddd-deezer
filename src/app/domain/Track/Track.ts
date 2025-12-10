import { Duration } from "./value-objects/Duration/Duration";
import { PreviewUrl } from "./value-objects/PreviewUrl";
import { Rank } from "./value-objects/Rank";
import { Title } from "./value-objects/Title";
import { TrackId } from "./value-objects/TrackId";

export interface Track {
  id: TrackId;
  title: Title;
  artistId: string;
  duration: Duration;
  previewUrl?: PreviewUrl;
  explicit: boolean;
  rank?: Rank;
}
