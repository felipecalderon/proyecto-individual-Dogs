const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const routes = require('./routes/');
const server = express();

server.use(cookieParser());
server.use(express.json());
server.use(morgan('dev'));
server.use(cors())

server.use('/', routes);

module.exports = server;
