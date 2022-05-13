import {Schema} from 'mongoose';
import {SongInterface, ArtistInterface, PlaylistInterface} from './interfaces';

export const SongSchema = new Schema<SongInterface>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  single: {
    type: Boolean,
    required: true,
  },
  reproductions: {
    type: Number,
    default: 0,
  },
});

export const ArtistSchema = new Schema<ArtistInterface>({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  songs: {
    type: [String],
    required: false,
  },
  monthlyListeners: {
    type: Number,
    default: 0,
  },
});

export const PlaylistSchema = new Schema<PlaylistInterface>({
  name: {
    type: String,
    required: true,
  },
  songs: {
    type: [String],
    required: false,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
});