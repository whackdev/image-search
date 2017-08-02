import { mongoConnect, inputQuery } from './mongo';


export function imgSearch(query) {
	let api = `https://www.googleapis.com/customsearch/v1?${process.env.CSE}q=${query}searchType=image`;
	console.log('API request triggered');

	inputQuery(query);
}
