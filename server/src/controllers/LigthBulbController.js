const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

// import {LIGHTS} from '../constants/lights';
var LightBulb = require('../models/LightBulb');

const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new ReadLine({ delimiter: '\n' }));
// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message)
});


exports.lightBulb_list = function (req, res) {
    LightBulb.find({}, 'name description status', function (error, lights) {
        if (error) {console.error(error);}
        console.log(lights)
        res.send({
            lights: lights
        }).sort({_id:-1})
    });
};

exports.lightBulb_detail = function (req, res) {
    LightBulb.findById(req.params.id, 'name description status'), function(error, lightBulb) {
        if (error) { console.error(error); }
        res.send(lightBulb);        
    }
};

// Display LightBulb create form on GET.
exports.lightBulb_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: lightBulb create GET');
};
// Handle LightBulb create on POST. Add new light bulb
exports.lightBulb_create_post = function (req, res) {
    var lightName = req.body.name;
    var lightDescription = req.body.description;
    var lightStatus = req.body.status || 'off';
    var new_light_bulb = new LightBulb({
        name: lightName,
        description: lightDescription,
        status: lightStatus
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
    LightBulb.findById(req.params.id, 'name description status', function (error, light) {
        if (error) { console.error(error); }
        light.name = req.body.name;
        light.description = req.body.description;
        light.status = req.body.status;
        const message = (light.status + '-' + light.name).toLocaleLowerCase;
        messgaeFormated = message + '\n' ;
        port.on('open', () => {
            setTimeout(() => { 
                port.write(messgaeFormated, (err) => {
                    if(err) {
                        return console.log('Error on write: ', err.message);
                    } 
                    console.log('message written');
                });
            }, 5000);
        });
        light.save(function (error) {
            if(error) {
                console.log(error)
            }
            res.send({
                success: true,
                status: req.body.status
            })
        })
    });
};