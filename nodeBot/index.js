const binance = require('binance-api-node').default;
const crypto = require("crypto")
const axios = require("axios");
const { StochasticRSI } = require('technicalindicators');
const { CMC_API_KEY, BINANCE_API_KEY, SECRET_KEY } = require('./config/config.js');

// Create an instance of axios for CoinMarketCap API
const CMCAPI = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com',
    headers: {
        'X-CMC_PRO_API_KEY': `${CMC_API_KEY}`,
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
    }
});

const BTCEndpoint = "/v2/cryptocurrency/info?symbol=BTC";

async function getBTCInfo() {
    try {
        const response = await CMCAPI.get(BTCEndpoint);
        const resJSON = response.data.data.BTC;
        console.log(resJSON);
    } catch (err) {
        console.error(err);
    }
}


const client = binance({
    apiKey: BINANCE_API_KEY,
    apiSecret: SECRET_KEY,
});

getBTCInfo();
client.time().then(time => console.log(time));

async function getPrice(Symbol) {

}

async function makeTrade(symbol, price, action, quantity) {

}
