const express = require('express');
const server = express();
const apiRouter = require('./routes/api');

server.use(express.json());

server.use('/api', apiRouter);

server.get(`/api/recipes`, apiRouter);

server.post(`/api/recipes`, apiRouter)

module.exports = server;
