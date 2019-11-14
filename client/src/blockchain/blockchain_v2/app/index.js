const express = require('express');
const Blockchain = require('../blockchain');
const bodyParser = require('body-parser');

// Require Dot Env
require('dotenv').config();

// Get PORT from user or set default
const HTTP_PORT = 8080;

// Instantiate Express app
const app = express();

// Setup middleware
app.use(bodyParser.json());

// Instantiate Blockchain instance
const blockchain = new Blockchain();

// API GET blocks Route
app.get('/blocks', (req, res) => {
  res.json(blockchain.chain);
});

// API POST blocks Route
app.post('/mine', (req, res) => {
  const data = req.body.data;
  console.log(data);
  const block = blockchain.addBlock(req.body.data);
  console.log(`New block added: ${block.toString()}`);

  res.redirect('/blocks');
});

// Start Listening
app.listen(HTTP_PORT, () => {
  console.log(`⛓Listening on PORT: ${HTTP_PORT}⛓`);
});
