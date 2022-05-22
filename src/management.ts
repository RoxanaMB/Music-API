import express from 'express';
import './db/mongoose';
import {postRouter} from './routers/post';
import {getRouter} from './routers/get';
import {deleteRouter} from './routers/delete';
import {defaultRouter} from './routers/default';
import {patchRouter} from './routers/patch';

/**
 * Create a new express app.
 */
const app = express();

/**
 * Routers:
 * - defaultRouter: for unknown routes
 * - postRouter: for POST requests
 * - getRouter: for GET requests
 * - deleteRouter: for DELETE requests
 * - patchRouter: for PATCH requests
 */
app.use(express.json());
app.use(postRouter);
app.use(getRouter);
app.use(deleteRouter);
app.use(patchRouter);
app.use(defaultRouter);

/**
 * app port
 * Take the app port from the environment variable if it exists
 * Otherwise, use port 3000
 */
const port = process.env.PORT || 3000;

/**
 * Start the app on the port defined
 */
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
