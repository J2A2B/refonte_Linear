const express = require('express')
const app = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const request = require('request');
const fs = require('fs');
const api = require('./api');
const passport = require('passport');

app.use((req, res, next) => {
    		res.header('Access-Control-Allow-Origin', '*');
    		res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
    		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    		next();
});

app.use(routes);

app.listen(process.env.PORT || 8080);

app.set('view engine', 'html')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

module.exports = app;