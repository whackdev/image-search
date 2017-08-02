const mongodb = require('mongodb').MongoClient;

export function mongoConnect() {
	mongodb.connect('mongodb://localhost:27017/img-search-db', (err, db) => {
		if (err) {
			console.log('DB connection failed', err);
		}
		if (db) {
			console.log('DB connection successful');
			db.close();
		}
	});
}

export function inputQuery(query) {
	let timestamp = new Date().toUTCString();
	
	let queryObj = {
		term: query,
		when: timestamp
	}
	console.log(queryObj);

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