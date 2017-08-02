/**
 * Dependencies
 */
const express = require('express');
const path = require('path');
const mongo = require('mongodb').MongoClient;

import { imgSearch } from './utils/cse';
import { mongoConnect, getQueries } from './utils/mongo';
//import { } from './utils/query';

export const app = express();

// Remove for production used to test DB connection
mongoConnect();

app.get('/', (req, res) => {
	res.send('API works');
});

app.get('/api/imagesearch/:query', (req, res) => {
	imgSearch(req.params.query);
	
	res.status(200).json({ "results": "API results" });
});

app.get('/api/latest/imagesearch', (req, res) => {
	getQueries(req, res);
});