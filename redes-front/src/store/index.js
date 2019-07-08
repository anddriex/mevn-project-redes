import Vuex from 'vuex'
import Vue from 'vue'
import LightMotionService from '../services/LightMotionService'
import DoorService from '../services/DoorService'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    lightBulbs: [],
    lightBulb: {},
    doors: [],
    door: {}
  },
  getters: {
    lightBulbs: state => {
      return state.lightBulbs
    },
    lightBulb: state => {
      return state.lightBulb
    },
    doors: state => {
      return state.doors
    },
    door: state => {
      return state.door
    }
  },
  mutations: {
    setLightBulb: (state, payload) => {
      state.lightBulb = payload.data
    },
    setLightBulbs: (state, payload) => {
      state.lightBulbs = payload.data.lights
    },
    setDoor: (state, payload) => {
      state.door = payload.data
    },
    setDoors: (state, payload) => {
      state.doors = payload.data.doors
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
    },
    addNewDoorAction: async (context, params) => {
      await DoorService.addDoor(params)
    },
    getDoorAction: async (context, params) => {
      context.submit('setDoor', await DoorService.getDoor(params))
    },
    getDoorsAction: async (context, params) => {
      context.commit('setDoors', await DoorService.fetchAllDoors())
    },
    updateDoorAction: async (context, params) => {
      await DoorService.updateDoor(params)
    }
    // async changeStatusAction ({commit}, params){
    //   commit('changeStatus', await LightMotionService.getLightbulb(params.id))
    // }
  }
})
