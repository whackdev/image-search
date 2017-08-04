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
 * Routing
 */
app.use('/', routes);