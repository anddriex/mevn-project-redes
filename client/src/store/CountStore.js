import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export const counterStore = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
