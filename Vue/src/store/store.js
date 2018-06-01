import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import categories from './modules/Categories/main'
import actions from './modules/users/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    categories
  }

})
