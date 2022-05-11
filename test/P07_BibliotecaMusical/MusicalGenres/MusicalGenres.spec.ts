/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Song} from '../../../src/P07_BibliotecaMusical/Song/Song';
import {Artist} from '../../../src/P07_BibliotecaMusical/Artist/Artist';
import {Album} from '../../../src/P07_BibliotecaMusical/Album/Album';
import {Group} from '../../../src/P07_BibliotecaMusical/Group/Group';
import {MusicalGenres} from '../../../src/P07_BibliotecaMusical/MusicalGenres/MusicalGenres';

describe('MusicalGenres class - Tests', () => {
  let song1: Song;
  let song2: Song;
  let song3: Song;

  let artist1: Artist;
  let artist2: Artist;
  let artist3: Artist;

  let album1: Album;
  let album2: Album;
  let album3: Album;

  let group1: Group;
  let group2: Group;

  let genre: MusicalGenres;
  let genre2: MusicalGenres;

  beforeEach(() => {
    song1 = new Song('song1', artist1, '3:00', [genre], false, 1000);
    song2 = new Song('song2', artist1, '2:50', [genre], true, 5000);
    song3 = new Song('song3', artist1, '3:12', [genre], false, 3000);
    artist1 = new Artist('artist1', [group1], [genre], [album1], [song1, song2], 50000);
    artist2 = new Artist('artist2', [group2], [genre2], [album2], [song3], 50000);
    artist3 = new Artist('artist3', [group1], [genre], [album3], [song1, song2], 50000);
    album1 = new Album('album1', group1, 2000, [genre], [song1, song2]);
    album2 = new Album('album2', group2, 2015, [genre2], [song3]);
    album3 = new Album('album3', group1, 2000, [genre], [song1, song2]);
    group1 = new Group('group1', [artist1, artist3], 2000, [genre], [album1, album3], 5000);
    group2 = new Group('group2', [artist2], 2015, [genre2], [album2], 5000);
    genre = new MusicalGenres('genre', [artist1, artist3], [group1], [album1, album3], [song1, song2]);
    genre2 = new MusicalGenres('genre2', [artist2], [group2], [album2], [song3]);
  });

  it('getName() returns the name of the genre', () => {
    expect(genre.getName()).to.be.equal('genre');
    expect(genre2.getName()).to.be.equal('genre2');
    expect(genre.getName()).to.not.be.equal('genre2');
  });

  it('setName() sets the name of the genre', () => {
    genre.setName('genre3');
    expect(genre.getName()).to.be.equal('genre3');
    expect(genre.getName()).to.not.be.equal('genre');
  });

  it('getArtistss() returns the artists of the genre for genre', () => {
    expect(genre.getArtists()).to.deep.equal([artist1, artist3]);
    expect(genre.getArtists()).to.not.deep.equal([artist2]);
  });

  it('setArtists() sets the artists of the genre', () => {
    genre.setArtists([artist2]);
    expect(genre.getArtists()).to.deep.equal([artist2]);
    expect(genre.getArtists()).to.not.deep.equal([artist1]);
  });

  it('addArtist() adds an artist to the genre', () => {
    genre.addArtist(artist2);
    expect(genre.getArtists()).to.deep.equal([artist1, artist3, artist2]);
    expect(genre.getArtists()).to.not.deep.equal([artist2]);
  });

  it('removeArtist() removes an artist from the genre', () => {
    genre.removeArtist('Rihanna');
    expect(genre.getArtists()).to.deep.equal([artist1, artist3]);
    genre.removeArtist(artist1.getName());
    expect(genre.getArtists()).to.deep.equal([artist3]);
    expect(genre.getArtists()).to.not.deep.equal([artist1]);
  });

  it('getGroupss() returns the groups of the genre for genre', () => {
    expect(genre.getGroups()).to.deep.equal([group1]);
    expect(genre.getGroups()).to.not.deep.equal([group2]);
  });

  it('setGroupss() sets the groups of the genre', () => {
    genre.setGroups([group2]);
    expect(genre.getGroups()).to.deep.equal([group2]);
    expect(genre.getGroups()).to.not.deep.equal([group1]);
  });

  it('addGroup() adds a group to the genre', () => {
    genre.addGroup(group2);
    expect(genre.getGroups()).to.be.eqls([group1, group2]);
    expect(genre.getGroups()).to.not.be.eqls([group2]);
  });

  it('removeGroup() removes a group from the genre', () => {
    genre.removeGroup('G10');
    expect(genre.getGroups()).to.deep.equal([group1]);
    genre.removeGroup(group1.getName());
    expect(genre.getGroups()).to.deep.equal([]);
  });

  it('getAlbums() returns the albums of the genre for genre', () => {
    expect(genre.getAlbums()).to.deep.equal([album1, album3]);
    expect(genre.getAlbums()).to.not.deep.equal([album2]);
  });

  it('setAlbums() sets the albums of the genre for genre', () => {
    genre.setAlbums([album2]);
    expect(genre.getAlbums()).to.deep.equal([album2]);
    expect(genre.getAlbums()).to.not.deep.equal([album1, album3]);
  });

  it('addAlbum() adds an album to the genre', () => {
    genre.addAlbum(album2);
    expect(genre.getAlbums()).to.deep.equal([album1, album3, album2]);
    expect(genre.getAlbums()).to.not.deep.equal([album2]);
  });

  it('removeAlbum() removes an album from the genre', () => {
    genre.removeAlbum('A10');
    expect(genre.getAlbums()).to.deep.equal([album1, album3]);
    genre.removeAlbum(album1.getName());
    expect(genre.getAlbums()).to.deep.equal([album3]);
    expect(genre.getAlbums()).to.not.deep.equal([album1]);
  });

  it('getSongs() returns the songs of the genre for genre', () => {
    expect(genre.getSongs()).to.deep.equal([song1, song2]);
    expect(genre.getSongs()).to.not.deep.equal([song3]);
  });

  it('setSongs() sets the songs of the genre for genre', () => {
    genre.setSongs([song3]);
    expect(genre.getSongs()).to.deep.equal([song3]);
    expect(genre.getSongs()).to.not.deep.equal([song1, song2]);
  });

  it('addSong() adds a song to the genre', () => {
    genre.addSong(song3);
    expect(genre.getSongs()).to.deep.equal([song1, song2, song3]);
    expect(genre.getSongs()).to.not.deep.equal([song3]);
  });

  it('removeSong() removes a song from the genre', () => {
    genre.removeSong('S10');
    expect(genre.getSongs()).to.deep.equal([song1, song2]);
    genre.removeSong(song1.getName());
    expect(genre.getSongs()).to.deep.equal([song2]);
    expect(genre.getSongs()).to.not.deep.equal([song1]);
  });
});