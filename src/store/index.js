import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import page from "./modules/page";
import user from "./modules/user";
import title from "./modules/title";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    page,
    user,
    title,
  },
  strict: debug,
});
