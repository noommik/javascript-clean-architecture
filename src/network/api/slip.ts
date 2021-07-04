import HttpClient from '@/network/HttpClient';

/**
 * @Use: https://api.adviceslip.com/
 */
const API_URL = 'https://api.adviceslip.com';

export default {
  getSlip() {
    return HttpClient({
      method: 'get',
      url: `${API_URL}/advice`,
    });
  },
};
