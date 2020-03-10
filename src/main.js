// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import store from 'vuex'
import 'element-ui/lib/theme-default/index.css';
import "babel-polyfill";
import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';


// 验证码插件
import SIdentify from './components/page/login/Identify.vue';

Vue.component("SIdentify",SIdentify);
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = window.axios

Vue.config.productionTip = false

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
