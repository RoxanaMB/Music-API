import {Group} from '../Group/Group';
import {Artist} from '../Artist/Artist';
import {Song} from '../Song/Song';
import {MusicalGenres} from '../MusicalGenres/MusicalGenres';
import {Manage} from './Manage';

/**
 * Album class
 */
export class Album implements Manage {
  constructor(private name: string,
              private author: Artist | Group,
              private year: number,
              private genre: MusicalGenres[],
              private songs: Song[]) {}
  /**
   * Getter of the private attribute "name"
   * @returns {string} Name of the album
   */
  getName(): string {
    return this.name;
  }

  /**
   * Setter: modify the private attribute
   * @param {string} name New name of the album
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Getter that indicates if the album was published by artist or by group
   * @returns {Artist | Group} Return the type of author
   */
  getAuthor(): Artist | Group {
    return this.author;
  }

  /**
   * Setter: modify the type of author published the album
   * @param {Artist | Group} artistsGroup Object of type Artist or Group
   */
  setAuthor(artistsGroup: (Artist | Group)): void {
    this.author = artistsGroup;
  }

  /**
   * Getter of the year of the album
   * @returns {number} Year of the album
   */
  getYear(): number {
    return this.year;
  }

  /**
   * Setter: modify the private attribute
   * @param {number} newYear New year of the album
   */
  setYear(newYear: number): void {
    this.year = newYear;
  }

  /**
   * Getter of genres of the album
   * @returns {MusicalGenres[]}
   */
  getGenres(): MusicalGenres[] {
    return this.genre;
  }

  /**
   * Setter: modify the genres of the album
   * @param {MusicalGenres[]} newGenre New genre of the album
   */
  setGenres(newGenre: MusicalGenres[]): void {
    this.genre = newGenre;
  }

  /**
   * Adds a genre in the album
   * @param {MusicalGenres} newGenre New genre
   */
  addGenre(newGenre: MusicalGenres): void {
    this.genre.push(newGenre);
  }

  /**
   * Removes a genre in the album
   * @param {string} genre Genre to be removed
   */
  removeGenre(genre: string): void {
    for (let i = 0; i < this.genre.length; i++) {
      if (this.genre[i].getName() === genre) {
        this.genre.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Getter of the list of songs of the album
   * @returns {Song[]} Current songs list
   */
  getSongs(): Song[] {
    return this.songs;
  }

  /**
   * Setter: modify the list songs of the album
   * @param {Song[]} newSong New songs list
   */
  setSongs(newSong: Song[]): void {
    this.songs = newSong;
  }

  /**
   * Adds a song in the list of songs of the album
   * @param {Song} newSong New song
   */
  addSong(newSong: Song): void {
    this.songs.push(newSong);
  }

  /**
   * Revomes a song in the list of songs of the album
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
}