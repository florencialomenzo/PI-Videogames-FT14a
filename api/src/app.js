const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' })); //Para parsear nuestros JSON de forma correcta
server.use(express.json({ limit: '50mb' })); //Para interpretar los JSON
server.use(cookieParser());
server.use(morgan('dev')); //Da un output en la consola cada vez que hacemos una request. Es para
//saber lo que está pasando en cada momento.
server.use((req, res, next) => {
  //Aqui setearemos nuestros headers
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next(); //para que la ejecución no corte aquí si no que siga o en las rutas o en lo errores
});

//Aquí las rutas que las traeremos del archivo index.js de la carpeta routes
server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
