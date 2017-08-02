/**
 * Dependencies
 */
const express = require('express');
const path = require('path');
const mongo = require('mongodb').MongoClient;

import { imgSearch } from './utils/cse';
import { mongoConnect } from './utils/mongo';
//import { } from './utils/query';

export const app = express();

// Remove for production used to test DB connection
mongoConnect();

app.get('/', (req, res) => {
	res.send('API works');
});

app.get('/api/imagesearch/:query', (req, res) => {
	let query = req.params.query;
	console.log(query)
	imgSearch(query);
	res.json({ "results": "API results" });
});