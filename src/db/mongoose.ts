import {connect, connection} from 'mongoose';
// import {MongoClient} from 'mongodb';
// import {ArtistInterface} from '../models/artist';

console.log('Connecting to MongoDB...');
// https://grupo-g-proyecto.herokuapp.com/

const databaseURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/app';

connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Connection to MongoDB server established');
  console.log(databaseURL);
}).catch((err) => {
  console.log(err);
  connection.close();
});