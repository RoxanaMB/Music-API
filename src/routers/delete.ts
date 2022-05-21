import * as express from 'express';
import {Artist} from '../models/artist';
import {Song} from '../models/song';
import {Playlist} from '../models/playlist';

/**
 * DELETE /delete - Delete all artists, songs, and playlists.
 */
export const deleteRouter = express.Router();

/**
 * Delete an artist from the database.
 */
deleteRouter.delete('/artist', async (req, res) => {
  try {
    // Delete an artist with the given name
    const artistDelete =
        await Artist.findOneAndDelete({name: req.query.name?.toString()});

    // If the artist is found, return it. Otherwise, return an error.
    if (!artistDelete) {
      return res.status(404).send();
    }
    // Return the artist
    return res.send(artistDelete);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Delete an artist from the database by id.
 */
deleteRouter.delete('/artist/:id', async (req, res) => {
  try {
    // Check if id is valid and delete the artist with the given id.
    const artistDelete = await Artist.findByIdAndDelete(req.params.id);

    // If the artist is found, return it. Otherwise, return an error.
    if (!artistDelete) {
      return res.status(404).send();
    }
    // Return the artist
    return res.send(artistDelete);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Delete a song from the database.
 */
deleteRouter.delete('/song', async (req, res) => {
  try {
    // Delete a song with the given name
    const songDelete =
        await Song.findOneAndDelete({title: req.query.title?.toString()});
    // If the song is found, return it. Otherwise, return an error.
    if (!songDelete) {
      return res.status(404).send();
    }
    // Return the song
    return res.send(songDelete);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Delete a song from the database by id.
 */
deleteRouter.delete('/song/:id', async (req, res) => {
  try {
    // Look for a song with the given id and delete it.
    const songDelete = await Song.findByIdAndDelete(req.params.id);

    // If the song is found, return it. Otherwise, return an error status.
    if (!songDelete) {
      return res.status(404).send();
    }
    // Return the song
    return res.send(songDelete);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Delete a playlist from the database.
 */
deleteRouter.delete('/playlist', async (req, res) => {
  try {
    // Delete a playlist with the given name
    const playlistDelete =
        await Playlist.findOneAndDelete({name: req.query.name?.toString()});
    // If the playlist is found, return it. Otherwise, return an error.
    if (!playlistDelete) {
      return res.status(404).send();
    }
    // Return the playlist
    return res.send(playlistDelete);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Delete a playlist from the database by id.
 */
deleteRouter.delete('/playlist/:id', async (req, res) => {
  try {
    // Look for a playlist with the given id and delete it.
    const playlistDelete = await Playlist.findByIdAndDelete(req.params.id);
    // Check if the playlist is found and return it. Otherwise, return an error.
    if (!playlistDelete) {
      return res.status(404).send();
    }
    // Return the playlist
    return res.send(playlistDelete);
  } catch (error) {
    return res.status(400).send();
  }
});
