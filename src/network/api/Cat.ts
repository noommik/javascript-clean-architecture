import { AxiosResponse } from 'axios'
import { APIRequest } from '@/network/APIRequest';
import { HTTPMethod } from '@/network/APIClient';
import { ICat, CatPayload } from '@/entities/Cat'

export namespace CatAPI {
  export class GetCat implements APIRequest<ICat> {
    response!: ICat;
    // path = `http://cors-anywhere.herokuapp.com/https://api.thecatapi.com/v1/images/search`;
    path = `https://api.thecatapi.com/v1/images/search`;
    method = HTTPMethod.GET;
    headers: any;
    parse = (data: AxiosResponse) => data.data;
    constructor(public params: CatPayload) {}
  }
}
