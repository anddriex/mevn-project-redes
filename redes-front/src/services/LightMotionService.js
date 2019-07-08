import Api from './Api'

export default {
  addLightBulb (params) {
    return Api().post('rooms/light_bulb/create', params)
  },
  getLightbulb (params) {
    return Api().get('rooms/light_bulb/' + params.id)
  },
  fetchAllLightBulbs () {
    return Api().get('rooms/light_bulbs')
  },
  updateLightBulb (params) {
    return Api().post('rooms/light_bulb/' + params.id, params)
  }
}
