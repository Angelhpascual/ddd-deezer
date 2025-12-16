export interface DeezerTrackDTO {
  id: number;
  title: string; 
  duration: number;
  preview?: string;
  explicit_lyrics: boolean;
  rank?: number;
  artist: {
    id: number;
    name: string;
    
  }
  album?:{
    id: number;
    title: string
  }
}

export interface DeezerArtistDTO {
  id: number;
  name: string;
  picture?: string
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
  nb_fan?: number;
  nb_album?: number;
}

export interface SearchResponseDTO<T>{
  data: T[];
  total?: number
  next?: string
}


export interface ArtistResponseDTO extends DeezerArtistDTO { }
export interface TrackResponseDTO extends DeezerTrackDTO { }