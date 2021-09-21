import { createStore } from "vuex";
import todos from "@/store/modules/todos";

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
  modules: {
    todos,
  },
  getters: {
    stateOfDarkTheme: (state) => state.darkTheme,
  },
});
