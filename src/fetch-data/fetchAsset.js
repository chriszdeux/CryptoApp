import axios from 'axios';
import { access } from '../store/headers';
import { removeHtml } from '../utils/functions/removeHtml';
// import res from 'express/lib/response';

export const fetchAsset = async ( asset ) => {
  const URL_CRYPTO = 'https://coingecko.p.rapidapi.com/coins/'
  
  const options = {
    method: 'GET',
    url: `${ URL_CRYPTO }${asset}`,
    params: {
      localization: 'true',
      tickers: 'true',
      market_data: 'true',
      community_data: 'true',
      developer_data: 'true',
      sparkline: 'false',
      id: asset
    },
    headers: access
  };

  
  // debugger
  const data = await axios.request(options).then(function (response) {
    const { data } =  response;
    // debugger
    const desc = data.description.en.split('. ');
    const descriptionCleaned = desc.map(item => {
      return removeHtml(item)
    })

    // debugger
    return [
      {
        id: data?.id,
        symbol: data?.symbol,
        name: data?.name,
        description: descriptionCleaned,
        links: data?.links,
        logo: data?.image,
        categories: data?.categories,
        start_date: data?.genesis_date,
        contract_address: data?.contract_address,
        ath: data?.market_data.ath.usd,
        current_price_usd: data?.market_data.current_price.usd,
        current_price_btc: data?.market_data.current_price.btc,
        current_price_eth: data?.market_data.current_price.eth,
        current_price_mxn: data?.market_data.current_price.mxn,
  
        rank: data?.market_data.market_cap_rank,
  
        fully_diluted_usd: data?.market_data.fully_diluted_valuation?.usd,
        fully_diluted_btc: data?.market_data.fully_diluted_valuation?.btc,
        fully_diluted_eth: data?.market_data.fully_diluted_valuation?.eth,
        fully_diluted_mxn: data?.market_data.fully_diluted_valuation?.mxn,
  
        total_volume_usd: data?.market_data.total_volume?.usd,
        total_volume_btc: data?.market_data.total_volume?.btc,
        total_volume_eth: data?.market_data.total_volume?.eth,
        total_volume_mxn: data?.market_data.total_volume?.mxn,
  
        market_cap_usd: data?.market_data.market_cap?.usd,
        market_cap_btc: data?.market_data.market_cap?.btc,
        market_cap_eth: data?.market_data.market_cap?.eth,
        market_cap_mxn: data?.market_data.market_cap?.mxn,
  
        high_24h_usd: data?.market_data.high_24h.usd,
        high_24h_btc: data?.market_data.high_24h.btc,
        high_24h_eth: data?.market_data.high_24h.eth,
        high_24h_mxn: data?.market_data.high_24h.mxn,
  
        low_24h_usd: data?.market_data.low_24h.usd,
        low_24h_btc: data?.market_data.low_24h.btc,
        low_24h_eth: data?.market_data.low_24h.eth,
        low_24h_mxn: data?.market_data.low_24h.mxn,
  
        market_cap_change_percentage_24h: data?.market_data.market_cap_change_percentage_24h,
  
        price_change_percentage_24h: data?.market_data.price_change_percentage_24h,
  
        price_change_currency_usd: data?.market_data.price_change_24h_in_currency.usd,
        price_change_currency_btc: data?.market_data.price_change_24h_in_currency.btc,
        price_change_currency_eth: data?.market_data.price_change_24h_in_currency.eth,
        price_change_currency_mxn: data?.market_data.price_change_24h_in_currency.mxn,
  
        price_change_percentage_24h_in_currency_usd: data?.market_data.price_change_percentage_24h_in_currency.usd,
        price_change_percentage_24h_in_currency_btc: data?.market_data.price_change_percentage_24h_in_currency.btc,
        price_change_percentage_24h_in_currency_eth: data?.market_data.price_change_percentage_24h_in_currency.eth,
        price_change_percentage_24h_in_currency_mxn: data?.market_data.price_change_percentage_24h_in_currency.mxn,
  
  
        total_supply: data?.market_data.total_supply,
        max_supply: data?.market_data.max_supply,
        circulating_supply: data?.market_data.circulating_supply,
        twitter_followers: data?.community_data.twitter_followers
  
      }
    ]
    // const assetData = {
    //   id: data?.id,
    //   symbol: data?.symbol,
    //   name
    // }
  }).catch(function (error) {
    // console.error(error);
    // debugger
    return error
  });

  return [data]

}