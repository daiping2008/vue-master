import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'

import Bus from '@/lib/bus'

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  require('./mocks')
}

Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
