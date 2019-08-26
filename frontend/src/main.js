import Vue from 'vue'
import 'bootstrap'
import './assets/app.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/tooltip'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
