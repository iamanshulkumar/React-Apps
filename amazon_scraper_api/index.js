const express = require('express'); // to create backend framework app for node js
const request = require('request-promise'); // for making API requests

const app = express(); // initalizing our app
const PORT = process.env.PORT || 5000; // create our PORT 

const apiKey = '08616b73d250906a5e37a7fd1a94cccd'; // scraper api key
const baseUrl = `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json()); // to allow app to pasre json input 

// Welcome route as every app needs one route
app.get('/', (req, res) => { 	// inital root '/' route, with callback function (req, res)
	res.send('Welcome to Amazon Scraper API.'); // when someone visits root '/', responed with this message
}); 

// GET Product Details
app.get('/products/:productId', async (req, res) => {
	const { productId } = req.params;
  const { api_key } = req.query;

	try {
		const response = await request(`${bseUrl}&url=https://www.amazon.com/dp/${productId}`);

		res.json(JSON.parse(response));
	}	catch (error) {
			res.json(error);
	}
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); // we need to make our server to listen on specific port