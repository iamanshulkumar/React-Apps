const express = require('express'); // to create backend framework app for node js
const request = require('request-promise'); // for making API requests

const app = express(); // initalizing our app
const PORT = process.env.PORT || 5000; // create our PORT 

app.use(express.json()); // to allow app to pasre json input 

const apiKey = '08616b73d250906a5e37a7fd1a94cccd'; // scraper api key
const returnScraperApiUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`; // structuring of our API request with api key

//curl "http://api.scraperapi.com?api_key=08616b73d250906a5e37a7fd1a94cccd&url=http://httpbin.org/ip"

// Welcome route as every app needs one route
app.get('/', (req, res) => { 	// inital root '/' route, with callback function (req, res)
	res.send('Welcome to Amazon Scraper API.'); // when someone visits root '/', responed with this message
}); 

// Fetching Product Details
app.get('/products/:productId', async (req, res) => { //':' means productId is going to be dynamic 
	const { productId } = req.params; // get productId from parameter
  const { api_key } = req.query;

	try {
			const response = await request(`${returnScraperApiUrl}&url=https://www.amazon.in/dp/${productId}`); // get response from scraper api to fetch info of specific product

			res.json(JSON.parse(response)); // send response back from our server in json format
	}	catch (error) {
			res.json(error); // error handling
	}
});

// Fetching Product Reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;
    
    try {
        const response = await request(`${returnScraperApiUrl}&url=https://www.amazon.in/product-reviews/${productId}`);
        
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// Fetching Product Offers
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;
    
    try {
        const response = await request(`${returnScraperApiUrl}&url=https://www.amazon.in/gp/offer-listing/${productId}`);
        
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// Fetching Search results
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    const { api_key } = req.query;
    
    try {
        const response = await request(`${returnScraperApiUrl}&url=https://www.amazon.in/s?k=${searchQuery}`);
        
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); // we need to make our server to listen on specific port