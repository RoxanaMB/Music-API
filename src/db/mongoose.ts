import {connect, connection} from 'mongoose';

/**
 * database url
 *  Take the database url from the environment variable if it exists
 *  Otherwise, use a local database
 */
const databaseURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/app';

/**
 * Conexión con la base de datos
 * options:
 * - useNewUrlParser: true
 * - useUnifiedTopology: true
 * - useCreateIndex: true
 * - useFindAndModify: false
 */
/**
 * Connect to the database
 * @param url
 * @param options - options for the connection
 *  - useNewUrlParser: true
 *  - useUnifiedTopology: true
 *  - useCreateIndex: true
 *  - useFindAndModify: false
 */
connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log(`Connected to ${databaseURL}`);
}).catch((err) => {
  console.log(err);
  connection.close();
});