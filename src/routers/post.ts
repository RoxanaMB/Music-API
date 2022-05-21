import * as express from 'express';
import {Artist} from '../models/artist';
import {Playlist} from '../models/playlist';
import {Song} from '../models/song';

/**
 * POST / post - Post artists, songs, and playlists.
 */
export const postRouter = express.Router();

/**
 * Post an artist to the database.
 */
postRouter.post('/artist', async (req, res) => {
  try {
    // Create a new artist
    const artist = new Artist(req.body);
    // Save the artist to the database
    await artist.save();
    // Return the artist
    res.status(201).send(artist);
  } catch (err) {
    // Return an error
    res.status(400).send(err);
  }
});

/**
 * Post a playlist to the database.
 */
postRouter.post('/playlist', async (req, res) => {
  try {
    // Create a new playlist
    const playlist = new Playlist(req.body);
    // Save the playlist to the database
    await playlist.save();
    // Return the playlist
    res.status(201).send(playlist);
  } catch (err) {
    // Return an error
    res.status(400).send(err);
  }
});

/**
 * Post a song to the database.
 */
postRouter.post('/song', async (req, res) => {
  try {
    // Create a new song
    const song = new Song(req.body);
    // Save the song to the database
    await song.save();
    // Return the song
    res.status(201).send(song);
  } catch (err) {
    // Return an error
    res.status(400).send(err);
  }
});
