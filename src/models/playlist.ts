import {Document, model} from 'mongoose';
import {Schema} from 'mongoose';

interface PlaylistInterface extends Document {
  name: string,
  songs: [string],
  duration: string,
  genre: [string],
}

const PlaylistSchema = new Schema<PlaylistInterface>({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  songs: {
    type: [String],
    required: false,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: [String],
    required: true,
    trim: true,
  },
});

export const Playlist = model<PlaylistInterface>('Playlist', PlaylistSchema);