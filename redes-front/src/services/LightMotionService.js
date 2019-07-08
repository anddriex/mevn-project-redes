import Api from './Api';

export default {
	getLightBulb (params) {
		return Api().get('rooms/light_bulb/' + params.id);
	},
	fetchAllLightBulbs () {
		return Api().get('rooms/light_bulbs');
	},
};