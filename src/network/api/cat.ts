import HttpClient from '@/network/HttpClient';

/**
 * @Use: https://thecatapi.com
 */
const API_URL = 'https://api.thecatapi.com';

export default {
  getCat() {
    return HttpClient({
      method: 'get',
      url: `${API_URL}/v1/images/search`,
      params: {
        mime_types: 'jpg,png',
      },
    });
  },
};
