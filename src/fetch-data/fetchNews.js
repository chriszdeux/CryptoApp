const axios = require('axios')
export const fetchNews = async ( id ) => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/news/${id}`,
    params: { id: id },
    // query: {
    //   news: id
    // }
  };
  // debugger
  const data =  await axios.request(options).then(function (response) {
    const dataNews = response.data.map(item => {
      return {
        article_date: item.articleDate,
        article_image: item.articleImage,
        article_title: item.articleTitle,
        article_url: item.articleUrl
      }
    });
    return dataNews
  }).catch(function (error) {
    console.error(error);
  });
  // debugger
  return data
}