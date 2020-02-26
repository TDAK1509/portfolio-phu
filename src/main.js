import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Vuex from "vuex";
import { store } from "./store";
import initFontAwesome from "./init-font-awesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

initFontAwesome();
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Vuex);

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount("#app");
