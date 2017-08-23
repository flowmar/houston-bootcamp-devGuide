// The model basically defines all fields we want to collect
// Require mongoose
const mongoose = require("mongoose");
   
// Create a Schema class with mongoose
const { Schema } = mongoose;

//Create ProjectSchema 
const ResponseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }, 

    project: {
        type: Schema.Types.ObjectId,
        ref: "Project"
    }

});

// Save the "Project" model using the ProjectSchema
mongoose.model("responses", ResponseSchema);