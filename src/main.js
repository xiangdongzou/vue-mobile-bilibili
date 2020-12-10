import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant.js'
import './assets/global.css'
import http from '../http.js'

Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
