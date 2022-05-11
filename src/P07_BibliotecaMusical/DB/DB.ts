/* eslint-disable max-len */
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
import {Artist} from '../Artist/Artist';
import {Group} from '../Group/Group';
import {MusicalGenres} from '../MusicalGenres/MusicalGenres';
import {Album} from '../Album/Album';
import {Song} from '../Song/Song';
import {Playlist} from '../Playlist/Playlist';

/**
 * Adapter for lowdb
 */
const adapter = new FileSync('./src/models/db.json');
/**
 * Database
 */
const db = low(adapter);

/**
 * Database management singleton class
 */
export class DB {
  private static instance: DB;
  private constructor() {
    db.defaults({
      artists: [],
      groups: [],
      genres: [],
      albums: [],
      songs: [],
      playlists: [],
    }).write();
  }

  /**
   * Singleton pattern
   * @returns {DB}
   */
  public static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }

  /**
   * Getter of the private attribute "artists"
   * @returns {any}
   */
  public getDB(): any {
    return db;
  }

  /**
   * Getter of artists
   * @returns {[{name: string, groups: string[], genres: string[], albums: string[], songs: string[], numFollowers: number}]}
   */
  public getArtists(): [{name: string,
                        groups: string[],
                        genres: string[],
                        albums: string[],
                        songs: string[],
                        numFollowers: number}] {
    return db.get('artists').value();
  }

  /**
   * Getter of groups
   * @returns {[{name: string, artists: string[], creationYear: number, genres: string[], albums: string[], numFollowers: number}]}
   */
  public getGroups(): [{name: string,
                        artists: string[],
                        creationYear: number,
                        genres: string[],
                        albums: string[],
                        numFollowers: number}] {
    return db.get('groups').value();
  }

  /**
   * Getter of genres
   * @returns {[{name: string, artists: string[], groups: string[], albums: string[], songs: string[]}]}
   */
  public getGenres(): [{name: string,
                        artists: string[],
                        groups: string[],
                        albums: string[],
                        songs: string[]}] {
    return db.get('genres').value();
  }

  /**
   * Getter of albums
   * @returns {[{name: string, author: string, year: number, genres: string[], songs: string[]}]}
   */
  public getAlbums(): [{name: string,
                        author: string,
                        year: number,
                        genres: string[],
                        songs: string[]}] {
    return db.get('albums').value();
  }

  /**
   * Getter of songs
   * @returns {[{name: string, author: string, duration: string, genres: string[], isSingle: boolean, numRep: number}]}
   */
  public getSongs(): [{name: string,
                       author: string,
                       duration: string,
                       genres: string[],
                       isSingle: boolean,
                       numRep: number}] {
    return db.get('songs').value();
  }

  /**
   * Getter of playlists
   * @returns {[{name: string, songs: string[], duration: string, genres: string[]}]}
   */
  public getPlaylists(): [{name: string,
                           songs: string[],
                           duration: string,
                           genres: string[],
                           creator: string}] {
    return db.get('playlists').value();
  }

  /**
   * Add an artist to the database
   * @param artist {Artist}
   * @return {void}
   */
  public addArtist(artist: Artist): void {
    const JSON = {
      name: artist.getName(),
      groups: artist.getGroups().map((group: Group) => group.getName()),
      genres: artist.getGenres().map((genre: MusicalGenres) => genre.getName()),
      albums: artist.getAlbums().map((album: Album) => album.getName()),
      songs: artist.getSongs().map((song: Song) => song.getName()),
      numFollowers: artist.getNumFollowers(),
    };
    db.get('artists').push(JSON).write();
  }

  /**
   * Add a group to the database
   * @param group {Group}
   * @return {void}
   */
  public addGroup(group: Group): void {
    const JSON = {
      name: group.getName(),
      artists: group.getArtists().map((artist: Artist) => artist.getName()),
      creationYear: group.getCreationYear(),
      genres: group.getGenres().map((genre: MusicalGenres) => genre.getName()),
      albums: group.getAlbums().map((album: Album) => album.getName()),
      numFollowers: group.getNumFollowers(),
    };
    db.get('groups').push(JSON).write();
  }

  /**
   * Add a genre to the database
   * @param genre {MusicalGenres}
   * @return {void}
   */
  public addGenre(genre: MusicalGenres): void {
    const JSON = {
      name: genre.getName(),
      artists: genre.getArtists().map((artist: Artist) => artist.getName()),
      groups: genre.getGroups().map((group: Group) => group.getName()),
      albums: genre.getAlbums().map((album: Album) => album.getName()),
      songs: genre.getSongs().map((song: Song) => song.getName()),
    };
    db.get('genres').push(JSON).write();
  }

  /**
   * Add an album to the database
   * @param album {Album}
   * @return {void}
   */
  public addAlbum(album: Album): void {
    const JSON = {
      name: album.getName(),
      author: album.getAuthor().getName(),
      year: album.getYear(),
      genres: album.getGenres().map((genre: MusicalGenres) => genre.getName()),
      songs: album.getSongs().map((song: Song) => song.getName()),
    };
    db.get('albums').push(JSON).write();
  }

  /**
   * Add a song to the database
   * @param song {Song}
   * @return {void}
   */
  public addSong(song: Song): void {
    const JSON = {
      name: song.getName(),
      author: song.getAuthor().getName(),
      duration: song.getDuration(),
      genres: song.getGenres().map((genre: MusicalGenres) => genre.getName()),
      isSingle: song.isSingle(),
      numRep: song.getNumRep(),
    };
    db.get('songs').push(JSON).write();
  }

  /**
   * Add a playlist to the database
   * @param playlist {Playlist | any}
   * @return {void}
   */
  public addPlaylist(playlist: Playlist | any): void {
    if (playlist instanceof Playlist) {
      const JSON = {
        name: playlist.getName(),
        songs: playlist.getSongs().map((song: Song) => song.getName()),
        duration: playlist.getDuration(),
        genres: playlist.getGenres().map((genre: MusicalGenres) => genre.getName()),
      };
      db.get('playlists').push(JSON).write();
    } else {
      const JSON = {
        name: playlist.name,
        songs: playlist.songs,
        duration: playlist.duration,
        genres: playlist.genres,
        creator: playlist.creator,
      };
      db.get('playlists').push(JSON).write();
    }
  }
  /**
   * Remove a playlist from the database
   * @param playlist {string}
   */
  public removePlaylist(playlist: string): void {
    db.get('playlists').remove({name: playlist}).write();
  }
}