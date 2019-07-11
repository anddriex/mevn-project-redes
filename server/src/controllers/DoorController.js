
var Door = require('../models/Door');

exports.doors_list = function (req, res) {
    Door.find({}, 'name description selectedStatus activeState', function (error, doors) {
        if (error) {console.error(error);}
        res.send({
            doors: doors
        })
    });
};

exports.door_detail = function (req, res) {
    Door.findById(req.params.id, 'name description selectedStatus activeState', function(error, door) {
        if (error) { console.error(error); }
        res.send(door);
    })
};

exports.door_create_post = function (req, res) {
    var doorName = req.body.name;
    var doorDescription = req.body.description;
    var doorStatus = req.body.selectedStatus || 'CLOSE';
    var doorActiveState = req.body.activeState || false;
    var new_door = new Door({
        name: doorName,
        description: doorDescription,
        selectedStatus: doorStatus,
        activeState: doorActiveState
    });
    new_door.save((error) => {
        if (error) {
            console.log(error)
        }
        res.send({
            id: req.body._id,
            success: true,
            message: 'door saved successfully!'
        })
    })
};

// Handle door delete on POST.
exports.door_delete_post = function(req, res) {
    Door.remove({
        _id: req.params.id
    }, function(err, door){
        if (err)
            res.send(err);
        res.send({
            success: true
        })
    })
};
