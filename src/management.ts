// import {connect} from 'mongoose';

// console.log('Connecting to MongoDB...');

// const databaseURL = 'mongodb://127.0.0.1:27017/dsi-12';

// connect(databaseURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// }).then(() => {
//   console.log('Connection to MongoDB server established');
// }).catch((err) => {
//   // console.log('Unnable to connect to MongoDB server');
//   console.log(err);
// });

import express from 'express';
import './db/mongoose';
import {postRouter} from './routers/post';
import {getRouter} from './routers/get';
import {deleteRouter} from './routers/delete';

const app = express();

app.use(express.json());
app.use(postRouter);
app.use(getRouter);
app.use(deleteRouter);

const port = 3000;

// default router..
app.all('*', (_, res) => {
  res.status(501).send();
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
