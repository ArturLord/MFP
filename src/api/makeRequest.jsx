import axios from 'axios';

export const _API = 'http://localhost:3000';

export const makeRequest = (config) => {
  config.url = `${_API}${config.url}`;

  return axios(config);
};
