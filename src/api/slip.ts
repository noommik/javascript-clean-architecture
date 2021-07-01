import axios from 'axios';

/**
 * @Use: https://api.adviceslip.com/
 */
const API_URL = 'https://api.adviceslip.com';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default {
  fetchData() {
    return instance({
      url: '/advice',
      method: 'get',
    });
  },
};
