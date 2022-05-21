import * as express from 'express';
import {Artist} from '../models/artist';
import {Song} from '../models/song';
import {Playlist} from '../models/playlist';

/**
 * GET /get - Get all artists, songs, and playlists.
 */
export const getRouter = express.Router();

// Get all artists

/**
 * Get artists using the given query. If no query is given, return an error.
 */
getRouter.get('/artist', async (req, res) => {
  try {
    // Get the query from the request.
    if (!req.query.name?.toString()) {
      res.status(400).send();
    }
    // Get the artists from the database.
    const filter = req.query.name?{name: req.query.name.toString()}:{};
    const artist = await Artist.find(filter);
    
    // Send the artists to the client. Otherwise, send an error.
    if (artist.length !== 0) {
      return res.send(artist);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 * Get artists using the given id. If no id is given, return an error.
 */
getRouter.get('/artist/:id', async (req, res) => {
  try {
    // Check if id is valid
    if (!req.params.id?.toString()) {
      res.status(400).send();
    }
    // Find the artist with the given id.
    const artist = await Artist.findById(req.params.id);

    // If the artist is found, return it. Otherwise, return an error.
    if (!artist) {
      return res.status(404).send();
    }
    return res.send(artist);
  } catch (error) {
    return res.status(500).send();
  }
});

// Get all songs

/**
 * Get songs using the given query. If no query is given, return an error.
 */
getRouter.get('/song', async (req, res) => {
  try {
    // Get the query from the request.
    if (!req.query.title?.toString()) {
      res.status(400).send();
    }
    // Get the songs from the database.
    const filter = {title: req.query.title?.toString()};
    const song = await Song.find(filter).populate('author');

    // Send the songs to the client. Otherwise, send an error.
    if (song.length !== 0) {
      return res.send(song);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 * Get songs using the given id. If no id is given, return an error.
 */
getRouter.get('/song/:id', async (req, res) => {
  try {
    // Check if id is valid
    if (!req.params.id?.toString()) {
      res.status(400).send();
    }
    // Find the song with the given id.
    const song = await Song.findById(req.params.id).populate('author');

    // If the song is found, return it. Otherwise, return an error.
    if (!song) {
      return res.status(404).send();
    }
    return res.send(song);
  } catch (error) {
    return res.status(500).send();
  }
});

// Get all playlists

/**
 * Get playlists using the given query. If no query is given, return an error.
 */
getRouter.get('/playlist', async (req, res) => {
  try {
    // Get the query from the request.
    if (!req.query.name?.toString()) {
      res.status(400).send();
    }
    // Get the playlists from the database.
    const filter = req.query.name?{name: req.query.name.toString()}:{};
    const playlist = await Playlist.find(filter).populate('songs');

    // Send the playlists to the client. Otherwise, send an error.
    if (playlist.length !== 0) {
      return res.send(playlist);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 * Get playlists using the given id. If no id is given, return an error.
 */
getRouter.get('/playlist/:id', async (req, res) => {
  try {
    // Check if id is valid
    if (!req.params.id?.toString()) {
      res.status(400).send();
    }
    // Find the playlist with the given id.
    const playlist = await Playlist.findById(req.params.id).populate('songs');

    // If the playlist is found, return it. Otherwise, return an error.
    if (!playlist) {
      return res.status(404).send();
    }
    return res.send(playlist);
  } catch (error) {
    return res.status(500).send();
  }
});
