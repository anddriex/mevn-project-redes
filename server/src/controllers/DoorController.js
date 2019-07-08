const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

var Door = require('../models/Door');

const port = new SerialPort('/dev/ttyUSB0', { baudRate: 9600 });
const parser = port.pipe(new ReadLine({ delimiter: '\n' }));
// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message)
});
port.on('open', () => {
    console.log('serial port open');
    // Read the port data
    parser.on('data', data => {
        console.log(data);
    });
});

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

// Handle LightBulb update on POST.
exports.door_update_post = function(req, res) {
    Door.findById(req.params.id, 'name description selectedStatus activeState', function (error, door) {
        if (error) { console.error(error); }
        door.name = req.body.name;
        door.description = req.body.description;
        door.selectedStatus = req.body.selectedStatus;
        door.activeState = req.body.activeState;
        const message = (door.selectedStatus).toLocaleLowerCase();
        const messageFormatted = message + '\n' ;
        console.log(messageFormatted);
        setTimeout(() => {
            port.write(messageFormatted, (err) => {
                if(err) {
                    return console.log('Error on write: ', err.message);
                }
                console.log('message written');
            });
        }, 3000);
        door.save(function (error) {
            if(error) {
                console.log(error)
            }
            res.send({
                success: true,
                selectedStatus: req.body.selectedStatus
            })
        })
    });
};
