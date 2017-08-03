const express = require('express');
const router = express.Router();

const QueryHistory = require('../models/query-history');
const cseAPI = require('../services/api');

router.get('/', (req, res) => {

	res.render('index', (err, html) =>{
		if (err) throw err;

		res.send(html);
	});
});

router.get('/latest', (req, res) => {

 	QueryHistory.find( {}, 'term when -_id').sort('-when').limit(10).then(results => {
   	res.status(200).json(results);
 	});
});

router.get('/search/:query', (req, res) => {

	cseAPI.getImages(req.params.query, req.params.offset)
		.then(ans => {
		new QueryHistory({ term: req.params.query }).save();
			
		res.status(200).json(ans);
		});
});

module.exports = router;