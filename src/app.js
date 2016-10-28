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
    app.use('/', require('./routes/pages.js'));


    /////////////////////////////////////
    // hook node onto ip:port
    /////////////////////////////////////    
    http.createServer(app).listen(8080, function() {
        console.log('Running on http://localhost:8080');
    });
}
catch (err) {
    console.log(err);
}