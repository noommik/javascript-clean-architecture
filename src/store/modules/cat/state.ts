import { ICat } from '@/entities/Cat';

export interface CatState {
  item: ICat
}

export const initialState = (): CatState => {
  return {
    item: null!
  }
};
