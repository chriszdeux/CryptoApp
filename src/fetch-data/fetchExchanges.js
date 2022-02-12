import { API_KEY } from '../store/api_key';
import { access } from '../store/headers';

const axios = require('axios');

export const fetchExchanges = async () => {
  const URL_EXCHANGES = 'https://coingecko.p.rapidapi.com/exchanges';
  const options = {
    method: 'GET',
    url: URL_EXCHANGES,
    headers: access
  };
  // debugger
  const data = await axios.request(options).then(function (response) {
     const exchangeData = response.data.map(item => {
      //  debugger
       return {
         id: item.id,
         name: item.name,
         year_established: item.year_established,
         country: item.country,
         description: item.description,
         url: item.url,
         image: item.image,
         trust_score: item.trust_score,
         trust_score_rank: item.trust_score_rank,
         trade_volume_24h_btc: item.trade_volume_24h_btc
       }
     })

     const top10Exchanges = exchangeData.slice(0,10);

    //  const orderExchange = exchangeData.sort((a,b) => {
    //   return b.price_change_percentage_24h - a.price_change_percentage_24h
    //   // if(a.price_change_percentage_24h > 0) {
    //   //   debugger
    //   // }
    // })
    //  debugger
     return { exchangeData, top10Exchanges }
  }).catch(function (error) {
    return error
  });
  // debugger
  return [data]
}