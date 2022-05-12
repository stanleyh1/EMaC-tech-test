const server = require('express')();
const apiRouter = require('./routes/api');

server.use('/api', apiRouter);

server.get(`/api/recipes`, apiRouter);

server.post(`/api/recipes`, apiRouter)

module.exports = server;
