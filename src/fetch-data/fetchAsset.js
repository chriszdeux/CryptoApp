import axios from 'axios';
// import res from 'express/lib/response';

export const fetchAsset = async ( asset ) => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/asset/${asset}`,
    params: {
      localization: 'true',
      tickers: 'true',
      market_data: 'true',
      community_data: 'true',
      developer_data: 'true',
      sparkline: 'false',
      id: asset
    },
  };
  // debugger
  const data = await axios.request(options).then(function (response) {
    const myAsset =  response.data;
    // debugger
    return myAsset
  }).catch(function (error) {
    console.error(error);
  });

  return data
}