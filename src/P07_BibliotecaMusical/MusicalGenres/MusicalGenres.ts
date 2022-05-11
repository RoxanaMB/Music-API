import {Group} from '../Group/Group';
import {Artist} from '../Artist/Artist';
import {Album} from '../Album/Album';
import {Song} from '../Song/Song';
import {Manage} from './Manage';

/**
 * Musical genres describes the musical genres of the music library.
 */
export class MusicalGenres implements Manage {
  constructor(private name: string,
              private artists: Artist[],
              private groups: Group[],
              private albums: Album[],
              private song: Song[]) {}
  /**
   * getName() returns the name of the genre.
   * @returns the name of the genre
   */
  getName(): string {
    return this.name;
  }

  /**
   * setName() sets the name of the genre.
   * @param name the name of the genre
   */
  setName(name: string): void {
    this.name = name;
  }
  /**
   * getArtist() returns the artists of the genre.
   * @returns the number of artists in the genre
   */
  getArtists(): Artist[] {
    return this.artists;
  }
  /**
  * setArtist() sets the artists of the genre.
  * @param artists the artists of the genre
  */
  setArtists(artists: Artist[]): void {
    this.artists = artists;
  }

  /**
   * addArtist() adds an artist to the genre.
   * @param artist the artist to be searched
   */
  addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  /**
   * removeArtist() removes an artist from the genre.
   * @param artist the artist to be removed
   */
  removeArtist(artist: string): void {
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === artist) {
        this.artists.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getGArtist() returns the artist or group of the genre.
   * @returns the group or artist of the genre
   */
  getGroups(): Group[] {
    return this.groups;
  }

  /**
   * setGroup() sets the groups of the genre.
   * @param groups the groups of the genre
   */
  setGroups(groups: Group[]): void {
    this.groups = groups;
  }

  /**
   * addGenre() adds a genre to the genre.
   * @param group the group to be searched
   */
  addGroup(group: Group): void {
    this.groups.push(group);
  }

  /**
   * removeGroup() removes a group from the genre.
   * @param group the group to be searched
   */
  removeGroup(group: string): void {
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].getName() === group) {
        this.groups.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getAlbums() returns the albums of the genre.
   * @returns the name of the albums
   */
  getAlbums(): Album[] {
    return this.albums;
  }

  /**
   * setAlbums() sets the albums of the genre.
   * @param albums albums to be modified
   */
  setAlbums(albums: Album[]): void {
    this.albums = albums;
  }

  /**
   * addAlbum() adds an album to the genre.
   * @param album album to be added
   */
  addAlbum(album: Album): void {
    this.albums.push(album);
  }

  /**
   * removeGenre() removes the genre from the library.
   * @param album album to be removed
   */
  removeAlbum(album: string): void {
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].getName() === album) {
        this.albums.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getSong() returns the song of the genre.
   * @returns the number of songs in the genre
   */
  getSongs(): Song[] {
    return this.song;
  }

  /**
   * setSong() sets the song of the genre.
   * @param songs songs to be modified
   */
  setSongs(songs: Song[]): void {
    this.song = songs;
  }

  /**
   * addSong() adds a song to the genre.
   * @param song song to be added
   */
  addSong(song: Song): void {
    this.song.push(song);
  }

  /**
   * removeSong() removes a song from the genre.
   * @param song song to be removed
   */
  removeSong(song: string): void {
    for (let i = 0; i < this.song.length; i++) {
      if (this.song[i].getName() === song) {
        this.song.splice(i, 1);
        break;
      }
    }
  }
}