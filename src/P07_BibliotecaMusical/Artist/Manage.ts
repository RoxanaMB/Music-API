import {Nameable} from '../Nameable/Nameable';
import {MusicalGenresManage} from '../MusicalGenres/MusicalGenresManage';
import {SongManage} from '../Song/SongManage';
import {GroupManage} from '../Group/GroupManage';
import {AlbumManage} from '../Album/AlbumManage';

/**
 * Manage interface for the Manage class
 */
export interface Manage extends Nameable,
                                MusicalGenresManage,
                                SongManage,
                                GroupManage,
                                AlbumManage {}
