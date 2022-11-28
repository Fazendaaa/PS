import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
    admin:
      // undefined !== localStorage.getItem("admin")
      //   ? localStorage.getItem("admin")
      //   :
      true,
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
  },
  actions: {},
  modules: {},
});
