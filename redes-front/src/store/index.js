import Vuex from 'vuex'
import Vue from 'vue'
import LightMotionService from '../services/LightMotionService'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    lightBulbs: [],
    lightBulb: {}
  },
  getters: {
    lightBulbs: state => {
      return state.lightBulbs
    },
    lightBulb: state => {
      return state.lightBulb
    }
  },
  mutations: {
    setLightBulb: (state, payload) => {
      state.lightBulb = payload.data
    },
    setLightBulbs: (state, payload) => {
      state.lightBulbs = payload.data.lights
    }
    // changeStatus: (state, lightBulb) => state.selectedStatus = lightBulb.selectedStatus
  },
  actions: {
    addNewLightBulbAction: async (context, params) => {
      console.log(params)
      await LightMotionService.addLightBulb(params)
    },
    getLightBulbAction: async (context, params) => {
      context.commit('setLightBulb', await LightMotionService.getLightbulb(params))
    },
    getLightBulbsAction: async (context, params) => {
      context.commit('setLightBulbs', await LightMotionService.fetchAllLightBulbs())
    },
    updateLightBulbAction: async (context, params) => {
      await LightMotionService.updateLightBulb(params)
    }
    // async changeStatusAction ({commit}, params){
    //   commit('changeStatus', await LightMotionService.getLightbulb(params.id))
    // }
  }
})
