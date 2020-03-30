// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vant from 'vant';
import 'vant/lib/index.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import Http from './api/http';

Vue.use(Vant);
Vue.config.productionTip = false;
// 把Http挂载到Vue实例上
Vue.prototype.$Http = Http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
