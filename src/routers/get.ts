import * as express from 'express';
import {Artist} from '../models/artist';

// eslint-disable-next-line new-cap
export const getRouter = express.Router();
getRouter.get('/artist', (req, res) => {
  const filter = req.query.title?{title: req.query.title.toString()}:{};
  // try {
  //   const artist = await Artist.find(filter);

  //   if (artist.length !== 0) {
  //     return res.send(artist);
  //   }

  //   return res.status(404).send();
  // } catch (error) {
  //   return res.status(500).send();
  // }
  Artist.find(filter).then((artist) => {
    if (artist.length !== 0) {
      res.send(artist);
    } else {
      res.status(404).send();
    }
  }).catch(() => {
    res.status(500).send();
  });
});

/**
 * ToDo:
 * Identificador válido y existente en la base de datos.
 * Identificador válido y no existente en la base de datos.
 * Identificador no válido.
 */
getRouter.get('/artist/:id', (req, res) => {
  Artist.findById(req.params.id).then((artistID) => {
    if (!artistID) {
      res.status(404).send();
    } else {
      res.send(artistID);
    }
  }).catch(() => {
    res.status(500).send();
  });
});