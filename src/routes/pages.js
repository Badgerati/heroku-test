// libs
var express = require('express');


// express router
var router = express.Router();


module.exports = function() {
    /////////////////////////////////////
    // home page
    /////////////////////////////////////
    router.get('/', function(req, res) {
        res.render('index');
    });

    return router;
}