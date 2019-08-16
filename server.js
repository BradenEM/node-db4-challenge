const express = require("express");
const recipesRouter = require("./recipes/recipes");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Node DB4 Challenge</h1>`);
});

module.exports = server;
