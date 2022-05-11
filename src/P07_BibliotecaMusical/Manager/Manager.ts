import {DB} from '../DB/DB';
import * as Inquirer from 'inquirer';

// Singleton class for database management
export class Manager {
  private db: DB;
  private inquirer: Inquirer.Inquirer;
  private username: string;
  private playlists: {name: string,
                      songs: string[],
                      duration: string,
                      genres: string[],
                      creator: string}[];

  constructor() {
    this.db = DB.getInstance();
    this.inquirer = Inquirer;
    this.username = '';
    this.playlists = [];
  }
  /**
   * Start the manager and show the menu
   * @returns {Promise<void>}
   */
  public async start(): Promise<void> {
    process.stdout.write('\x1Bc');
    const menu = await this.inquirer.prompt([
      {
        type: 'Input',
        name: 'username',
        message: 'What is your username?',
      },
    ]);
    console.log(`Welcome ${menu.username}`);
    this.username = menu.username;
    this.showMenu();
  }

  /**
   * show the menu and handle the user input
   * @returns {Promise<void>}
   */
  private async showMenu(): Promise<void> {
    process.stdout.write('\x1Bc');
    const menu = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'menu',
        message: 'What do you want to do?',
        choices: [
          'Preview all the playlists in the database',
          'Add a new playlist',
          'Remove a playlist',
          'Save a playlist',
          'Sign out',
          'Exit',
        ],
      },
    ]);

    switch (menu.menu) {
      case 'Preview all the playlists in the database':
        this.showPlaylists();
        break;
      case 'Add a new playlist':
        this.addPlaylist();
        break;
      case 'Remove a playlist':
        this.removePlaylist();
        break;
      case 'Save a playlist':
        this.savePlaylist();
        break;
      case 'Sign out':
        this.start();
        break;
      case 'Exit':
        break;
    }
  }

  /**
   * Show all the playlists in the database
   * @returns {Promise<void>}
   */
  private async showPlaylists(): Promise<void> {
    process.stdout.write('\x1Bc');
    const dbPlaylists = this.db.getPlaylists();
    console.log(`Playlists in the database:`);
    dbPlaylists.forEach((playlist: {name: string,
                                    songs: string[],
                                    duration: string,
                                    genres: string[]}) => {
      console.log('\x1b[032m' + `${playlist.name}` + '\x1b[0m');
      playlist.songs.forEach((song: string) => {
        console.log(`\t${song}`);
      });
      // eslint-disable-next-line max-len
      console.log('\x1b[032m' + '\tDuration:' + '\x1b[0m' + `${playlist.duration}`);
      // eslint-disable-next-line max-len
      console.log('\x1b[032m' + '\tGenres:' + '\x1b[0m' + `${playlist.genres}\n`);
    });
    console.log('\x1b[032m' + '\nPlaylists not saved yet:' + '\x1b[0m');
    this.playlists.forEach((playlist: {name: string,
                                       songs: string[],
                                       duration: string,
                                       genres: string[]}) => {
      console.log('\x1b[032m' + `${playlist.name}` + '\x1b[0m');
      playlist.songs.forEach((song: string) => {
        console.log(`\t${song}`);
      });
      // eslint-disable-next-line max-len
      console.log('\x1b[032m' + '\tDuration:' + '\x1b[0m' + `${playlist.duration}`);
      // eslint-disable-next-line max-len
      console.log('\x1b[032m' + '\tGenres:' + '\x1b[0m' + `${playlist.genres}\n`);
    });
    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press enter to continue',
      },
    ]);
    this.showMenu();
  }

  /**
   * Add a new playlist to the cache
   * @returns {Promise<void>}
   */
  private async addPlaylist(): Promise<void> {
    process.stdout.write('\x1Bc');
    const name = await this.inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the playlist?',
      },
    ]);
    const allSongs = this.db.getSongs();
    const songsNames = allSongs.map((song: {name: string,
                                            duration: string,
                                            genres: string[]}) => {
      return song.name;
    });
    const songs = await this.inquirer.prompt([
      {
        type: 'checkbox',
        name: 'songs',
        message: 'What songs do you want to add?',
        choices: songsNames,
      },
    ]);

    const songsDuration = allSongs.filter((song: {
      name: string,
      duration: string,
      genres: string[]}) => {
      return songs.songs.includes(song.name);
    });
    const durationStrings = songsDuration.map((song: {
      name: string,
      duration: string,
      genres: string[]}) => {
      return song.duration;
    });
    let seconds = durationStrings.reduce((acc: number, curr: string) => {
      const [min, sec] = curr.split(':');
      return acc + parseInt(min, 10) * 60 + parseInt(sec, 10);
    }, 0);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    const duration = `${hours}:${minutes}:${seconds}`;

    let genres = allSongs.filter((song: {
      name: string,
      duration: string,
      genres: string[]}) => {
      return songs.songs.includes(song.name);
    }).reduce((acc: string[], song: {
      name: string,
      duration: string,
      genres: string[]}) => {
      return acc.concat(song.genres);
    }, []);
    genres = genres.filter((genre: string, index: number, self: string[]) => {
      return self.indexOf(genre) === index;
    });

    console.log(`\x1b[032m\n'${name.name}'\x1b[0m`);
    songs.songs.forEach((song: string) => {
      console.log(`\t${song}`);
    });
    console.log('\x1b[032m' + '\tDuration:' + '\x1b[0m' + `${duration}`);
    console.log('\x1b[032m' + '\tGenres:' + '\x1b[0m' + `${genres}\n`);
    console.log('\x1b[032m' + '\tCreator:' + '\x1b[0m' + `${this.username}\n`);

    const JSON = {
      name: name.name,
      songs: songs.songs,
      duration: duration,
      genres: genres,
      creator: this.username,
    };
    this.playlists.push(JSON);

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press enter to continue',
      },
    ]);
    this.showMenu();
  }

  /**
   * Save a playlist in the cache
   * @returns {Promise<void>}
   */
  private async savePlaylist(): Promise<void> {
    process.stdout.write('\x1Bc');
    const availablePlaylists = this.playlists.filter((playlist: {
      name: string,
      songs: string[],
      duration: string,
      genres: string[],
      creator: string}) => {
      return playlist.creator === this.username;
    });

    const choices = await this.inquirer.prompt([
      {
        type: 'checkbox',
        name: 'playlists',
        message: 'Which playlists do you want to save?',
        choices: availablePlaylists.map((playlist: {
          name: string,
          songs: string[],
          duration: string,
          genres: string[],
          creator: string}) => {
          return playlist.name;
        }),
      },
    ]);

    const playlists = availablePlaylists.filter((playlist: {
      name: string,
      songs: string[],
      duration: string,
      genres: string[],
      creator: string}) => {
      return choices.playlists.includes(playlist.name);
    });

    const JSON = playlists.map((playlist: {
      name: string,
      songs: string[],
      duration: string,
      genres: string[],
      creator: string}) => {
      return {
        name: playlist.name,
        songs: playlist.songs,
        duration: playlist.duration,
        genres: playlist.genres,
        creator: playlist.creator,
      };
    });

    for (const playlist of JSON) {
      this.db.addPlaylist(playlist);
    }

    for (const playlist of this.playlists) {
      if (playlist.creator === this.username) {
        this.playlists.splice(this.playlists.indexOf(playlist), 1);
      }
    }

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press enter to continue',
      },
    ]);
    this.showMenu();
  }

  /**
   * Remove a playlist from the cache
   * @returns {Promise<void>}
   */
  private async removePlaylist(): Promise<void> {
    const availablePlaylists = this.playlists.filter((playlist: {
      name: string,
      songs: string[],
      duration: string,
      genres: string[],
      creator: string}) => {
      return playlist.creator === this.username;
    });
    const dbPlaylists = this.db.getPlaylists();
    for (const playlist of dbPlaylists) {
      if (playlist.creator === this.username) {
        availablePlaylists.push(playlist);
      }
    }

    const choices = await this.inquirer.prompt([
      {
        type: 'checkbox',
        name: 'playlists',
        message: 'Which playlists do you want to remove?',
        choices: availablePlaylists.map((playlist: {
          name: string,
          songs: string[],
          duration: string,
          genres: string[],
          creator: string}) => {
          return playlist.name;
        }),
      },
    ]);

    const playlists = availablePlaylists.filter((playlist: {
      name: string,
      songs: string[],
      duration: string,
      genres: string[],
      creator: string}) => {
      return choices.playlists.includes(playlist.name);
    });

    for (const playlist of playlists) {
      if (this.playlists.indexOf(playlist) === -1) {
        this.db.removePlaylist(playlist.name);
      } else {
        this.playlists.splice(this.playlists.indexOf(playlist), 1);
      }
    }

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press enter to continue',
      },
    ]);
    this.showMenu();
  }
}

export function main(): void {
  const manager = new Manager();
  manager.start();
}