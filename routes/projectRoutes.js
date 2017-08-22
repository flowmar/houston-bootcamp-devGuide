const express = require('express');
// const keys = require('../config/keys');
// Database Dependencies
// Require Database Schema
require("../models/Project");

module.exports = function (app) {
    // This is the route we will send GET requests to retrieve our most recent
    // search data.
    app.get('./api/project', function (req, res) {
        Project.find({}, function (error, doc) {
            if (error) {
                res.send(error);
            } else {
                console.log(doc);
                res.send(doc);
            };
        });
    });
};
