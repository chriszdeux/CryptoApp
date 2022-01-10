const axios = require('axios');

export const fetchCoins = async ( initialPage ) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/coin-list',
    params: {vs_currency: 'usd', page: initialPage, per_page: '100', order: 'market_cap_desc'},
  };
  const data = await axios.request(options).then(function (response) {
    const myData = response.data.map(item => {
      return {
        id: item.id,
        name: item.name,
        image: item.image,
        symbol: item.symbol,
        current_price: item.current_price,
        market_cap: item.market_cap,
        market_cap_rank: item.market_cap_rank,
        total_volume: item.total_volume,
        high_24h: item.high_24h,
        low_24h: item.low_24h,
        price_change_percentage_24h: item.price_change_percentage_24h,
        market_cap_change_percentage_24h: item.market_cap_change_percentage_24h,
        total_supply: item.total_supply,
        ath: item.ath,

      }
    })

    const top10Crypto = myData.slice(0,10);

    const topLow = myData.sort((a,b) => {
      return a.price_change_percentage_24h - b.price_change_percentage_24h
    }).slice(0,3)

    const topHigh = myData.sort((a,b) => {
      return b.price_change_percentage_24h - a.price_change_percentage_24h
    }).slice(0,3)
    // debugger
    // const randomAssets = 
    // const getRandomCryptos = () => {
    //   for(let i = 0; i < 3; i++ ) {
    //     const random = Math.floor(Math.random() * myData.length) + 1

    //   }
    // }

    return {myData, top10Crypto, topLow, topHigh}
  }).catch(function (error) {
    console.error(error);
  });

  return data;
}