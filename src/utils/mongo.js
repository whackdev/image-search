const mongodb = require('mongodb').MongoClient;

export function inputQuery(query) {
	let timestamp = new Date().toUTCString();
	
	let queryObj = {
		term: query,
		when: timestamp
	}
	
	mongodb.connect('mongodb://localhost:27017/img-search-db', (err, db) => {
		if (err) {
			console.log('DB connection failed', err);
		}
		let queries = db.collection('queries');

		queries.insertOne(queryObj, (err, doc) => {
			if (err) throw err;

			console.log('Query saved.');
		});
		db.close();
	});
}

export function getQueries(req, res) {
	
	mongodb.connect('mongodb://localhost:27017/img-search-db', (err, db) => {
		if (err) {
			console.log('DB connection failed', err);
		}
		let queries = db.collection('queries');
		queries.find({ }, {_id: 0, term: 1, when: 1}).toArray((err, docs) => {
			if (err) throw err;

			if (docs !== '[]') {
				res.status(200).json(docs);
			} else {
				res.status(500).json({ "error": "There are no queries in the database" });
			}
		});
		
		db.close();
	});
}