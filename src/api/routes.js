import { imgSearch } from '../utils/cse';
import { getQueries } from '../utils/mongo';

module.exports = (app) => {

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
}