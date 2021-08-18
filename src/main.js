import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import _ from "underscore";
import "@/views/algorithm";
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$_ = _

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
