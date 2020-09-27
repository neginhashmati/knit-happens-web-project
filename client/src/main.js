import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import GAuth from 'vue-google-oauth2'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

const gauthOption = {
  clientId: '417993214770-pmp56g18el151s2nbvkuuqv2jsl6qq7h.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
