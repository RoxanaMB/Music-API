import {connect, connection, model} from 'mongoose';
import {SongInterface, ArtistInterface, PlaylistInterface} from './interfaces';
import {SongSchema, ArtistSchema, PlaylistSchema} from './schemas';

console.log('Connecting to MongoDB...');

connect('mongodb://127.0.0.1:27017/dsi-12', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch((err: any) => {
  console.log('Error connecting to the database: ' + err);
});


const Song = model<SongInterface>('Song', SongSchema);

const Artist = model<ArtistInterface>('Artist', ArtistSchema);

const Playlist = model<PlaylistInterface>('Playlist', PlaylistSchema);

Artist.findOne({}, (err: any, artist: any) => {
  if (err) {
    console.log(err);
    connection.close();
  } else {
    console.log(artist);
    connection.close();
  }
});
