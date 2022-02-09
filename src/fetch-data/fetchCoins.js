import { API_KEY } from '../store/api_key';
import { access } from '../store/headers';

const axios = require('axios');

export const fetchCoins = async ( initialPage ) => {
  const URL_MARKET_COINS = 'https://coingecko.p.rapidapi.com/coins/markets';

  const options = {
    method: 'GET',
    url: URL_MARKET_COINS,
    params: {vs_currency: 'usd', page: initialPage, per_page: '100', order: 'market_cap_desc'},
    headers: access
  };
  const formatNumber = ( number ) => {
    if(number?.current_price > 1) {
      return (number?.current_price)
    }
    return number.current_price 
    // return (number.toFixed(2))
  }
  const data = await axios.request(options).then(function (response) {
    // debugger
    // debugger
    const myData = response.data.map(item => {
      // debugger
      return {
        id: item?.id,
        name: item?.name,
        image: item?.image,
        symbol: item?.symbol,
        ath_date: item?.ath_date,
        current_price: formatNumber(item),
        // current_price: (item?.current_price.toFixed(5)),
        market_cap: item.market_cap,

        market_cap_rank: item?.market_cap_rank,

        total_volume: item.total_volume
        ,


        high_24h: item?.high_24h,
        low_24h: item?.low_24h,
        price_change_percentage_24h: 
          item?.price_change_percentage_24h,
        market_cap_change_percentage_24h: item?.market_cap_change_percentage_24h,

        total_supply: 
        item?.total_supply,
        circulating_supply: 
          item?.circulating_supply,
        ath: 
          item?.ath,
        price_change_24h: 
        item?.price_change_24h 
      }
    })
    // debugger
    // const top10Crypto = myData.slice(0,10);

    // const topLow = myData.sort((a,b) => {
    //   return a.price_change_percentage_24h - b.price_change_percentage_24h
    // }).slice(0,3)

    // const topHigh = myData.sort((a,b) => {
    //   return b.price_change_percentage_24h - a.price_change_percentage_24h
    // }).slice(0,3)
    // debugger
    // const randomAssets = 
    // const getRandomCryptos = () => {
    //   for(let i = 0; i < 3; i++ ) {
    //     const random = Math.floor(Math.random() * myData.length) + 1

    //   }
    // }
    // debugger
    // debugger
    return myData
  }).catch(function (error) {
    return console.log(error)
    // console.error(error);
  });
  // debugger
  return data;
}