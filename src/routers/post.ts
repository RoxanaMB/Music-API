import * as express from 'express';
import {Artist} from '../models/artist';
import {Playlist} from '../models/playlist';
import {Song} from '../models/song';

// eslint-disable-next-line new-cap
export const postRouter = express.Router();

postRouter.post('/artist', async (req, res) => {
  try {
    const artist = new Artist(req.body);
    await artist.save();
    res.status(201).send(artist);
  } catch (err) {
    res.status(400).send(err);
  }
});

postRouter.post('/playlist', async (req, res) => {
  try {
    const playlist = new Playlist(req.body);
    await playlist.save();
    res.status(201).send(playlist);
  } catch (err) {
    res.status(400).send(err);
  }
});

postRouter.post('/song', async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).send(song);
  } catch (err) {
    res.status(400).send(err);
  }
});