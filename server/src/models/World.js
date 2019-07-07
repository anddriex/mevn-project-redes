var mongoose = require('mongoose');

var WorldSchema = new mongoose.Schema({
    worldName: {type: String, max: 100, min: 4},
    rooms: {type:[mongoose.Types.ObjectId], ref: 'Room'}
});

WorldSchema.virtual('url').get(function () {
    return '/world' + this._id;
});

module.exports = mongoose.model('World', WorldSchema);