import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
    admin:
      undefined !== localStorage.getItem("admin")
        ? // @ts-expect-error: any
          JSON.parse(localStorage.getItem("admin"))
        : false,
  },
  getters: {
    isAdmin: (state) => state.admin,
  },
  mutations: {
    setTheme: (state, value) => {
      state.theme = value;
      localStorage.setItem("theme", value);

      return value;
    },
    toggleAdmin: (state) => {
      state.admin = !state.admin;
      localStorage.setItem("admin", JSON.stringify(state.admin));

      return state.admin;
    },
  },
  actions: {},
  modules: {},
});
