import {Song} from '../Song/Song';
import {MusicalGenres} from '../MusicalGenres/MusicalGenres';
import {Manage} from './Manage';

/**
 * Playlist class
 */
export class Playlist implements Manage {
  constructor(private name: string,
              private songs: Song[],
              private duration: string,
              private genres: MusicalGenres[]) {}
  /**
   * Getter of the private attribute "name"
   * @returns {string} Name of the playlist
   */
  getName(): string {
    return this.name;
  }

  /**
   * Setter: modify the private attribute
   * @param {string} newName New name of the playlist
   */
  setName(newName: string): void {
    this.name = newName;
  }

  /**
   * Getter of the private attribute "songs"
   * @returns {Song[]} Songs of playlist
   */
  getSongs(): Song[] {
    return this.songs;
  }

  /**
   * Setter: modify the list of songs in the playlist
   * @param {Song[]} newSongs New list of songs
   */
  setSongs(newSongs: Song[]): void {
    this.songs = newSongs;
  }

  /**
   * Adds a song in the list of songs in the playlist
   * @param {Song} newSong New song
   */
  addSong(newSong: Song): void {
    this.songs.push(newSong);
  }

  /**
   * Revomes a song in the list of songs in the playlist
   * @param {string} songs Song to be removed
   */
  removeSong(songs: string): void {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songs) {
        this.songs.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Getter of the private attribute "duration"
   * @returns {string} Duration of the all songs on the playlist
   */
  getDuration(): string {
    return this.duration;
  }

  /**
   * Setter: modify the durations of th all songs on the playlist
   * @param {string} newDuration New Duration
   */
  setDuration(newDuration: string): void {
    this.duration = newDuration;
  }

  /**
   * Getter of genres of the playlist
   * @returns {MusicalGenres[]} Current genres of the playlist
   */
  getGenres(): MusicalGenres[] {
    return this.genres;
  }

  /**
   * Setter: modify de current genres
   * @param {MusicalGenres[]} newGenres New genres of the playlist
   */
  setGenres(newGenres: MusicalGenres[]): void {
    this.genres = newGenres;
  }

  /**
   * Adds a genre in the list of genres in the playlist
   * @param {MusicalGenres} newGenre New genre
   */
  addGenre(newGenre: MusicalGenres): void {
    this.genres.push(newGenre);
  }

  /**
   * Removes a genre in the list of genres in the playlist
   * @param {string} genre Genre to be removed
   */
  removeGenre(genre: string): void {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getName() === genre) {
        this.genres.splice(i, 1);
        break;
      }
    }
  }
}