var express = require('express');
var router = express.Router();

var Project = require('../models/project.js');
var User = require('../models/user.js');

// CREATE a project document
router.post('/api/projects', function(req, res) {
    var project = new Project ( req.body);
    project.save(function(err, project) {
        if (err) { return console.error(err); }
        res.status(201).json(project);
    });   
});

// CREATE a project for a user
router.post('/api/users/:user_id/projects', function(req, res) {
    var user_id = req.params.user_id;
    var user = User.findById(user_id);
    
    console.log(user_id);
    console.log(user.first);
   
    var project = new Project ( req.body);
    project.save(function(err, project) {
        if (err) { return console.error(err); }
        res.status(201).json(project);
    });   
});

// READ all projects in database
router.get('/api/projects', function (req, res, next) {
    Project.find(function(err, projects) {
        if (err) { return next(err); }
        res.json( {'projects': projects });

    })
});

// READ a specific project by id
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

// UPDATE all attributes of a specific project by id
router.put('/api/projects/:id', function(req, res) {
    var id = req.params.id;
    var updated_project = {
        "_id": id,
        "name": req.body.name,
        "date": req.body.date,
        "status": req.body.status,
        "priority": req.body.priority,
        "note": req.body.note,
        "image": req.body.image
    }
    projects[id] = updated_project;
    res.json(updated_project);
});

// UPDATE selected attributes of a specific project by id
router.patch('/api/projects/:id', function(req, res) {
    var id = req.params.id;
    var project = projects[id];

    var updated_project = {
        "_id": id,
        "name": (req.body.name || project.name), 
        "date": (req.body.date || project.date),
        "status": (req.body.status || project.status),
        "priority": (req.body.priority || project.priority),
        "note": (req.body.note || project.note),
        "image": (req.body.image || project.image)
    }
    projects[id] = updated_project;
    res.json(updated_project);
});

// DELETE a specific project by id
router.delete('/api/projects/:id', function(req, res) {
    var id = req.params.id;

    Project.findOneAndDelete( {_id: id}, function (err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json(
                    {"message": "Project not found"});
        }
        res.json(user);
    });
});

module.exports = router;