var Scraper = require ('images-scraper')
  , bing = new Scraper.Yahoo();

bing.list({
	keyword: 'Mare',
	num: 1000,
	detail: true
})
.then(function (res) {
	console.log('first 1000 results from bing', res);
}).catch(function(err) {
	console.log('err',err);
})
