const controllers = require('./views/controllers');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 2010);
app.set('hostname', process.env.HOSTNAME || 'localhost');

app.use(controllers);

module.exports = app;
