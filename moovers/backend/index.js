const express = require('express');
require('dotenv').config();
const debug = require('debug')('mooversApi');
const morgan = require('morgan');
const cors = require('cors');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/passportConfig')(server);

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const usersRouter = require('./src/routes/usersRouter');
const tripRouter = require('./src/routes/tripRouter');
const itemRouter = require('./src/routes/itemRouter');
const cartRouter = require('./src/routes/cartRouter');
const addressesRouter = require('./src/routes/addressRouter');
const authRouter = require('./src/routes/authRouter');

server.use('/mooversApi/', usersRouter);
server.use('/mooversApi/', authRouter);
server.use('/mooversApi/', tripRouter);
server.use('/mooversApi/', addressesRouter);
server.use('/mooversApi/', itemRouter);
server.use('/mooversApi/', cartRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
