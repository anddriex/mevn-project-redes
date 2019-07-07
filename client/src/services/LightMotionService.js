import Api from '@services/Api';

export default {
    getLightBulb (params) {
        return Api().get('rooms/light_bulb/' + params.id);
    },
    fetchLightBulbs () {
        return Api().get('rooms/light_bulbs')
    },
}