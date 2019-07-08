var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DoorSchema = new Schema({
    name: {type: String, required: true, max: 50},
    description: {type: String, max: 100},
    selectedStatus: {type: String, default: 'CERRAR', required: true, enum: ['CERRAR', 'ABRIR']},
    activeState: {type: Boolean, default: false, required: true }
});


module.exports = mongoose.model('Door', DoorSchema);