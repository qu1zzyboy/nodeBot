const dotenv = require('dotenv');
dotenv.config();

const BINANCE_API_KEY = process.env.API_KEY;
const SECRET_KEY = process.env.SECRET_KEY;
const CMC_API_KEY=process.env.CMC_API_KEY;
module.exports = {
  BINANCE_API_KEY,
  SECRET_KEY,
  CMC_API_KEY
};