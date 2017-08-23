// Require Project Schema
const Project = require("../models/Project");

// This is the route we will send GET requests to retrieve our project data.
module.exports = app => {
    app.get('/api/projects', (req, res,) => {
        Project.getProjects((err, doc) => {   
            if (err) {
                console.log(err);
            }
            else {
                res.send(doc);
            }
        });
    });

    app.get('/api/projects/:_id', (req, res) => {
        Project.getProjectById(req.params._id, (err, doc) => {
            if(err){
                throw err;
            }
            res.send(doc);
        });
    });
};
