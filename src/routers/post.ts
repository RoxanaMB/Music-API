import * as express from 'express';
import {Artist} from '../models/artist';
import {Playlist} from '../models/playlist';
import {Song} from '../models/song';

// eslint-disable-next-line new-cap
export const postRouter = express.Router();

postRouter.post('/artist', async (req, res) => {
  const artist = new Artist(req.body);
  let nameFound = false;

  try {
    await artist.save();
    res.status(201).send(artist);
  } catch (err) {
    if (nameFound) {
      res.status(409).send({
        error: 'This artist already exists',
      });
    } else {
      res.status(400).send(err);
    }
  }
});

postRouter.post('/playlist', async (req, res) => {
  const playlist = new Playlist(req.body);
  const nameOfBody = req.body.name.toString();
  const filter = req.body.name?{name: playlist.name.toString()}:{};
  const findName = Playlist.find(filter);
  let nameFound = false;
  findName.then((found) => {
    found.forEach((element) => {
      if (element.name === nameOfBody) {
        nameFound = true;
      }
    });
  }).catch((err) => {
    console.log(err);
  });

  try {
    await playlist.save();
    res.status(201).send(playlist);
  } catch (err) {
    if (nameFound) {
      res.status(409).send({
        error: 'This playlist already exists',
      });
    } else {
      res.status(400).send(err);
    }
  }
});

postRouter.post('/song', async (req, res) => {
  const song = new Song(req.body);
  const nameOfBody = req.body.name.toString();
  const filter = req.body.name?{name: song.title.toString()}:{};
  const findName = Song.find(filter);
  let nameFound = false;
  findName.then((found) => {
    found.forEach((element) => {
      if (element.title === nameOfBody) {
        nameFound = true;
      }
    });
  }).catch((err) => {
    console.log(err);
  });

  try {
    await song.save();
    res.status(201).send(song);
  } catch (err) {
    if (nameFound) {
      res.status(409).send({
        error: 'This song already exists',
      });
    } else {
      res.status(400).send(err);
    }
  }
});
