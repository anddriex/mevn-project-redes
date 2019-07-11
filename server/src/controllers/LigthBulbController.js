const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

var LightBulb = require('../models/LightBulb');
var Door = require('../models/Door')
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


exports.lightBulb_list = function (req, res) {
    LightBulb.find({}, 'name description selectedStatus activeState', function (error, lights) {
        if (error) {console.error(error);}
        res.send({
            lights: lights
        })
    });
};

exports.lightBulb_detail = function (req, res) {
    LightBulb.findById(req.params.id, 'name description selectedStatus activeState', function(error, lightBulb) {
        if (error) { console.error(error); }
        res.send(lightBulb);        
    })
};

// Display LightBulb create form on GET.
exports.lightBulb_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: lightBulb create GET');
};
// Handle LightBulb create on POST. Add new light bulb
exports.lightBulb_create_post = function (req, res) {
    var lightName = req.body.name;
    var lightDescription = req.body.description;
    var lightStatus = req.body.selectedStatus || 'OFF';
    var lightActiveState = req.body.activeState || false;
    var new_light_bulb = new LightBulb({
        name: lightName,
        description: lightDescription,
        selectedStatus: lightStatus,
        activeState: lightActiveState
    });
    new_light_bulb.save((error) => {
        if (error) {
            console.log(error)
        }
        res.send({
            id: req.body._id,
            success: true,
            message: 'LightBulb saved successfully!'
        })
    })
};
// Display LightBulb form en GET
exports.lightBulb_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: lightBulb delete GET');
};

// Handle LightBulb delete on POST.
exports.lightBulb_delete_post = function(req, res) {
    LightBulb.remove({
        _id: req.params.id
    }, function(err, post){
        if (err)
            res.send(err);
        res.send({
            success: true
        })
    })
};

// Display LightBulb update form on GET.
exports.lightBulb_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: LightBulb update GET');
};

// Handle LightBulb update on POST.
exports.lightBulb_update_post = function(req, res) {
    LightBulb.findById(req.params.id, 'name description selectedStatus activeState', function (error, light) {
        if (error) { console.error(error); }
        light.name = req.body.name;
        light.description = req.body.description;
        light.selectedStatus = req.body.selectedStatus;
        light.activeState = req.body.activeState;
        const message = (light.selectedStatus + '-' + light.name).toLocaleLowerCase();
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
        light.save(function (error) {
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

// Handle door update on POST.
exports.door_update_post = function(req, res) {
    Door.findById(req.params.id, 'name description selectedStatus activeState', function (error, door) {
        if (error) { console.error(error); }
        door.name = req.body.name;
        door.description = req.body.description;
        door.selectedStatus = req.body.selectedStatus;
        door.activeState = req.body.activeState;
        const message = door.selectedStatus.toLowerCase();
        const messageFormatted = message + '\n' ;
        console.log(messageFormatted);
        setTimeout(() => {
            console.log('timeout')
            console.log(messageFormatted)
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