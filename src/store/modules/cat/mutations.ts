import { MutationTree } from 'vuex';
import { CatState } from './state';
import { Types, GetItem } from './types';

export const mutations: MutationTree<CatState> = {
  [Types.GET_ITEM]: (state, action: GetItem) => {
    const item = action.payload;
    state.item = item;
  },
};
