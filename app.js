const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

/* SETTINGS */
app.set('port', process.env.PORT || 2000);
app.set('views', path.join(__dirname, 'views'));

// Crear instancia de Handlebars y registrar el helper
const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    helpers: {
        eq: function (a, b) {
            return a === b;
        },
    },
});

// Establecer el motor de plantillas
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

/* MIDDLEWARE */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

/* ROUTERS */
app.use(require('./routes/routes'));

/* STATIC FILES */
app.use(express.static(path.join(__dirname, 'public')));

/* CONFIGURATION */
app.use(express.json({ limit: '200mb' }));

module.exports = app;
