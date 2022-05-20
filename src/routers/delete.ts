import * as express from 'express';
import {Artist} from '../models/artist';
import {Song} from '../models/song';
import {Playlist} from '../models/playlist';

// eslint-disable-next-line new-cap
export const deleteRouter = express.Router();

deleteRouter.delete('/artist', async (req, res) => {
  try {
    const artistDelete =
        await Artist.findOneAndDelete({name: req.query.name?.toString()});
    if (!artistDelete) {
      return res.status(404).send();
    }
    return res.send(artistDelete);
  } catch (error) {
    return res.status(400).send();
  }
});

deleteRouter.delete('/artist/:id', async (req, res) => {
  try {
    const artistDelete = await Artist.findByIdAndDelete(req.params.id);
    if (!artistDelete) {
      return res.status(404).send();
    }
    return res.send(artistDelete);
  } catch (error) {
    return res.status(400).send();
  }
});

// Song
deleteRouter.delete('/song', async (req, res) => {
  try {
    const songDelete = await Song.findOneAndDelete({name: req.query.name?.
        toString()});
    if (!songDelete) {
      return res.status(404).send();
    }
    return res.send(songDelete);
  } catch (error) {
    return res.status(400).send();
  }
});

deleteRouter.delete('/song/:id', async (req, res) => {
  try {
    const songDelete = await Song.findByIdAndDelete(req.params.id);
    if (!songDelete) {
      return res.status(404).send();
    }
    return res.send(songDelete);
  } catch (error) {
    return res.status(400).send();
  }
});

// Playlist
deleteRouter.delete('/playlist', async (req, res) => {
  try {
    const playlistDelete =
        await Playlist.findOneAndDelete({name: req.query.name?.toString()});
    if (!playlistDelete) {
      return res.status(404).send();
    }
    return res.send(playlistDelete);
  } catch (error) {
    return res.status(400).send();
  }
});
