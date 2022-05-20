import {Document, model} from 'mongoose';

import {Schema} from 'mongoose';

interface SongInterface extends Document {
  title: string,
  artist: string,
  duration: string,
  genre: string,
  single: boolean,
  reproductions: number
}

const SongSchema = new Schema<SongInterface>({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Artist',
  },
  duration: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  single: {
    type: Boolean,
    required: true,
    trim: true,
  },
  reproductions: {
    type: Number,
    default: 0,
    trim: true,
  },
});

export const Song = model<SongInterface>('Song', SongSchema);