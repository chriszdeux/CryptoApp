import axios from "axios";
import { access } from "../store/headers";


export const fetchGlobalStats = async () => {
  const URL_GLOBAL_STATS = 'https://coingecko.p.rapidapi.com/global'

const options = {
  method: 'GET',
  url: URL_GLOBAL_STATS,
  headers: access
};

// const dateFriendly = (data) => {

// const milliseconds = data * 1000 // 1575909015000
// const dateObject = new Date(milliseconds)
// const humanDateFormat = dateObject.toLocaleString()
// debugger
// return humanDateFormat;
// }
// debugger
const globalStats = await axios.request(options).then(function (response) {
  // debugger
  const { data: {
    active_cryptocurrencies,
    upcoming_icos,
    ongoing_icos,
    ended_icos,
    markets,
    total_market_cap,
    total_volume,
    market_cap_percentage,
    market_cap_change_percentage_24h_usd,
    updated_at
  } } = response.data; 


    const milliseconds = updated_at * 1000 // 1575909015000
    const dateObject = new Date(milliseconds)
    const dateFriendly = dateObject.toLocaleString()

  // debugger
	return {
    active_cryptos: active_cryptocurrencies,
    upcoming: upcoming_icos,
    ongoing: ongoing_icos,
    ended: ended_icos,
    markets: markets,
    
    total_market_cap: 
     total_market_cap && `Bitcoin: ${ Intl.NumberFormat().format(total_market_cap.btc.toFixed(2)) } / Ethereum: ${ Intl.NumberFormat().format(total_market_cap.eth.toFixed(2)) } / USD: $ ${ Intl.NumberFormat().format(total_market_cap.usd.toFixed(2)) } / MXN: $ ${ Intl.NumberFormat().format(total_market_cap.mxn.toFixed(2)) }`,

    total_volume: 
      total_volume &&  `Bitcoin: ${ Intl.NumberFormat().format(total_volume.btc.toFixed(2)) }/ Ethereum: ${ Intl.NumberFormat().format(total_volume.eth.toFixed(2)) }/ USD: $ ${ Intl.NumberFormat().format(total_volume.usd.toFixed(2)) }/ MXN: $ ${ Intl.NumberFormat().format(total_volume.mxn.toFixed(2)) }`,

    market_cap_percentage: 
      market_cap_percentage &&  `Bitcoin: ${ Intl.NumberFormat().format(market_cap_percentage.btc.toFixed(2)) }% / Ethereum: ${ Intl.NumberFormat().format(market_cap_percentage.eth.toFixed(2)) }%`,
    // market_cap_change_percentage_24h_usd: 
    // market_cap_change_percentage_24h_usd,
    updated_at:  dateFriendly.trim().split(',').reverse().join(', '),
    market_cap_change_percentage_24h_usd:
      market_cap_change_percentage_24h_usd && `${ Intl.NumberFormat().format(market_cap_change_percentage_24h_usd.toFixed(4)) }%`
  };


}).catch(function (error) {
  // debugger
  return error
});

// debugger
return [globalStats]

}


