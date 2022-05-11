import {Nameable} from '../Nameable/Nameable';
import {MusicalGenresManage} from '../MusicalGenres/MusicalGenresManage';
import {SongManage} from '../Song/SongManage';

/**
 * Manage interface for the Manage class
 */
export interface Manage extends Nameable, MusicalGenresManage, SongManage {}
