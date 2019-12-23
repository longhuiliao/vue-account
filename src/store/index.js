import Vue from 'vue'
import Vuex from 'vuex'

import Home from './home/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home
  }
})
