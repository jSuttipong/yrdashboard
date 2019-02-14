// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import VueGoodTablePlugin from 'vue-good-table';
import Vuex from 'vuex'

// import Chart from 'chart.js'

// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'
import 'vuetify/dist/vuetify.min.css'
import 'vue-good-table/dist/vue-good-table.css'
// import 'swiper/dist/css/swiper.css'

import 'es6-promise/auto'
// use components
Vue.use(BootstrapVue);
Vue.use(Vuetify)
Vue.use(VueGoodTablePlugin);
Vue.use(Vuex)
// Vue.use(Chart);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
