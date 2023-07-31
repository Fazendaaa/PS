import { callAPI } from "@/scripts/api";
import { createStore } from "vuex";

export default createStore({
  state: {
    user:
      undefined !== localStorage.getItem("user")
        ? // @ts-expect-error: any
          JSON.parse(localStorage.getItem("user"))
        : {},
  },
  getters: {
    isAdmin: (state) => (null !== state.user ? state.user["isAdmin"] : false),
    isLogged: (state) => null !== state.user,
    getUser: (state) => state.user,
  },
  mutations: {
    setUser: (state, value) => {
      state.user = value;
      localStorage.setItem("user", JSON.stringify(value));

      callAPI(`users/${value["mobile"]}`, "PATCH", value).catch(console.error);

      return value;
    },
  },
  actions: {},
  modules: {},
});
