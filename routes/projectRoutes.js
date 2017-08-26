// Require Project Schema
const Project = require("../models/Project");

// This is the route we will send GET requests to retrieve our project data.
module.exports = app => {
    app.get('/api/projects', (req, res) => {
        Project.getProjects((err, doc) => {   
            if (err) {
                console.log(err);
            }
            else {
                res.send(doc);
            }
        });
    });
    
    app.get('/api/projects/installation', (req, res) => {
        Project.getInstallation((err, doc) => {   
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    app.get('/api/projects/deployment', (req, res,) => {
        Project.getDeployment((err, doc) => {   
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });
};
