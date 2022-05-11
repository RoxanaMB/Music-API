import {Playlist} from './Playlist';

/**
 * Interface that implements the methods to manage the playlist
 */
export interface PlaylistManage {
  getPlaylists(): Playlist[];
  setPlaylists(Playlists: Playlist[]): void;
  addPlaylist(Playlist: Playlist): void;
  removePlaylist(Playlist: string): void;
}
