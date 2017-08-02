'use strict';

require('babel-register');
require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 3000;
const app = require('./src/app').app;

app.listen(PORT, () => {
	console.log(`Express listening on ${PORT}`);
});