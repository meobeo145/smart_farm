import "core-js/stable";
import Vue from "vue";
import App from "./App";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import store from "./store";
import Toaster from "v-toaster";
import VueLodash from "vue-lodash";
import lodash from "lodash";
// Filters
import { formatDatetime, format12Hours, formatDate } from "./filters/datetime";

import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import ErrorMessage from "@/components/ErrorMessage.vue";

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.use(Toaster, {
  timeout: 3000,
});
Vue.use(VueLodash, {
  name: "custom",
  lodash: lodash,
});
// Filters
Vue.filter("formatDateTime", formatDatetime);
Vue.filter("formatDate", formatDate);
Vue.filter("format12Hours", format12Hours);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ErrorMessage", ErrorMessage);

window._ = require("lodash");

new Vue({
  el: "#app",
  router,
  store,
  icons,
  template: "<App/>",
  components: {
    App,
  },
});
