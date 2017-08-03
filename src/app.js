/**
 * Dependencies
 */
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

/**
 * Database
 */
const db = require('./database/db');

// export app
export const app = express();

/**
 * View engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Routing
 */
app.use('/', routes);