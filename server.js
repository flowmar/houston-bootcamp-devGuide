// Dependencies
const path = require("path");
const fs = require("fs");
const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// require User model
require("./models/User");
require("./models/Project");
//require("./models/Response");

// require passport
require('./config/passport');

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

// Initialize Express
const app = express();

app.use(bodyParser.json());

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


// Set Port Number to Listen 
const PORT = 3000;

// Serve static content for the app from the client directory
app.use(express.static(path.join(__dirname, "public")));

// ===== Routes ===== //
 app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// require authRoutes for user Login 
require('./routes/authRoutes')(app);
require('./routes/projectRoutes')(app);


app.listen(process.env.PORT ||PORT, function(){
    console.log("running at localhost " + PORT);
});