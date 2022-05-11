import {Artist} from './Artist';

/**
 * Interface to manage artist class
 */
export interface ArtistManage {
  getArtists(): Artist[];
  setArtists(Artists: Artist[]): void;
  addArtist(Artist: Artist): void;
  removeArtist(Artist: string): void;
}
