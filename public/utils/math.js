/* eslint-disable (import/prefer-default-export) */
export const round = value => Math.round((value) * 100) / 100;

export const roundUSD = (value) => {
  const amount = Math.round((value) * 100) / 100;
  return `$${amount} USD per LSK`;
};
