import {Document, model} from 'mongoose';
import {Schema} from 'mongoose';

interface ArtistInterface extends Document {
  name: string,
  genre: [string],
  songs: [string],
  monthlyListeners: number
}

const ArtistSchema = new Schema<ArtistInterface>({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  genre: {
    type: [String],
    required: true,
    trim: true,
  },
  songs: {
    type: [String],
    required: false,
    trim: true,
  },
  monthlyListeners: {
    type: Number,
    default: 0,
    trim: true,
  },
});

export const Artist = model<ArtistInterface>('Artist', ArtistSchema);
