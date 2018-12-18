import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import other from './modules/other'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    user,
    other
  }
})

export default store
