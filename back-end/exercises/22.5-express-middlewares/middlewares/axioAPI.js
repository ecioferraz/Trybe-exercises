const axios = require('axios');
const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json)';

const axioAPI = async (_req, res) => {
  const { data } = await axios.get(API_URL);
  res.status(200).json(data);
};

module.exports = axioAPI;
