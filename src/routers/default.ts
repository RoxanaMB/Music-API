import * as express from 'express';

export const defaultRouter = express.Router();

/**
 * It sets a default route to our express app that informs the user that, 
 * he has hit a wrong route.
 */
defaultRouter.all('*', (_, res) => {
  res.status(501).send();
});
