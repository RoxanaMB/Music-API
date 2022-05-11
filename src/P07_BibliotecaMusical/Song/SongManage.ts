import {Song} from './Song';

/**
 * Interface that implements the methods to manage songs
 */
export interface SongManage {
  getSongs(): Song[];
  setSongs(Songs: Song[]): void;
  addSong(Song: Song): void;
  removeSong(Song: string): void;
}
