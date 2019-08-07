const express = require('express');
const exphbs = require('express-handlebars');
const { join } = require('path');
const controllers = require('./controllers');

const app = express();
app.use(express.static(join(__dirname, '..', 'public')));
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode
app.set('views', join(__dirname, 'views')); // A directory or an array of directories for the application's views
app.set('view engine', 'hbs'); // The default engine extension to use

app.engine(
  'hbs',
  exphbs({
    // I have no idea what is this
    extname: 'hbs',
    layoutsDir: join(__dirname, 'views', 'layouts'),
    partialsDir: join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
);

app.set('port', process.env.PORT || 2010);
app.set('hostname', process.env.HOSTNAME || 'localhost');
app.use(express.static(join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;
