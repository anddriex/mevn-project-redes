var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
    // redireccionamos a todos los cuartos por el momento
    res.redirect('/rooms');
});

module.exports = router;