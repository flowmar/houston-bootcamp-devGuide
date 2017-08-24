// Require Project Schema
const Project = require("../models/Project");

// This is the route we will send GET requests to retrieve our project data.
module.exports = app => {
    app.get('/api/projects/workflow', (req, res,) => {
        Project.getWorkflow((err, doc) => {   
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    app.get('/api/projects/installation', (req, res,) => {
        Project.getInstallation((err, doc) => {   
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });
};
