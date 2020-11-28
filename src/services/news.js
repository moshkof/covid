const axios = require("axios");
let news = {};

news.getByNews = () => {
  return axios({
    method: "GET",
    url: "https://covid-19-news.p.rapidapi.com/v1/covid",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
      "x-rapidapi-key": "16fe591be1msh9fa4117e14b5019p142fb3jsnedb1dbc509fd",
      useQueryString: true,
    },
    params: {
      // news: news,
      lang: "ru",
      media: "True",
      q: "covid",
      from: "yesterday"
    },
  });
};

module.exports = news;

// const axios = require("axios");

// axios({
//     "method":"GET",
//     "url":"https://covid-19-news.p.rapidapi.com/v1/covid",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"covid-19-news.p.rapidapi.com",
//     "x-rapidapi-key":"16fe591be1msh9fa4117e14b5019p142fb3jsnedb1dbc509fd",
//     "useQueryString":true
//     },"params":{
//     "lang":"ru",
//     "media":"True",
//     "q":"covid"
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     });
