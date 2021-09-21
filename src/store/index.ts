import { createStore } from "vuex";

export default createStore({
  state: () => ({
    darkTheme: true as boolean,
  }),
  mutations: {
    TOGGLE_THEME(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
  actions: {},
  modules: {},
  getters: {
    stateOfDarkTheme: (state) => state.darkTheme,
  },
});
