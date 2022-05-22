import express from 'express';
import './db/mongoose';
import {postRouter} from './routers/post';
import {getRouter} from './routers/get';
import {deleteRouter} from './routers/delete';
import {defaultRouter} from './routers/default';
import {patchRouter} from './routers/patch';

/**
 * Crea una instancia de express
 */
const app = express();

/**
 * Routers:
 * - defaultRouter: para las rutas desconocidas
 * - postRouter: para las peticiones POST
 * - getRouter: para las peticiones GET
 * - deleteRouter: para las peticiones DELETE
 * - patchRouter: para las peticiones PATCH
 */
app.use(express.json());
app.use(postRouter);
app.use(getRouter);
app.use(deleteRouter);
app.use(patchRouter);
app.use(defaultRouter);

/**
 * Puerto de la aplicación
 * Se toma de la variable de entorno si existe
 * Si no, se toma el puerto 3000
 */
const port = process.env.PORT || 3000;

/**
 * Inicia la aplicación en el puerto definido
 */
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
