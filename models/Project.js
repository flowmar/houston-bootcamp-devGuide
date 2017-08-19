// The model basically defines all fields we want to collect
// Require mongoose
const mongoose = require("mongoose");

// Create a Schema class with mongoose
const { Schema } = mongoose;

//Create ProjectSchema 
const ProjectSchema = new Schema({
    type: ["workflow", "installation", "versionControl", "framework", "implementation", "deployment" ],
    question: {
        type: String,
        unique: true,
        required: true
    },
    info: {
        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        link: {
            type: Array,
            required: false
        }
    },
    answer: {
        type: Boolean,
        required: true
    }
});

// Save the "Project" model using the ProjectSchema
const Project = mongoose.model("Project", ProjectSchema);

//Export the Project model
module.exports = Project;