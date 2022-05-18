import * as express from 'express';
import {Artist} from '../models/artist';

// eslint-disable-next-line new-cap
export const deleteRouter = express.Router();

// Fatla?: Petición especificando un título de nota no existente.
deleteRouter.delete('/artist', async (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A name must be provided',
    });
  }

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

deleteRouter.delete('/notes/:id', async (req, res) => {
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