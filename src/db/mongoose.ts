import {connect, connection} from 'mongoose';

/**
 * URL de la base de datos
 *  Se toma de la variable de entorno si existe
 *  Si no, se toma la dirección de una base de datos local por defecto
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