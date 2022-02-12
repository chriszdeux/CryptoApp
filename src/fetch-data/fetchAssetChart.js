import { access } from '../store/headers';
import { formatNumber } from '../utils/functions/formatNumber';
import { friendlyDate } from '../utils/functions/friendlyDate';

const axios = require('axios');

export const fetchAssetChart = async (id, ath, days) => {
  // debugger
  const URL_ASSET_CHART = `https://coingecko.p.rapidapi.com/coins/${id}/market_chart`
  const options = {
    method: 'GET',
    url: URL_ASSET_CHART,
    params: {vs_currency: 'usd', days: days, id: id},
    headers: access
  };
  // debugger
  // const cleanAth = Number(ath.replace(/\,/g, ''))
 const data = await axios.request(options).then(function (response) {
  // const dataChart = response.data.price.filter( item => {
  //   debugger
  //   return item
  // // } )
  const filterWeirdPrice = response.data.prices.filter(item => {
    // debugger
    return item[1] <= ath
  })

  // debugger
  const chartData = filterWeirdPrice.map((item, index) => {
    // debugger
    return {
      date: '',
      price: item[1]
    }
    // const date = new Date(item[0]);
  })
  const chartDataDates = filterWeirdPrice.map((item, index) => {
    const date = new Date(item[0]);
    const shortDate = date.toLocaleDateString()
    // debugger
    return {
      date: `Date: ${ shortDate } \n | Time: ${ date.getHours() }:${ date.getMinutes() } hrs`,
      price: item[1]
    }
    // const date = new Date(item[0]);
  }).reverse()

  return {chartData, chartDataDates};

  
  // debugger
  // const dataFiltered = chartData.filter(item => {
  //   // const newDate = new Date(item)
  //   // debugger
  //   return item[0].getHours()
  //   // return item[0].getHours()%2 == 1
  // })
  // .filter(item => {
  //   // debugger
  //   return item[0].getMinutes()
  //   // return item[0].getMinutes()%2 == 0
  // })

  // debugger
  // const dataCleaned = dataFiltered.map(item => {
  //   // debugger
  //   const temp = item[0].toString().split(' ')
  //     // return temp[4]
  //     const temp_obj = {
  //       date: `${temp[4]}`,
  //       price: item[1]+1
  //     }
  //   return Object.values(temp_obj)
    
  // })


  // const lastDate = dataCleaned.map(item => {
  //   return ''
  // })
  // const lastDate = dataCleaned.map(item => {
  //   return item[0]
  // })
  // const lastPrice = dataCleaned.map(item => {
  //   // debugger
  //   const temp = item[1].replace(/\,/g,'')
  //   // debugger
  //   return Number(temp)
  // })


  // const finalData = {
  //   date: lastDate,
  //   price: lastPrice
  // }
  // // debugger
  // // debugger
  // let finalArray = [['date', 'price'], ...dataFiltered]

  // debugger
  // return dataChart
}).catch(function (error) {
  return error;
});
// debugger
  return [data]
}
