/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../../src/P07_BibliotecaMusical/Artist/Artist';
import {Song} from '../../../src/P07_BibliotecaMusical/Song/Song';
import {MusicalGenres} from '../../../src/P07_BibliotecaMusical/MusicalGenres/MusicalGenres';
import {Album} from '../../../src/P07_BibliotecaMusical/Album/Album';
import {Playlist} from '../../../src/P07_BibliotecaMusical/Playlist/Playlist';

describe('Playlist class - Tests', () => {
  let danwFM: Album;
  let hollywoodsBleeding: Album;

  let postMalone: Artist;
  let theWeeknd: Artist;

  let musicalGenreRB: MusicalGenres;
  let musicalGenreHipHop: MusicalGenres;
  let musicalGenre01: MusicalGenres;

  let playlist: Playlist;

  let sacrifice: Song;
  let outOfTime: Song;
  let circles: Song;
  let dieForMe: Song;
  let song1: Song;

  beforeEach(() => {
    sacrifice = new Song('Sacrifice', theWeeknd, '3.08', [musicalGenreRB], false, 148302453);
    outOfTime = new Song('Out Of Time', theWeeknd, '3.34', [musicalGenreRB], false, 6100242);
    dieForMe = new Song('Die for Me', postMalone, '4.05', [musicalGenreHipHop], false, 4762913);
    circles = new Song('Circles', postMalone, '2.36', [musicalGenreHipHop], false, 58846386);
    song1 = new Song('song1', theWeeknd, '0.00', [], true, 8908);
    danwFM = new Album('Danw FM', theWeeknd, 2022, [musicalGenreRB], [sacrifice, outOfTime]);
    hollywoodsBleeding = new Album('Hollywoods Bledding', postMalone, 2019, [musicalGenreHipHop], [circles, dieForMe]);
    musicalGenreRB = new MusicalGenres('rb', [theWeeknd], [], [danwFM], [sacrifice, outOfTime]);
    musicalGenreHipHop = new MusicalGenres('hip hop', [theWeeknd, postMalone], [], [danwFM, hollywoodsBleeding], [sacrifice, outOfTime, circles, dieForMe]);
    musicalGenre01 = new MusicalGenres('rock', [], [], [], []);
    theWeeknd = new Artist('Theweeknd', [], [musicalGenreRB], [danwFM], [sacrifice], 77841866);
    postMalone = new Artist('Post Malone', [], [musicalGenreHipHop], [hollywoodsBleeding], [circles, dieForMe], 45638017);
    playlist = new Playlist('playlist1', [circles, dieForMe, outOfTime, sacrifice], '13.23', [musicalGenreHipHop, musicalGenreRB]);
  });

  it('getName() return the name of the playlist', () => {
    expect(playlist.getName).to.exist;
    expect(playlist.getName).to.be.a('function');
    expect(playlist.getName()).to.be.equal('playlist1');
  });

  it('setName() modify the name of the playlist', () => {
    expect(playlist.setName).to.exist;
    expect(playlist.setName).to.be.a('function');
    playlist.setName('Playlist2');
    expect(playlist.getName()).to.be.equal('Playlist2');
  });

  it('getSongs() return the songs of the playlist', () => {
    expect(playlist.getSongs).to.exist;
    expect(playlist.getSongs).to.be.a('function');
    expect(playlist.getSongs()).to.deep.equal([circles, dieForMe, outOfTime, sacrifice]);
  });

  it('setSongs() modified song list', () => {
    expect(playlist.setSongs).to.exist;
    expect(playlist.setSongs).to.be.a('function');
    playlist.setSongs([song1]);
    expect(playlist.getSongs()).to.deep.equal([song1]);
  });

  it('addSong() added song in song list', () => {
    const song2: Song = new Song('song2', theWeeknd, '2.00', [], true, 90);
    expect(playlist.addSong).to.exist;
    expect(playlist.addSong).to.be.a('function');
    playlist.addSong(song2);
    expect(playlist.getSongs()).to.deep.equal([circles, dieForMe, outOfTime, sacrifice, song2]);
    expect(playlist.getSongs().length).to.be.equal(5);
  });

  it('removeSong() removed song in song list', () => {
    const playlist2 = new Playlist('Playlist 2', [], '', []);
    expect(playlist.removeSong).to.exist;
    expect(playlist2.removeSong).to.exist;
    expect(playlist.removeSong).to.be.a('function');
    expect(playlist2.removeSong).to.be.a('function');
    playlist.removeSong('Sacrifice');
    playlist2.removeSong('Circles');
    expect(playlist.getSongs()).to.deep.equal([circles, dieForMe, outOfTime]);
    expect(playlist2.getSongs()).to.deep.equal([]);
    expect(playlist.getSongs().length).to.be.equal(3);
    expect(playlist2.getSongs().length).to.be.equal(0);
  });

  it('getDuration() return the duration of the playlist', () => {
    expect(playlist.getDuration).to.exist;
    expect(playlist.getDuration).to.be.a('function');
    expect(playlist.getDuration()).to.deep.equal('13.23');
  });

  it('setDuration() modified duration of the playlist', () => {
    expect(playlist.setDuration).to.exist;
    expect(playlist.setDuration).to.be.a('function');
    playlist.setDuration('5.00');
    expect(playlist.getDuration()).to.deep.equal('5.00');
  });

  it('getGenres() return genres of the playlist', () => {
    expect(playlist.getGenres).to.exist;
    expect(playlist.getGenres).to.be.a('function');
    expect(playlist.getGenres()).to.deep.equal([musicalGenreHipHop, musicalGenreRB]);
  });

  it('setGenres() modified genres on playlist', () => {
    expect(playlist.setGenres).to.exist;
    expect(playlist.setGenres).to.be.a('function');
    playlist.setGenres([musicalGenre01]);
    expect(playlist.getGenres()).to.deep.equal([musicalGenre01]);
  });

  it('addGenre() genre added on playlist', () => {
    const musicalGenrePop: MusicalGenres = new MusicalGenres('pop', [theWeeknd], [], [danwFM], [sacrifice]);
    expect(playlist.addGenre).to.exist;
    expect(playlist.addGenre).to.be.a('function');
    playlist.addGenre(musicalGenrePop);
    expect(playlist.getGenres()).to.deep.equal([musicalGenreHipHop, musicalGenreRB, musicalGenrePop]);
    expect(playlist.getGenres().length).to.be.equal(3);
  });

  it('removeGenre() genre removed on playlist', () => {
    const playlist2: Playlist = new Playlist('Playlist 2', [circles], '0.00', [musicalGenre01]);
    expect(playlist.removeGenre).to.exist;
    expect(playlist2.removeGenre).to.exist;
    expect(playlist.removeGenre).to.be.a('function');
    expect(playlist2.removeGenre).to.be.a('function');
    playlist.removeGenre('rb');
    playlist2.removeGenre('pop');
    expect(playlist.getGenres()).to.deep.equal([musicalGenreHipHop]);
    expect(playlist2.getGenres()).to.deep.equal([musicalGenre01]);
    expect(playlist.getGenres().length).to.be.equal(1);
    expect(playlist2.getGenres().length).to.be.equal(1);
  });
});
