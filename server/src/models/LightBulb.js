var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LightBulbSchema = new Schema({
    name: {type: String, required: true, max: 50},
    description: {type: String, max: 100},
    status: {type: String, default: 'OFF', required: true, enum: ['ON', 'OFF']},
    mode: {type: String, default: 'MANUAL', required: true, enum: ['AUTO','MANUAL', 'MOTION']},
    configAuto: {
        wakeUpTime: {type: String, min: 5, max: 5},
        sleepTime: {type: String, min: 5, max: 5}
    },
    configMotion: {
        activeTime: {type: String, min: 8, max: 8}
    },
    room: {type: Schema.Types.ObjectId, ref: 'Room'}
});

LightBulbSchema.virtual('url').get(function () {
    return '/light-bulb/' + this._id;
});

module.exports = mongoose.model('LightBulb', LightBulbSchema);