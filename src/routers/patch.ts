import * as express from 'express';
import {Artist} from '../models/artist';

// eslint-disable-next-line new-cap
export const patchRouter = express.Router();

/**
 * ToDo:
 * Petición sin especificar una query string con el título de la nota.
 * Petición especificando un título de nota no existente.
 * Petición especificando un título de una nota existente, con un
 *  cuerpo donde se incluya una propiedad a actualizar no válida.
 * Petición especificando un título de una nota existente, con un
 *  cuerpo donde se incluyan propiedades a actualizar válidas,
 *  pero con valores no válidos.
 * Petición especificando un título de una nota existente y un
 *  cuerpo cuyas propiedades y valores a actualizar sean válidos.
 */
patchRouter.patch('/artist', async (req, res) => {
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

  try {
    const artist =
    await Artist.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
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
  const allowedUpdates = ['name', 'songs', 'monthlyListeners'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
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
