import {Nameable} from '../Nameable/Nameable';
import {SongManage} from '../Song/SongManage';
import {GroupManage} from '../Group/GroupManage';
import {AlbumManage} from '../Album/AlbumManage';
import {ArtistManage} from '../Artist/ArtistManage';

/**
 * Manage interface for the Manage class
 */
export interface Manage extends Nameable,
                                SongManage,
                                GroupManage,
                                AlbumManage,
                                ArtistManage {}
