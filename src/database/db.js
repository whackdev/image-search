const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongo = `${process.env.DB_HOST}/${process.env.DB_NAME}`

exports.db = mongoose.connect(mongo, { useMongoClient: true });
