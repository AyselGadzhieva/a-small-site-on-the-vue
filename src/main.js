import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from "./router/router";
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store/index";
import './assets/styles/styles.scss'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
