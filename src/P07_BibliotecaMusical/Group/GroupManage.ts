import {Group} from './Group';

/**
 * Interface to manage methods
 */
export interface GroupManage {
  getGroups(): Group[];
  setGroups(Groups: Group[]): void;
  addGroup(Group: Group): void;
  removeGroup(Group: string): void;
}
