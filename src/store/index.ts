import { createStore } from 'vuex';

// modules
import * as cat from '@/store/modules/cat/index.ts';
import { CatState } from '@/store/modules/cat/state';

export interface RootState {
  cat: CatState,
}

export default createStore({
  modules: {
    cat: cat.store,
  },
});
