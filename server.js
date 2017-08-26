// Dependencies
const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require('body-parser');
var logger = require("morgan");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// require User model
require("./models/User");
require("./models/Project");
//require("./models/Response");

// require passport
require('./config/passport');

// Initialize Express
const app = express();

// Setting view engine to html
app.set("view engine", "html");
app.engine("html", function(path,options, callback){
    fs.readFile(path, "utf-8", callback);
});

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the client directory
app.use(express.static(path.join(__dirname, "public")));


// Database Dependencies
const Promise = require('bluebird');

mongoose.Promise = Promise;

//const User = mongoose.model('users');
mongoose.connect(keys.mongoURI, {
    useMongoClient: true
});

const db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});


// Tell express to make use of cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        keys: [keys.cookieKey]
    })
);

// Tell passport it should make use of cookies to handle auth. 
app.use(passport.initialize());
app.use(passport.session());

// ===== Routes ===== //
 app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// require authRoutes for user Login 
require('./routes/authRoutes')(app);
require('./routes/projectRoutes')(app);


// Set Port Number to Listen 
const PORT = 3000;


app.listen(process.env.PORT ||PORT, function(){
    console.log("running at localhost " + PORT);
});