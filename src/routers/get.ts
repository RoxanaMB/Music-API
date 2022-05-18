import * as express from 'express';
import {Artist} from '../models/artist';

// eslint-disable-next-line new-cap
export const getRouter = express.Router();
getRouter.get('/artist', async (req, res) => {
  const filter = req.query.title?{title: req.query.title.toString()}:{};
  try {
    const artist = await Artist.find(filter);

    if (artist.length !== 0) {
      return res.send(artist);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 * ToDo:
 * Identificador válido y existente en la base de datos.
 * Identificador válido y no existente en la base de datos.
 * Identificador no válido.
 */
getRouter.get('/artist/:id', async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);

    if (!artist) {
      return res.status(404).send();
    }
    return res.send(artist);
  } catch (error) {
    return res.status(500).send();
  }
});