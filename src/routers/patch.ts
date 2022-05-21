import * as express from 'express';
import {Artist} from '../models/artist';
import {Song} from '../models/song';
import {Playlist} from '../models/playlist';

/**
 * PATCH /patch - Patch artists, songs, and playlists.
 */
export const patchRouter = express.Router();

/**
 * Patch an artist in the database.
 */
patchRouter.patch('/artist', async (req, res) => {
  try {
    // Find the artist
    if (!req.query.name) {
      // If no query is given, return an error.
      return res.status(400).send({
        // Send an error message.
        error: 'A name must be provided',
      });
    }
    // Find the artist with the given name.
    const allowedUpdates = ['name', 'songs', 'monthlyListeners'];
    // Get the artist from the database.
    const actualUpdates = Object.keys(req.body);
    // Check if the updates are allowed.
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

    // If the updates are not allowed, return an error.
    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    // Update the artist.
    const artist =
    await Artist.findOneAndUpdate(
        {name: req.query.name?.toString()}, req.body, {
          new: true,
          runValidators: true,
        });

    // If the artist is found, return it. Otherwise, return an error.
    if (!artist) {
      return res.status(404).send();
    }

    // Return the artist.
    return res.send(artist);
    // If the artist is not found, return an error.
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 * Patch a song in the database with the given id.
 */
patchRouter.patch('/artist/:id', async (req, res) => {
  try {
    // Allow only certain updates.
    const allowedUpdates = ['name', 'songs', 'monthlyListeners'];
    // Get the updates from the request.
    const actualUpdates = Object.keys(req.body);
    // Check if the updates are allowed.
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));
    // If the updates are not allowed, return an error.
    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    // Find the artist with the given id.
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body,
        {
          new: true,
          runValidators: true,
        });
    // Return the artist.
    return res.send(artist);
    // If the artist is not found, return an error.
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 * Patch a song in the database
 */
patchRouter.patch('/song', async (req, res) => {
  try {
    // Check if the query is given.
    if (!req.query.title) {
      // If no query is given, return an error.
      return res.status(400).send({
        error: 'A title must be provided',
      });
    }

    // Allow only certain updates.
    const allowedUpdates = ['title', 'artist', 'album', 'genre', 'duration'];
    // Get the updates from the request.
    const actualUpdates = Object.keys(req.body);
    // Check if the updates are allowed.
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    // If the updates are not allowed, return an error.
    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    // Find the song with the given title.
    const song = await Song.findOneAndUpdate(
        {title: req.query.title?.toString()}, req.body, {
          new: true,
          runValidators: true,
        });
    // Check if the song is found.
    if (!song) {
      // If the song is not found, return an error.
      return res.status(404).send();
    }
    // Return the song.
    return res.send(song);
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 * Patch a song in the database with the given id.
 */
patchRouter.patch('/song/:id', async (req, res) => {
  try {
    // Allow only certain updates.
    const allowedUpdates = ['title', 'artist', 'album', 'genre', 'duration'];
    // Get the updates from the request.
    const actualUpdates = Object.keys(req.body);
    // Check if the updates are allowed.
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    // If the updates are not allowed, return an error.
    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    // Find the song with the given id.
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // Check if the song is found.
    if (!song) {
      // If the song is not found, return an error.
      return res.status(404).send();
    }
    // Return the song.
    return res.send(song);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// Patch a playlist in the database.
patchRouter.patch('/playlist', async (req, res) => {
  try {
    // Check if the query is given.
    if (!req.query.name) {
      // If no query is given, return an error.
      return res.status(400).send({
        error: 'A name must be provided',
      });
    }
    // Allow only certain updates.
    const allowedUpdates = ['name', 'songs'];
    // Get the updates from the request.
    const actualUpdates = Object.keys(req.body);
    // Check if the updates are allowed.
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    // If the updates are not allowed, return an error.
    if (!isValidUpdate) {
      // If the updates are not allowed, return an error.
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    // Find the playlist with the given name and update it.
    const playlist = await Playlist.findOneAndUpdate(
        {name: req.query.name?.toString()}, req.body, {
          new: true,
          runValidators: true,
        });

    // If the playlist is found, return it. Otherwise, return an error.
    if (!playlist) {
      return res.status(404).send();
    }

    return res.send(playlist);
    // If the playlist is not found, return an error.
  } catch (error) {
    return res.status(400).send(error);
  }
});

// Patch a playlist in the database with the given id.
patchRouter.patch('/playlist/:id', async (req, res) => {
  try {
    // Allow only certain updates.
    const allowedUpdates = ['name', 'songs'];
    // Get the updates from the request.
    const actualUpdates = Object.keys(req.body);
    // Check if the updates are allowed.
    const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

    // If the updates are not allowed, return an error.
    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
    // Find the playlist with the given id and update it.
    const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // If the playlist is found, return it. Otherwise, return an error.
    if (!playlist) {
      return res.status(404).send();
    }
    // Return the playlist.
    return res.send(playlist);
  } catch (error) {
    return res.status(400).send(error);
  }
});
