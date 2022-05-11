import {MusicalGenres} from './MusicalGenres';

/**
 * MusicalGenresManage interface describes the methods that a
 * MusicalGenresManage object must implement.
 */
export interface MusicalGenresManage {
  getGenres(): MusicalGenres[];
  setGenres(MusicalGenres: MusicalGenres[]): void;
  addGenre(MusicalGenres: MusicalGenres): void;
  removeGenre(MusicalGenres: string): void;
}
