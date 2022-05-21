import {connect, connection} from 'mongoose';

console.log('Connecting to MongoDB...');

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