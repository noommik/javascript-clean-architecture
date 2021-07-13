import axios from 'axios';
import { NetworkClient } from '@/network/NetworkClient';
import { APIResponse } from '@/network/APIResponse';
import { APIRequest } from '@/network/APIRequest';
import { APIError } from '@/network/APIError';

export enum HTTPMethod {
  GET = 'get',
  // POST = 'POST',
  // DELETE = 'DELETE',
  // PUT = 'PUT'
}

// APIClient is client class for xhr request
export class APIClient implements NetworkClient {
  static shared = new APIClient();

  // Base fqdn for api endpoints
  baseURL = '';

  // Timeout duration
  timeout: number = 15 * 1000;

  // Create headers
  private createHeaders(): any {
    return {};
  }

  // Convert axios error into APIError
  private normalizeError(error: any): APIError {
    return {
      status: error.response && error.response.status,
      message: error.message,
      raw: error
    };
  }

  // Default parser
  private parse<U extends APIResponse>(data: any): U {
    return data;
  }

  request<U extends APIResponse>(request: APIRequest<U>): Promise<U> {
    const isRead = request.method === HTTPMethod.GET;

    return new Promise<U>((resolve, reject) => {
      axios
        .request({
          url: request.path,
          method: request.method,
          params: isRead && request.params,
          data: !isRead && request.params,
          // withCredentials: false,
          timeout: this.timeout,
          baseURL: request.baseURL || this.baseURL,
          headers: this.createHeaders(),
        })
        .then((data) => {
          const response = request.parse ? request.parse(data) : this.parse<U>(data);
          resolve(response);
        })
        .catch((err) => {
          const apiError = this.normalizeError(err);
          console.log(apiError);
          reject(apiError);
        });
    });
  }
}
