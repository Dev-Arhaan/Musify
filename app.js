'use strict';
/**
 * Node modules
 */

const cors = require('cors');
const cookieParser = require('cookie-parser');

/**
 * custom module
 */

const login = require('./src/routes/login.route');

// Initialize express server

const express = require('express');
const app = express();

/**
 * EJS setting
 */

app.set('view engine', 'ejs');

/**
 * Setting static dir
 */

app.use(express.static(`${__dirname}/public`));

/**\
 * Enable cors and cookie parsing
 */

app.use(cors()).use(cookieParser());

/**
 * Login page
 */

app.use('/login', login);

app.listen(5000, () => {
    console.log(`Server listening on http://localhost:5000`);
});