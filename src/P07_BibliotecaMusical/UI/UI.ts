import {DB} from '../DB/DB';
import * as Inquirer from 'inquirer';

/**
 * User Interface singleton class
 */
export class UI {
  private db: DB;
  private inquirer: Inquirer.Inquirer;

  constructor() {
    this.db = DB.getInstance();
    this.inquirer = Inquirer;
  }

  /**
   * Main menu
   * @returns {Promise<void>}
   */
  public async showMenu(): Promise<void> {
    process.stdout.write('\x1Bc');
    const menu = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'menu',
        message: 'What do you want to do?',
        choices: [
          'Show songs alphabetically',
          'Show albums alphabetically',
          'Show playlists alphabetically',
          'Show albums by year',
          'Show songs by number of plays',
          'Show only singles',
          'Exit',
        ],
      },
    ]);

    switch (menu.menu) {
      case 'Show songs alphabetically':
        this.showSongsAlphabetically();
        break;
      case 'Show albums alphabetically':
        this.showAlbumsAlphabetically();
        break;
      case 'Show playlists alphabetically':
        this.showPlaylistsAlphabetically();
        break;
      case 'Show albums by year':
        this.showAlbumsByYear();
        break;
      case 'Show songs by number of plays':
        this.showSongsByNumberOfPlays();
        break;
      case 'Show only singles':
        this.showSingles();
        break;
      case 'Exit':
        break;
    }
  }

  /**
   * Show songs alphabetically
   * @returns {Promise<void>}
   */
  private async showSongsAlphabetically(): Promise<void> {
    const ascendent = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'ascendent',
        message: 'Do you want to show songs in ascendent order?',
        choices: ['Yes', 'No'],
      },
    ]);

    const songs = this.db.getSongs();
    if (ascendent.ascendent === 'Yes') {
      songs.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      songs.sort((a, b) => b.name.localeCompare(a.name));
    }

    console.log();
    songs.map((song: any) => console.log('\x1b[032m' + song.name + '\x1b[0m'));
    console.log();

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue',
      },
    ]);

    this.showMenu();
  }

  /**
   * Show albums alphabetically
   * @returns {Promise<void>}
   */
  private async showAlbumsAlphabetically(): Promise<void> {
    const ascendent = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'ascendent',
        message: 'Do you want to show albums in ascendent order?',
        choices: ['Yes', 'No'],
      },
    ]);

    const albums = this.db.getAlbums();
    if (ascendent.ascendent === 'Yes') {
      albums.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      albums.sort((a, b) => b.name.localeCompare(a.name));
    }

    console.log();
    // eslint-disable-next-line max-len
    albums.map((album: any) => console.log('\x1b[032m' + album.name + '\x1b[0m'));
    console.log();

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue',
      },
    ]);

    this.showMenu();
  }

  /**
   * Show playlists alphabetically
   * @returns {Promise<void>}
   */
  private async showPlaylistsAlphabetically(): Promise<void> {
    const ascendent = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'ascendent',
        message: 'Do you want to show playlists in ascendent order?',
        choices: ['Yes', 'No'],
      },
    ]);

    const playlists = this.db.getPlaylists();
    if (ascendent.ascendent === 'Yes') {
      playlists.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      playlists.sort((a, b) => b.name.localeCompare(a.name));
    }

    console.log();
    // eslint-disable-next-line max-len
    playlists.map((playlist: any) => console.log('\x1b[032m' + playlist.name + '\x1b[0m'));
    console.log();

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue',
      },
    ]);

    this.showMenu();
  }

  /**
   * Show albums by year
   * @returns {Promise<void>}
   */
  private async showAlbumsByYear(): Promise<void> {
    const albums = this.db.getAlbums();
    albums.sort((a, b) => a.year - b.year);
    console.log();
    albums.map((album: any) => console.log('\x1b[32m' +
          album.name +'\x1b[36m' + ('.'.repeat(80 -
          album.name.length - album.year.toString().length)) +
          '\x1b[32m' + album.year + '\x1b[0m'));
    console.log();

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue',
      },
    ]);

    this.showMenu();
  }

  /**
   * Show songs by number of plays
   * @returns {Promise<void>}
   */
  private async showSongsByNumberOfPlays(): Promise<void> {
    const songs = this.db.getSongs();
    songs.sort((a, b) => b.numRep - a.numRep);

    console.log();
    songs.map((song: any) => console.log('\x1b[32m' +
        song.name + '\x1b[36m' +
        ('.'.repeat(80 - song.name.length -
        song.numRep.toString().length)) +
        '\x1b[32m' + song.numRep + '\x1b[0m'));
    console.log();

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue',
      },
    ]);

    this.showMenu();
  }

  /**
   * Show singles
   * @return {Promise<void>}
   */
  private async showSingles(): Promise<void> {
    const singles = this.db.getSongs().filter((song: any) => song.isSingle);

    console.log();
    singles.forEach((song: any) => console.log('\x1b[32m' +
        song.name + '\x1b[0m'));
    console.log();

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue',
      },
    ]);

    this.showMenu();
  }
}

export function main(): void {
  const menu = new UI();
  menu.showMenu();
}