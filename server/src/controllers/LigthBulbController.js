var LightBulb = require('../models/LightBulb');
const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

import {LIGHTS} from '../constants/lights';

const port = new SerialPort('/path/tty', {baudRate: 9600});
const parser = port.pipe(new ReadLine({delimiter: '\n'}));
port.on('open', () => {
    console.log('serial port open');
});


exports.lightBulb_list = function (req, res) {
    LightBulb.find({}, 'name description status', function (error, lights) {
        if (error) {console.error(error);}
        res.send({
            lights: lights
        })
    });
};

exports.lightBulb_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: lightBulb detail' + req.params.id);
};

// Display LightBulb create form on GET.
exports.lightBulb_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: lightBulb create GET');
};
// Handle LightBulb create on POST.
exports.lightBulb_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: lightBulb create POST');
};
// Display LightBulb form en GET
exports.lightBulb_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: lightBulb delete GET');
};

// Handle LightBulb delete on POST.
exports.lightBulb_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: LightBulb delete POST');
};

// Display LightBulb update form on GET.
exports.lightBulb_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: LightBulb update GET');
};

// Handle LightBulb update on POST.
exports.lightBulb_update_post = function(req, res) {
    LightBulb.findById(req.params.id, 'name description status', function (error, light) {
        light.name = req.body.name;
        light.description = req.body.description;
        light.status = req.body.status;
        light.save(function (error) {
            if(error) {
                console.log(error)
            }
            res.send({
                success: true
            })
        })
    });
    parser.on('data', data => {
        switch (data.uppercase()) {
            case LIGHTS.HALLWAY_LIGHT:
                parser.on('data', data => {
                    console.log('got word from arduino:')
                })
                break;
            case LIGHTS.POOL_LIGHT:
                break;
            default:
                break;
        }
    });
    res.send('NOT IMPLEMENTED: LightBulb update POST');
};