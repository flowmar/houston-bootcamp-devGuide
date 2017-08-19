const express = require('express');
const keys = require('../config/keys');
// Database Dependencies
const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;

// Require Database Schema
require("../models/Project");

// Development copy of database
mongoose.connect(keys.mongoURI, {
    useMongoClient: true
});

// Database configuration with mongoose
var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

module.exports = function(app) {
     // This is the route we will send GET requests to retrieve our most recent search data.
    app.get('./api/project', function(req,res){
        Project.find({}, function(error, doc){
            if(error) {
                res.send(error);
            }else { 
                console.log(doc);
                res.send(doc);
            };
        });
    });
};


