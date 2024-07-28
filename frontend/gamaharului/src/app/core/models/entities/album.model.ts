import { Artist } from './artist.model';
import { Track } from './track.model';

export interface Album {
  id: number;
  slug: string;
  title: string;
  thumbnail?: string;
  artist?: Artist;
  tracks?: Track[];
}
