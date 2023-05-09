import { makeRequest } from './makeRequest';

const URL = '/users';

export const getUser = (config) =>
  makeRequest({
    method: "GET",
    url: URL,
    ...config,
  });
