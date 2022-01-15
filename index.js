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
const URL_GLOBAL_STATS = 'https://coingecko.p.rapidapi.com/global'

const options = {
  method: 'GET',
  url: '',
  headers: {
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'x-rapidapi-key': process.env.MY_API_KEY
  }
};


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
  const coinsParams = {vs_currency: 'usd', page: page, per_page: '100'} 
  
  await axios.request({ ...options, url: URL_MARKET_COINS, params: coinsParams}).then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  // <AssetPage />
})

app.get('/exchanges', async (req, res) => {

  
    await axios.request({...options, url: URL_EXCHANGES}).then(function (response) {
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
  const assetParams = {
    localization: 'true',
    tickers: 'true',
    market_data: 'true',
    community_data: 'true',
    developer_data: 'true',
    sparkline: 'true'
  }

  
  axios.request({ ...options, url: `${URL_CRYPTO}${assetQuery}`, params: assetParams}).then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  }); 
})

app.get('/news/:id', async ( req, res ) => {
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

app.get('/global-stats', async (req, res) => {
  console.log(req)
  await axios.request({...options, url: URL_GLOBAL_STATS}).then(function (response) {
    debugger
    // console.log(response)
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})

app.listen(PORT, () => console.log(`server is running on port ${ PORT }`));