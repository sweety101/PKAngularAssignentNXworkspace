const express = require('express');

var setupController = require('./app/controller/setupController');
var cors = require('cors');

const app = express();
app.use(cors());
setupController(app);

module.exports = app;
