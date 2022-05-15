import {connect} from 'mongoose';

console.log('Connecting to MongoDB...');

const databaseURL = 'mongodb://127.0.0.1:27017/dsi-12';

connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Connection to MongoDB server established');
}).catch((err) => {
  // console.log('Unnable to connect to MongoDB server');
  console.log(err);
});

