import * as express from 'express';
import {Artist} from '../models/artist';
import {Song} from '../models/song';
import {Playlist} from '../models/playlist';

export const patchRouter = express.Router();

patchRouter.patch('/artist', async (req, res) => {
  try {
    if (!req.query.name) {
      return res.status(400).send({
        error: 'A name must be provided',
      });
    }

    const allowedUpdates = ['name', 'songs', 'monthlyListeners'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    const artist =
    await Artist.findOneAndUpdate(
        {name: req.query.name?.toString()}, req.body, {
          new: true,
          runValidators: true,
        });

    if (!artist) {
      return res.status(404).send();
    }

    return res.send(artist);
  } catch (error) {
    return res.status(400).send(error);
  }
});

patchRouter.patch('/artist/:id', async (req, res) => {
  try {
    const allowedUpdates = ['name', 'songs', 'monthlyListeners'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body,
        {
          new: true,
          runValidators: true,
        });

    return res.send(artist);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// Song
patchRouter.patch('/song', async (req, res) => {
  try {
    if (!req.query.title) {
      return res.status(400).send({
        error: 'A title must be provided',
      });
    }

    const allowedUpdates = ['title', 'artist', 'album', 'genre', 'duration'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    const song = await Song.findOneAndUpdate(
        {title: req.query.title?.toString()}, req.body, {
          new: true,
          runValidators: true,
        });

    if (!song) {
      return res.status(404).send();
    }

    return res.send(song);
  } catch (error) {
    return res.status(400).send(error);
  }
});

patchRouter.patch('/song/:id', async (req, res) => {
  try {
    const allowedUpdates = ['title', 'artist', 'album', 'genre', 'duration'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!song) {
      return res.status(404).send();
    }

    return res.send(song);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// Playlist
patchRouter.patch('/playlist', async (req, res) => {
  try {
    if (!req.query.name) {
      return res.status(400).send({
        error: 'A name must be provided',
      });
    }

    const allowedUpdates = ['name', 'songs'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    const playlist = await Playlist.findOneAndUpdate(
        {name: req.query.name?.toString()}, req.body, {
          new: true,
          runValidators: true,
        });

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send(error);
  }
});

patchRouter.patch('/playlist/:id', async (req, res) => {
  try {
    const allowedUpdates = ['name', 'songs'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
  } catch (error) {
    return res.status(400).send(error);
  }
});
