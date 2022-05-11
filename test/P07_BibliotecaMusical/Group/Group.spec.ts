/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Group} from '../../../src/P07_BibliotecaMusical/Group/Group';
import {Artist} from '../../../src/P07_BibliotecaMusical/Artist/Artist';
import {MusicalGenres} from '../../../src/P07_BibliotecaMusical/MusicalGenres/MusicalGenres';
import {Album} from '../../../src/P07_BibliotecaMusical/Album/Album';
import {Song} from '../../../src/P07_BibliotecaMusical/Song/Song';


describe('Group class - Tests', () => {
  let groups: Group;

  let artists_: Artist;

  let musicalGenre: MusicalGenres;

  let album1: Album;
  let album2: Album;
  let albums: Album[];

  let song1: Song;
  let song2: Song;
  let song3: Song;
  let songs: Song[];

  beforeEach(() => {
    musicalGenre = new MusicalGenres('Pop', [artists_], [groups], albums, songs);
    album1 = new Album('A1', groups, 2000, [musicalGenre], [song1, song2]);
    album2 = new Album('A2', artists_, 2015, [musicalGenre], [song3]);
    albums = [album1, album2];
    song1 = new Song('S1', artists_, '3:00', [musicalGenre], false, 1000);
    song2 = new Song('S2', artists_, '2:50', [musicalGenre], true, 5000);
    song3 = new Song('S3', artists_, '3:12', [musicalGenre], false, 3000);
    songs = [song1, song2, song3];
    artists_ = new Artist('Beyonce', [groups], [musicalGenre], albums, songs, 50000);
    groups = new Group('G1', [artists_], 2000, [musicalGenre], albums, 5000);
  });

  it('getName() return the name of the group', () => {
    expect(groups.getName).to.exist;
    expect(groups.getName).to.be.a('function');
    expect(groups.getName()).to.be.equal('G1');
  });

  it('setName() sets the name of the group', () => {
    expect(groups.setName).to.exist;
    expect(groups.setName).to.be.a('function');
    groups.setName('test');
    expect(groups.getName()).to.be.equal('test');
  });

  it('getArtists() return the artists of the group', () => {
    expect(groups.getArtists).to.exist;
    expect(groups.getArtists).to.be.a('function');
    expect(groups.getArtists()).to.be.deep.equal([artists_]);
  });

  it('setArtists() sets the artists of the group', () => {
    const artist = new Artist('Rihanna', [], [], [], [], 0);
    expect(groups.setArtists).to.exist;
    expect(groups.setArtists).to.be.a('function');
    groups.setArtists([artist]);
    expect(groups.getArtists()).to.be.deep.equal([artist]);
  });

  it('addArtist() add a new artist', () => {
    const artist = new Artist('Rihanna', [], [], [], [], 0);
    expect(groups.addArtist).to.exist;
    expect(groups.addArtist).to.be.a('function');
    groups.addArtist(artist);
    expect(groups.getArtists()).to.be.deep.equal([artists_, artist]);
    expect(groups.getArtists().length).to.be.equal(2);
  });

  it('removeArtist() remove an artist', () => {
    expect(groups.removeArtist).to.exist;
    expect(groups.removeArtist).to.be.a('function');
    groups.removeArtist('Rihanna');
    expect(groups.getArtists()).to.be.deep.equal([artists_]);
    expect(groups.getArtists().length).to.be.equal(1);
    groups.removeArtist('Beyonce');
    expect(groups.getArtists()).to.be.deep.equal([]);
    expect(groups.getArtists().length).to.be.equal(0);
  });

  it('getCreationDate() return the creation date of the group', () => {
    expect(groups.getCreationYear).to.exist;
    expect(groups.getCreationYear).to.be.a('function');
    expect(groups.getCreationYear()).to.be.equal(2000);
  });

  it('setCreationDate() sets the creation date of the group', () => {
    expect(groups.setCreationYear).to.exist;
    expect(groups.setCreationYear).to.be.a('function');
    groups.setCreationYear(2001);
    expect(groups.getCreationYear()).to.be.equal(2001);
  });

  it('getGenres() return the musical genres of the group', () => {
    expect(groups.getGenres).to.exist;
    expect(groups.getGenres).to.be.a('function');
    expect(groups.getGenres()).to.be.deep.equal([musicalGenre]);
  });

  it('setGenres() sets the musical genres of the group', () => {
    const genre = new MusicalGenres('Rock', [], [], [], []);
    expect(groups.setGenres).to.exist;
    expect(groups.setGenres).to.be.a('function');
    groups.setGenres([genre]);
    expect(groups.getGenres()).to.be.deep.equal([genre]);
  });

  it('addGenre() add a new musical genre', () => {
    const genre = new MusicalGenres('Rock', [], [], [], []);
    expect(groups.addGenre).to.exist;
    expect(groups.addGenre).to.be.a('function');
    groups.addGenre(genre);
    expect(groups.getGenres()).to.be.deep.equal([musicalGenre, genre]);
    expect(groups.getGenres().length).to.be.equal(2);
  });

  it('removeGenre() remove a musical genre', () => {
    expect(groups.removeGenre).to.exist;
    expect(groups.removeGenre).to.be.a('function');
    groups.removeGenre('Rock');
    expect(groups.getGenres()).to.be.deep.equal([musicalGenre]);
    expect(groups.getGenres().length).to.be.equal(1);
    groups.removeGenre('Pop');
    expect(groups.getGenres()).to.be.deep.equal([]);
    expect(groups.getGenres().length).to.be.equal(0);
  });

  it('getAlbums() return the albums of the group', () => {
    expect(groups.getAlbums).to.exist;
    expect(groups.getAlbums).to.be.a('function');
    expect(groups.getAlbums()).to.be.deep.equal([albums[0], albums[1]]);
  });

  it('setAlbums() sets the albums of the group', () => {
    const album = new Album('Album3', artists_, 2000, [musicalGenre], [song1, song2]);
    expect(groups.setAlbums).to.exist;
    expect(groups.setAlbums).to.be.a('function');
    groups.setAlbums([album]);
    expect(groups.getAlbums()).to.be.deep.equal([album]);
  });

  it('addAlbum() add a new album', () => {
    const album = new Album('Album3', artists_, 2000, [musicalGenre], [song1, song2]);
    expect(groups.addAlbum).to.exist;
    expect(groups.addAlbum).to.be.a('function');
    groups.addAlbum(album);
    expect(groups.getAlbums()).to.be.deep.equal([albums[0], albums[1], album]);
    expect(groups.getAlbums().length).to.be.equal(3);
  });

  it('removeAlbum() remove an album', () => {
    expect(groups.removeAlbum).to.exist;
    expect(groups.removeAlbum).to.be.a('function');
    groups.removeAlbum('A4');
    expect(groups.getAlbums()).to.be.deep.equal(albums);
    expect(groups.getAlbums().length).to.be.equal(2);
    groups.removeAlbum('A1');
    expect(groups.getAlbums()).to.be.deep.equal([albums[0]]);
    expect(groups.getAlbums().length).to.be.equal(1);
  });

  it('getNumFollowers() returns the number of followers', () => {
    expect(groups.getNumFollowers).to.exist;
    expect(groups.getNumFollowers).to.be.a('function');
    expect(groups.getNumFollowers()).to.be.equal(5000);
  });

  it('setNumFollowers() sets the number of followers', () => {
    expect(groups.setNumFollowers).to.exist;
    expect(groups.setNumFollowers).to.be.a('function');
    groups.setNumFollowers(2000);
    expect(groups.getNumFollowers()).to.be.equal(2000);
  });
});