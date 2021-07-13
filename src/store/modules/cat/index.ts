import { Module } from 'vuex';
import { RootState } from '@/store';
import { mutations } from './mutations';
import { CatState, initialState } from './state';

export * from './state';

export const store: Module<CatState, RootState> = {
  state: initialState,
  mutations,
};
