import Api from './Api'

export default {
  addDoor (params) {
    return Api().post('rooms/door/create', params)
  },
  getDoor (params) {
    return Api().get('rooms/door/' + params.id)
  },
  fetchAllDoors () {
    return Api().get('rooms/doors')
  },
  updateDoor (params) {
    return Api().post('rooms/door/' + params.id, params)
  }
}
