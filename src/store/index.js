import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import saveLocal from './plugin/saveLocal'
import createLogger from 'vuex/dist/logger'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [saveLocal, createLogger()]
})
