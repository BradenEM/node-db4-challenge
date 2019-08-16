const express = require('express');
const recipesRouter = require('./recipes/recipes');
const ingredientsRouter = require('./ingredients/ingredients');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);
server.use('/api/ingredients', ingredientsRouter);

server.get('/', (req, res) => {
  res.send(`<h1>Node DB4 Challenge</h1>`);
});

module.exports = server;
