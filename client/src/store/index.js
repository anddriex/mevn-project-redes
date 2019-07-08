import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

import LightMotionService from '../services/LightMotionService';

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
    lightBulbs: [],

  },
  getters: {
    lightBulbs: state => {
      return state.lightBulbs
    }
  },
  mutations: {
    setLightBulb: (state, lightBulbs) => state.lightBulbs = lightBulbs,
    // changeStatus: (state, lightBulb) => state.selectedStatus = lightBulb.selectedStatus
  },
  actions: {
    getLightBulbsAction: async (context, params) => {
      context.commit('setLightBulb', await LightMotionService.fetchAllLightBulbs())
    },
    // async changeStatusAction ({commit}, params){
    //   commit('changeStatus', await LightMotionService.getLightbulb(params.id))
    // }
  }
};


export const store = new Vuex.Store({
  modules: {
    counter: counterStore,
    lightMotionSensor: lightMotionSensorStore
  }
});