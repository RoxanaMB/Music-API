import {Document} from 'mongoose';

export interface SongInterface extends Document {
  title: string,
  author: string,
  duration: string,
  genre: string,
  single: boolean,
  reproductions: number
}

export interface ArtistInterface extends Document {
  name: string,
  genre: [string],
  songs: [string],
  monthlyListeners: number
}

export interface PlaylistInterface extends Document {
  name: string,
  songs: [string],
  duration: string,
  genre: [string],
}