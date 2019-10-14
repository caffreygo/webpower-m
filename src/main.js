// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import $ from 'jquery'
import axios from 'axios'
Vue.prototype.$ajax = axios.create({
  baseURL: 'http://m.webpowerchina.com',
  timeout: 5000,
});

Vue.use(Vuex)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) =>{
    if (to.matched.length === 0) {
        next('/');
    }else{
        next();
    }
})