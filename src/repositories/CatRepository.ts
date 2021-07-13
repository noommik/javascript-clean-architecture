import BaseRepository from '@/repositories/BaseRepository';
import store from '@/store';
import { APIClient } from '@/network/APIClient';
import { CatAPI } from '@/network/api/Cat';
import { GetItem } from '@/store/modules/cat/types';
import { ICat, CatPayload } from '@/entities/Cat';

export default class CatRepository implements BaseRepository {
  async fetchItem(params: CatPayload): Promise<ICat> {
    return await APIClient.shared.request(new CatAPI.GetCat(params))
  }

  saveItem(item: ICat) {
    store.commit(new GetItem(item))
  }

  getItem(): ICat {
    return store.state.cat.item
  }
}
