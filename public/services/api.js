/* eslint-disable (import/prefer-default-export) */
import axios from 'axios';

const tickerLisk = 'https://api.coinmarketcap.com/v1/ticker/lisk/';

export const getLisk = () => axios.get(tickerLisk)
  .catch((err) => { throw err; })
  .then(res => res.data[0]);
