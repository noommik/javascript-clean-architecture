import { ICat } from '@/entities/Cat';

export enum Types {
  GET_ITEM = 'cat/get_cat',
}

export class GetItem implements FluxStandardAction {
  type = Types.GET_ITEM;

  constructor(public payload: ICat) {}
}
