const axios = require("axios");
let service = {};

service.getByCountry = (country) => {
  return axios({
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "16fe591be1msh9fa4117e14b5019p142fb3jsnedb1dbc509fd",
      useQueryString: true,
    },
    params: {
      country: country,
    },
  });
};

module.exports = service;
