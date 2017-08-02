/**
 * Dependencies
 */
const express = require('express');
const path = require('path');
const mongo = require('mongodb').MongoClient;

export const app = express();

app.get('/', (req, res) => {
	mongo.connect('mongodb://localhost:27017/img-search-db', (err, db) => {
		if (err) {
			console.log('DB connection failed', err);
		}
		if (db) {
			console.log('DB connection successful');
			db.close();
		}
	});
	res.send('API works');
});