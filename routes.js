'use strict';

const express = require('express');
const api = require('./api');
const path = require('path');
const app = express();

// const routes = new express.Router();

// routes.use('/api', api);

// routes.use(express.static('./public/dist'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', './refonte_Linear/public', 'index.html'));
});

module.exports = app;

// module.exports = routes;Jean