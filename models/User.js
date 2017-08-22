// Require mongoose
const mongoose = require("mongoose");

// Create a Schema class with mongoose
const { Schema } = mongoose;

//Create userSchema 
const userSchema = new Schema({
    googleId: String
});

// Save the "users" model using the userSchema
mongoose.model("users", userSchema);
