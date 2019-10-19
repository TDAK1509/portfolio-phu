import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import registerGlobalComponents from "./register-global-components";
import initFontAwesome from "./init-font-awesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;
registerGlobalComponents();
initFontAwesome();
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
