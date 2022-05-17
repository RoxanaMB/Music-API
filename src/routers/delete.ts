import * as express from 'express';
import {Artist} from '../models/artist';

// eslint-disable-next-line new-cap
export const deleteRouter = express.Router();

// No funciona
deleteRouter.delete('/artist', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    // eslint-disable-next-line max-len
    Artist.findByIdAndDelete({name: req.query.name.toString()}).then((artistDelete) => {
      if (!artistDelete) {
        res.status(404).send();
      } else {
        res.send(artistDelete);
      }
    }).catch(() => {
      res.status(400).send();
    });
  }
});
