import {Album} from './Album';

/**
 * Interface that implement the basic methods
 */
export interface AlbumManage {
  getAlbums(): Album[];
  setAlbums(albums: Album[]): void;
  addAlbum(album: Album): void;
  removeAlbum(album: string): void;
}
