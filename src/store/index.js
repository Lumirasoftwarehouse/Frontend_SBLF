// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    language: 'en', // Bahasa default adalah Inggris
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
    },
  },
  actions: {
    changeLanguage({ commit }, language) {
      commit('setLanguage', language);
    },
  },
});
