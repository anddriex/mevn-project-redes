var express = require('express');
var router = express.Router();

var lightBulb_controller = require('../controllers/LigthBulbController');


/// LIGHTBULB ROUTES ///

// GET request for creating a Lightbulb. NOTE This must come before routes that display Lightbulb (uses id).
router.get('/light_bulb/create', lightBulb_controller.lightBulb_create_get);

// POST request for creating Lightbulb.
router.post('/light_bulb/create', lightBulb_controller.lightBulb_create_post);

// GET request to delete Lightbulb.
router.get('/light_bulb/:id/delete', lightBulb_controller.lightBulb_delete_get);

// POST request to delete Lightbulb.
router.post('/light_bulb/:id/delete', lightBulb_controller.lightBulb_delete_post);

// GET request to update Lightbulb.
router.get('/light_bulb/:id/update', lightBulb_controller.lightBulb_update_get);

// POST request to update Lightbulb.
router.post('/light_bulb/:id/update', lightBulb_controller.lightBulb_update_post);

// GET request for one Lightbulb.
router.get('/light_bulb/:id', lightBulb_controller.lightBulb_detail);

// GET request for list of all Lightbulb items.
router.get('/light_bulbs', lightBulb_controller.lightBulb_list);

module.exports = router;