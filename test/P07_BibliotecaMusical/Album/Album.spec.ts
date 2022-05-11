/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Album} from '../../../src/P07_BibliotecaMusical/Album/Album';
import {Group} from '../../../src/P07_BibliotecaMusical/Group/Group';
import {Artist} from '../../../src/P07_BibliotecaMusical/Artist/Artist';
import {Song} from '../../../src/P07_BibliotecaMusical/Song/Song';
import {MusicalGenres} from '../../../src/P07_BibliotecaMusical/MusicalGenres/MusicalGenres';

describe('Album class - Test', () => {
  let theWeeknd: Artist;

  let danwFM: Album;

  let song1: Song;
  let sacrifice: Song;
  let outOfTime: Song;

  let group1: Group;

  let musicalGenreRB: MusicalGenres;
  let musicalGenre01: MusicalGenres;

  beforeEach(() => {
    group1 = new Group('Group1', [], 2022, [], [], 10);
    sacrifice = new Song('Sacrifice', theWeeknd, '3.08', [musicalGenreRB], false, 148302453);
    outOfTime = new Song('Out Of Time', theWeeknd, '3.34', [musicalGenreRB], false, 6100242);
    song1 = new Song('song1', theWeeknd, '0.00', [musicalGenre01], true, 8908);
    musicalGenreRB = new MusicalGenres('rb', [theWeeknd], [], [danwFM], [sacrifice, outOfTime]);
    musicalGenre01 = new MusicalGenres('rock', [], [], [], []);
    danwFM = new Album('Danw FM', theWeeknd, 2022, [musicalGenreRB], [sacrifice, outOfTime]);
    theWeeknd = new Artist('Theweeknd', [], [musicalGenreRB], [danwFM], [sacrifice], 77841866);
  });

  it('getName() return the name of the album', () => {
    expect(danwFM.getName).to.exist;
    expect(danwFM.getName).to.be.a('function');
    expect(danwFM.getName()).to.be.equal('Danw FM');
  });

  it('setName() modify the name of the album', () => {
    expect(danwFM.setName).to.exist;
    expect(danwFM.setName).to.be.a('function');
    danwFM.setName('After Hours');
    expect(danwFM.getName()).to.be.equal('After Hours');
  });

  it('getAuthor() return if the album was published by artist or by group', () => {
    expect(danwFM.getAuthor).to.exist;
    expect(danwFM.getAuthor).to.be.a('function');
    expect(danwFM.getAuthor()).to.be.instanceOf(Artist);
  });

  it('setAuthor() modify the album was published by artist or by group', () => {
    expect(danwFM.setAuthor).to.exist;
    expect(danwFM.setAuthor).to.be.a('function');
    danwFM.setAuthor(group1);
    expect(danwFM.getAuthor()).to.be.instanceOf(Group);
  });

  it('getYear() return the published year of the album', () => {
    expect(danwFM.getYear).to.exist;
    expect(danwFM.getYear).to.be.a('function');
    expect(danwFM.getYear()).to.be.equal(2022);
  });

  it('setYear() modify the published year of the album', () => {
    expect(danwFM.setYear).to.exist;
    expect(danwFM.setYear).to.be.a('function');
    danwFM.setYear(2020);
    expect(danwFM.getYear()).to.be.equal(2020);
  });

  it('getGenre() return genres list of the album', () => {
    expect(danwFM.getGenres).to.exist;
    expect(danwFM.getGenres).to.be.a('function');
    expect(danwFM.getGenres()).to.deep.equal([musicalGenreRB]);
  });

  it('setGenre() modified genre in album genre list', () => {
    expect(danwFM.setGenres).to.exist;
    expect(danwFM.setGenres).to.be.a('function');
    danwFM.setGenres([musicalGenre01]);
    expect(danwFM.getGenres()).to.deep.equal([musicalGenre01]);
  });

  it('addGenre() genre added on album', () => {
    const musicalGenrePop: MusicalGenres = new MusicalGenres('pop', [theWeeknd], [], [danwFM], [sacrifice, outOfTime]);
    expect(danwFM.addGenre).to.exist;
    expect(danwFM.addGenre).to.be.a('function');
    danwFM.addGenre(musicalGenrePop);
    expect(danwFM.getGenres()).to.deep.equal([musicalGenreRB, musicalGenrePop]);
    expect(danwFM.getGenres().length).to.be.equal(2);
  });

  it('removeGenre() genre removed on album', () => {
    const danwFM2: Album = new Album('Danw FM', group1, 2022, [musicalGenreRB], []);
    expect(danwFM.removeGenre).to.exist;
    expect(danwFM2.removeGenre).to.exist;
    expect(danwFM.removeGenre).to.be.a('function');
    expect(danwFM2.removeGenre).to.be.a('function');
    danwFM.removeGenre('rb');
    danwFM2.removeGenre('pop');
    expect(danwFM.getGenres()).to.deep.equal([]);
    expect(danwFM2.getGenres()).to.deep.equal([musicalGenreRB]);
    expect(danwFM.getGenres().length).to.be.equal(0);
    expect(danwFM2.getGenres().length).to.be.equal(1);
  });

  it('getSongs() return the songs of the album', () => {
    expect(danwFM.getSongs).to.exist;
    expect(danwFM.getSongs).to.be.a('function');
    expect(danwFM.getSongs()).to.deep.equal([sacrifice, outOfTime]);
  });

  it('setSongs() modified song list', () => {
    expect(danwFM.setSongs).to.exist;
    expect(danwFM.setSongs).to.be.a('function');
    danwFM.setSongs([song1]);
    expect(danwFM.getSongs()).to.deep.equal([song1]);
  });

  it('addSongs() added song in song list', () => {
    const song2: Song = new Song('song2', theWeeknd, '2.00', [], true, 90);
    expect(danwFM.addSong).to.exist;
    expect(danwFM.addSong).to.be.a('function');
    danwFM.addSong(song2);
    expect(danwFM.getSongs()).to.deep.equal([sacrifice, outOfTime, song2]);
    expect(danwFM.getSongs().length).to.be.equal(3);
  });

  it('removeSongs() removed song in song list', () => {
    const danwFM2: Album = new Album('Danw FM', group1, 2022, [], [sacrifice, outOfTime]);
    expect(danwFM.removeSong).to.exist;
    expect(danwFM2.removeSong).to.exist;
    expect(danwFM.removeSong).to.be.a('function');
    expect(danwFM2.removeSong).to.be.a('function');
    danwFM.removeSong('Sacrifice');
    danwFM2.removeSong('song1');
    expect(danwFM.getSongs()).to.deep.equal([outOfTime]);
    expect(danwFM2.getSongs()).to.deep.equal([sacrifice, outOfTime]);
    expect(danwFM.getSongs().length).to.be.equal(1);
    expect(danwFM2.getSongs().length).to.be.equal(2);
  });
});
