var express = require('express');
var router = express.Router();

var lightBulb_controller = require('../controllers/LigthBulbController');
var door_controller = require('../controllers/DoorController')
/// LIGHTBULB ROUTES ///

// GET request for creating a Lightbulb. NOTE This must come before routes that display Lightbulb (uses id).
// router.get('/light_bulb/create', lightBulb_controller.lightBulb_create_get);

// POST request for creating Lightbulb.
router.post('/light_bulb/create', lightBulb_controller.lightBulb_create_post);

// GET request to delete Lightbulb.
// router.get('/light_bulb/:id/delete', lightBulb_controller.lightBulb_delete_get);

// POST request to delete Lightbulb.
router.delete('/light_bulb/:id/delete', lightBulb_controller.lightBulb_delete_post);

// GET request to update Lightbulb.
// router.get('/light_bulb/:id/update', lightBulb_controller.lightBulb_update_get);

// POST request to update Lightbulb.
router.post('/light_bulb/:id', lightBulb_controller.lightBulb_update_post);

// GET request for one Lightbulb.
router.get('/light_bulb/:id', lightBulb_controller.lightBulb_detail);

// GET request for list of all Lightbulb items.
router.get('/light_bulbs', lightBulb_controller.lightBulb_list);

// create POST door
router.post('/door/create', door_controller.door_create_post);

// POST delete door
router.delete('/door/:id/delete', door_controller.door_delete_post);

// update door POST
router.post('/door/:id', lightBulb_controller.door_update_post);

// get a single door
router.get('/door/:id', door_controller.door_detail);

// get the doors
router.get('/doors', door_controller.doors_list);


module.exports = router;