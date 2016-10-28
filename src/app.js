'use strict';

try {
    /////////////////////////////////////
    // load required libraries
    /////////////////////////////////////
    var http = require('http');
    var express = require('express');
    var bodyParser = require('body-parser');
    var path = require('path');
    var lessMiddleware = require('less-middleware');


    /////////////////////////////////////
    // setup express
    /////////////////////////////////////
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // set public path
    //var public_path = path.join(__dirname, 'public');
    //app.use(express.static(public_path));


    /////////////////////////////////////
    // setup view engine
    /////////////////////////////////////
    app.set('view engine', 'pug');


    /////////////////////////////////////
    // setup page + action routes
    /////////////////////////////////////
    app.get('/', function(req, res) {
        res.render('index');
    });


    /////////////////////////////////////
    // hook node onto ip:port
    /////////////////////////////////////    
    var port = process.env.PORT || 8084;
    http.createServer(app).listen(port, function() {
        console.log('Running on http://localhost:' + port);
    });
}
catch (err) {
    console.log(err);
}