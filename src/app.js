const controllers = require('./views/controllers');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views')); // setting the views dir
app.set('view engine', 'hbs'); // file extintion for engine

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layout'),
    defaultLayout: 'main'
  })
);

app.use(controllers);
app.set('port', process.env.PORT || 2010);
app.set('hostname', process.env.HOSTNAME || 'localhost');

module.exports = app;
