import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import registerGlobalComponents from "./register-global-components";

Vue.config.productionTip = false;
registerGlobalComponents();

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
