var express = require('express');
var router = express.Router();

var Project = require('../models/Project.js');

//create a project CREATE 
router.post('/api/projects', function(req, res) {
    var project = new Project ( req.body);
    project.save(function(err, project) {
        if (err) { return console.error(err); }
        res.status(201).json(project);
    });   
});

// retrieve all projects READ
router.get('/api/projects', function (req, res, next) {
    Project.find(function(err, projects) {
        if (err) { return next(err); }
        res.json( {'projects': projects });

    })
});

// retrieve a specific project
router.get('/api/projects/:id', function(req, res, next) {
    var id = req.params.id;
    Project.findById(id, function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        res.json(project);
    });
});

module.exports = router;