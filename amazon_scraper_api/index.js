const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = '08616b73d250906a5e37a7fd1a94cccd'; // scraper api key
const baseUrl = `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
	res.send('Welcome to Amazon scraper API.');
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

app.listen(PORT, () => console.log(`Server running on port => ${PORT}`));