import * as express from 'express';
import {Artist} from '../models/artist';

// eslint-disable-next-line new-cap
export const postRouter = express.Router();
postRouter.post('/artist', async (req, res) => {
  const artist = new Artist(req.body);
  const nameOfBody = req.body.name.toString();
  const filter = req.body.name?{name: artist.name.toString()}:{};
  const findName = Artist.find(filter);
  let nameFound = false;
  findName.then((encontrado) => {
    encontrado.forEach((elemento) => {
      if (elemento.name === nameOfBody) {
        nameFound = true;
      }
    });
  }).catch((err) => {
    console.log(err);
  });

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
