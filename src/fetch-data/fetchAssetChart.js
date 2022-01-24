import { formatNumber } from '../utils/functions/formatNumber';
import { friendlyDate } from '../utils/functions/friendlyDate';

const axios = require('axios');

export const fetchAssetChart = async (id ) => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/chart/${id}`,
    // params: {vs_currency: 'usd', days: '', id: id},
  };
  // debugger

 const data = await axios.request(options).then(function (response) {
  // const dataChart = response.data.price.filter( item => {
  //   debugger
  //   return item
  // // } )
  const chartData = response.data.prices.map(item => {
    // debugg
    const date = new Date(item[0]);
    // debugger
    const price = Intl.NumberFormat().format(item[1])
    // debugger
    const temp_object = {
      date_v: date,
      price_v: price
    }

    // debugger
    return Object.values(temp_object)
  })
  
  // debugger
  const dataFiltered = chartData.filter(item => {
    // const newDate = new Date(item)
    // debugger
    return item[0].getHours()
    // return item[0].getHours()%2 == 1
  })
  .filter(item => {
    // debugger
    return item[0].getMinutes()
    // return item[0].getMinutes()%2 == 0
  })

  // debugger
  const dataCleaned = dataFiltered.map(item => {
    // debugger
    const temp = item[0].toString().split(' ')
      // return temp[4]
      const temp_obj = {
        date: `${temp[4]}`,
        price: item[1]+1
      }
    return Object.values(temp_obj)
    
  })


  const lastDate = dataCleaned.map(item => {
    return ''
  })
  // const lastDate = dataCleaned.map(item => {
  //   return item[0]
  // })
  const lastPrice = dataCleaned.map(item => {
    // debugger
    const temp = item[1].replace(',','')
    // debugger
    return Number(temp)
  })

  // debugger
  // const priceFiltered = dataFiltered.map(item => {
  //   return item.price
    
  // })
  // debugger
  const finalData = {
    date: lastDate,
    price: lastPrice
  }
  // debugger
  // debugger
  let finalArray = [['date', 'price'], ...dataFiltered]

  // debugger
  return finalData;
  // return dataChart
  }).catch(function (error) {
    console.error(error);
  });
  // debugger
  return data
}
