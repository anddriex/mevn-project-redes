import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

import LightMotionService from '@services/LightMotionService';

const counterStore = {
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
};
const lightMotionSensorStore = {
  state: {
    lightBulbs: [
      {
        name: '',
        description: '',
        status: 'OFF'
      },
      {
        name: '',
        description: '',
        status: 'OFF'
      }
    ]
  },
  getters: {
    lightBulbs: state => {
      return state.lightBulbs
    }
  },
  mutations: {
    setLightBulb: (state, lightBulb) => state.lightBulb = lightBulb,
    // changeStatus: (state, lightBulb) => state.status = lightBulb.status
  },
  actions: {
    getLightBulbsAction: async (context, params) => {
      context.commit('setLightBulb', await LightMotionService.fetchLightBulbs())
    },
    // async changeStatusAction ({commit}, params){
    //   commit('changeStatus', await LightMotionService.getLightBulb(params.id))
    // }
  }
};


export const store = new Vuex.Store({
  modules: {
    counter: counterStore,
    lightMotionSensor: lightMotionSensorStore
  }
});