const mongoose = require('mongoose');

const queryHistorySchema = new mongoose.Schema({
	term: String,
	when: { type: Date, default: Date.now }
});

const QueryHistory = mongoose.model('QueryHistory', queryHistorySchema);

module.exports = QueryHistory;