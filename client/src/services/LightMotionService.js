import Api from './Api';

export default {
	addLightBulb (params) {
		return Api().post()
	},
	getLightbulb (params) {
		return Api().get('rooms/light_bulb/' + params.id);
	},
	fetchAllLightBulbs () {
		return Api().get('rooms/light_bulbs');
	}
};