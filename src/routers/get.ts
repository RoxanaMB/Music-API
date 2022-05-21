import * as express from 'express';
import {Artist} from '../models/artist';
import {Song} from '../models/song';
import {Playlist} from '../models/playlist';

export const getRouter = express.Router();

getRouter.get('/artist', async (req, res) => {
  try {
    if (!req.query.name?.toString()) {
      res.status(400).send();
    }
    const filter = req.query.name?{name: req.query.name.toString()}:{};
    const artist = await Artist.find(filter);

    if (artist.length !== 0) {
      return res.send(artist);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouter.get('/artist/:id', async (req, res) => {
  try {
    if (!req.params.id?.toString()) {
      res.status(400).send();
    }
    const artist = await Artist.findById(req.params.id);

    if (!artist) {
      return res.status(404).send();
    }
    return res.send(artist);
  } catch (error) {
    return res.status(500).send();
  }
});

// Song
getRouter.get('/song', async (req, res) => {
  try {
    if (!req.query.title?.toString()) {
      res.status(400).send();
    }
    const filter = {title: req.query.title?.toString()};
    const song = await Song.find(filter).populate('author');

    if (song.length !== 0) {
      return res.send(song);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouter.get('/song/:id', async (req, res) => {
  try {
    if (!req.params.id?.toString()) {
      res.status(400).send();
    }
    const song = await Song.findById(req.params.id).populate('author');

    if (!song) {
      return res.status(404).send();
    }
    return res.send(song);
  } catch (error) {
    return res.status(500).send();
  }
});

// Playlist
getRouter.get('/playlist', async (req, res) => {
  try {
    if (!req.query.name?.toString()) {
      res.status(400).send();
    }
    const filter = req.query.name?{name: req.query.name.toString()}:{};
    const playlist = await Playlist.find(filter).populate('songs');

    if (playlist.length !== 0) {
      return res.send(playlist);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouter.get('/playlist/:id', async (req, res) => {
  try {
    if (!req.params.id?.toString()) {
      res.status(400).send();
    }
    const playlist = await Playlist.findById(req.params.id).populate('songs');

    if (!playlist) {
      return res.status(404).send();
    }
    return res.send(playlist);
  } catch (error) {
    return res.status(500).send();
  }
});
