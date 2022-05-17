import * as express from 'express';
import {Artist} from '../models/artist';

// eslint-disable-next-line new-cap
export const postRouter = express.Router();
postRouter.post('/artist', (req, res) => {
  const artist = new Artist(req.body);
  const name2 = req.body.name.toString();
  // const name2 = artist.name.toString();
  // const filter = req.body.name?{name: artist.name.toString()}:{};
  // try {
  //   await artist.save();
  //   res.status(201).send(artist);
  // } catch (err) {
  //   // ToDo: manejar error cuando el usuario ya existe
  //   // no sólo los errores que pasen
  //   const findArtist = await Artist.find(filter);
  //   if (findArtist.length !== 0) {
  //     console.log(findArtist);
  //     console.log('Nombre repetido?: ' + name2);
  //   }
  //   res.status(400).send(err);
  // }
  const filter = req.query.title?{title: req.query.title.toString()}:{};
  const prueba = Artist.find(filter);
  let prueba3 = false;
  prueba.then((encontrado) => {
    encontrado.forEach((elemento) => {
      if (elemento.name === name2) {
        prueba3 = true;
      }
    });
  }).catch((err) => {
    console.log(err);
  });

  artist.save().then((artist) => {
    res.status(201).send(artist);
  }).catch((err) => {
    if (prueba3) {
      res.status(409).send({error: 'Este artista ya existe'});
    } else {
      res.status(400).send(err);
    }
  });
});
