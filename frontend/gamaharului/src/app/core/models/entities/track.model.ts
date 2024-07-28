import { Album } from './album.model';
import { Artist } from './artist.model';

export interface Track {
  id: number;
  slug: string;
  title: string;
  thumbnail?: string;
  plays?: number;
  artist?: Artist;
  album?: Album;
}
