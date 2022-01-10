const PORT = process.env.NODE_ENV || 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
// const  'react';
// import { AssetPage } from './src/pages/AssetPage';
const app = express();
app.use(cors());

const URL_MARKET_COINS = 'https://coingecko.p.rapidapi.com/coins/markets';
const URL_EXCHANGES = 'https://coingecko.p.rapidapi.com/exchanges';
const URL_CRYPTO = 'https://coingecko.p.rapidapi.com/coins/'

if(process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get('*', (req, resp) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}



app.get('/coin-list', async (req, res) => {
  const page = req.query.page
  // console.log(req.query)
  // console.log('hi')
  // debugger
  const options = {
    method: 'GET',
    url: URL_MARKET_COINS,
    params: {vs_currency: 'usd', page: page, per_page: '100', order: 'market_cap_desc'},
    headers: {
      'x-rapidapi-host': 'coingecko.p.rapidapi.com',
      'x-rapidapi-key': process.env.MY_API_KEY
    }
  };
  
  await axios.request(options).then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  // <AssetPage />
})

app.get('/exchanges', async (req, res) => {
  const options = {
    method: 'GET',
    url: URL_EXCHANGES,
    headers: {
      'x-rapidapi-host': 'coingecko.p.rapidapi.com',
      'x-rapidapi-key': process.env.MY_API_KEY
    }
  };
  
    await axios.request(options).then(function (response) {
      // debugger
      // console.log(response.data)
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})

app.get('/asset/:id', async ( req, res ) => {
  // console.log(req.query)
  const assetQuery = req.params.id;
  const options = {
    method: 'GET',
    url: `${URL_CRYPTO}${ assetQuery }`,
    params: {
      localization: 'true',
      tickers: 'true',
      market_data: 'true',
      community_data: 'true',
      developer_data: 'true',
      sparkline: 'false'
    },
    headers: {
      'x-rapidapi-host': 'coingecko.p.rapidapi.com',
      'x-rapidapi-key': process.env.MY_API_KEY
    }
  };
  
  axios.request(options).then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  }); 
})

app.get('/news/:id', async ( req, res ) => {
  // console.log('params', req.params)
  // console.log(req.params)
  // console.log('query', req.query)
  // console.log(req.query)
  
  // console
  const type = 'crypto'
  const options = {
    method: 'GET',
    url: `https://latest-crypto-news.p.rapidapi.com/newsbtc/${req.params.id}/latest`,
    headers: {
      'x-rapidapi-host': 'latest-crypto-news.p.rapidapi.com',
      'x-rapidapi-key': process.env.MY_API_KEY,
    },
  };
  
  await axios.request(options).then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})


app.listen(PORT, () => console.log(`server is running on port ${ PORT }`)) 