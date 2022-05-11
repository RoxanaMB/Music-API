import 'mocha';
import {expect} from 'chai';
import {DB} from '../../../src/P07_BibliotecaMusical/DB/DB';

describe('DB', () => {
  let db: DB;
  beforeEach(() => {
    db = DB.getInstance();
  });

  it('getInstance() returns an instance of DB', () => {
    expect(db).to.exist;
    expect(db).to.be.an.instanceof(DB);
  });

  it('getDB() returns a lowdb instance', () => {
    expect(db.getDB).to.exist;
    expect(db.getDB).to.be.a('function');
  });

  it('getArtists() returns an array of artists', () => {
    expect(db.getArtists).to.exist;
    expect(db.getArtists).to.be.a('function');
    expect(db.getArtists()[0]).to.have.property('name');
    expect(db.getArtists()[0]).to.have.property('groups');
    expect(db.getArtists()[0]).to.have.property('genres');
    expect(db.getArtists()[0]).to.have.property('albums');
    expect(db.getArtists()[0]).to.have.property('songs');
    expect(db.getArtists()[0]).to.have.property('numFollowers');
  });

  it('getGroups() returns an array of groups', () => {
    expect(db.getGroups).to.exist;
    expect(db.getGroups).to.be.a('function');
    expect(db.getGroups()[0]).to.have.property('name');
    expect(db.getGroups()[0]).to.have.property('artists');
    expect(db.getGroups()[0]).to.have.property('creationYear');
    expect(db.getGroups()[0]).to.have.property('genres');
    expect(db.getGroups()[0]).to.have.property('albums');
    expect(db.getGroups()[0]).to.have.property('numFollowers');
  });

  it('getGenres() returns an array of genres', () => {
    expect(db.getGenres).to.exist;
    expect(db.getGenres).to.be.a('function');
    expect(db.getGenres()[0]).to.have.property('name');
    expect(db.getGenres()[0]).to.have.property('artists');
    expect(db.getGenres()[0]).to.have.property('groups');
    expect(db.getGenres()[0]).to.have.property('albums');
    expect(db.getGenres()[0]).to.have.property('songs');
  });

  it('getAlbums() returns an array of albums', () => {
    expect(db.getAlbums).to.exist;
    expect(db.getAlbums).to.be.a('function');
    expect(db.getAlbums()[0]).to.have.property('name');
    expect(db.getAlbums()[0]).to.have.property('author');
    expect(db.getAlbums()[0]).to.have.property('year');
    expect(db.getAlbums()[0]).to.have.property('genres');
    expect(db.getAlbums()[0]).to.have.property('songs');
  });

  it('getSongs() returns an array of songs', () => {
    expect(db.getSongs).to.exist;
    expect(db.getSongs).to.be.a('function');
    expect(db.getSongs()[0]).to.have.property('name');
    expect(db.getSongs()[0]).to.have.property('author');
    expect(db.getSongs()[0]).to.have.property('duration');
    expect(db.getSongs()[0]).to.have.property('genres');
    expect(db.getSongs()[0]).to.have.property('isSingle');
    expect(db.getSongs()[0]).to.have.property('numRep');
  });

  it('getPlaylists() returns an array of playlists', () => {
    expect(db.getPlaylists).to.exist;
    expect(db.getPlaylists).to.be.a('function');
    expect(db.getPlaylists()[0]).to.have.property('name');
    expect(db.getPlaylists()[0]).to.have.property('songs');
    expect(db.getPlaylists()[0]).to.have.property('duration');
    expect(db.getPlaylists()[0]).to.have.property('genres');
    expect(db.getPlaylists()[0]).to.have.property('creator');
  });

  it('addGroup() adds a group to the database', () => {
    expect(db.addGroup).to.exist;
    expect(db.addGroup).to.be.a('function');
  });

  it('addArtist() adds an artist to the database', () => {
    expect(db.addArtist).to.exist;
    expect(db.addArtist).to.be.a('function');
  });

  it('addGenre() adds a genre to the database', () => {
    expect(db.addGenre).to.exist;
    expect(db.addGenre).to.be.a('function');
  });

  it('addAlbum() adds an album to the database', () => {
    expect(db.addAlbum).to.exist;
    expect(db.addAlbum).to.be.a('function');
  });

  it('addSong() adds a song to the database', () => {
    expect(db.addSong).to.exist;
    expect(db.addSong).to.be.a('function');
  });

  it('addPlaylist() adds a playlist to the database', () => {
    expect(db.addPlaylist).to.exist;
    expect(db.addPlaylist).to.be.a('function');
  });

  it('removePlaylist() removes a playlist from the database', () => {
    expect(db.removePlaylist).to.exist;
    expect(db.removePlaylist).to.be.a('function');
  });
});