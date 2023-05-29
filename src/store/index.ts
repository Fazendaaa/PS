import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
    admin:
      undefined !== localStorage.getItem("admin")
        ? // @ts-expect-error: any
          JSON.parse(localStorage.getItem("admin"))
        : false,
    user:
      undefined !== localStorage.getItem("user")
        ? // @ts-expect-error: any
          JSON.parse(localStorage.getItem("user"))
        : {},
  },
  getters: {
    isAdmin: (state) => state.admin,
    isLogged: (state) => null !== state.user,
  },
  mutations: {
    setTheme: (state, value) => {
      state.theme = value;
      localStorage.setItem("theme", value);

      return value;
    },
    setUser: (state, value) => {
      state.user = value;
      localStorage.setItem("user", JSON.stringify(value));

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
