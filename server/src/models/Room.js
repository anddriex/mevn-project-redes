var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({
   name: {type: String, max: 60, required: true},
    description: {type: String, max: 0},
    world: {type: mongoose.Types.ObjectId, ref: 'World', required: true}
});

RoomSchema.virtual('url').get(function () {
    return '/world/room/'+ this._id;
});

module.exports = mongoose.model('Room', RoomSchema);