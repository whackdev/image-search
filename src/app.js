/**
 * Dependencies
 */
const express = require('express');
const path = require('path');
const router = require('./api/routes');

// export app
export const app = express();

// use api router
router(app);