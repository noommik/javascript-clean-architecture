import axios from 'axios';

/**
 * @Use: https://thecatapi.com
 */
const API_URL = 'https://api.thecatapi.com';

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
      url: '/v1/images/search',
      method: 'get',
      params: {
        mime_types: 'jpg,png',
      },
    });
  },
};
