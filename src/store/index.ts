import { createStore } from "vuex";

export default createStore({
  state: {
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
    getUser: (state) => state.user,
  },
  mutations: {
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
