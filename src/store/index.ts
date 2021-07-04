import { createStore } from 'vuex';

export default createStore({
  state: {
    url: '',
    width: 0,
    height: 0,
    advice: '',
  },
  mutations: {
    setCatData(state, data) {
      state.url = data.url;
      state.width = data.width;
      state.height = data.height;
    },
    setSlipData(state, data) {
      state.advice = data.advice;
    },
  },
  actions: {
  },
  modules: {
  },
});
