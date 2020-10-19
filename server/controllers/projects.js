var express = require('express');
var router = express.Router();

var Project = require('../models/project.js');
var User = require('../models/user.js');

// CREATE a project document
router.post('/api/projects', function(req, res, next) {
    var project = new Project(req.body);
    project.save(function(err, project) {
        if (err) { return next(err); }
        return res.status(201).json(project);
    });   
});       

// CREATE a project for a user
router.post('/api/projects/:user_id/projects', function(req, res) {

    var project = new Project(req.body);   
    project.save();

    var user_id = req.params.user_id;
    const update = {$push: { projects: project._id }}; 
    User.findOneAndUpdate({_id: user_id}, update, {new: true}, function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        return res.json(project);
    });
}); 

// READ all projects in the project collection
router.get('/api/projects', function(req, res, next) {
    Project.find(function(err, projects) {
        if (err) { return next(err); }
        return res.json({'projects': projects });
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
        return res.json(project);
    });
});

//READ get all projects for a user
router.get('/api/users/:user_id/projects', function(req, res, next) {
    var user_id = req.params.user_id;
    User.findById(user_id).populate('projects').exec(function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        var projects = user.projects;
        return res.json({'projects': projects });
    });
});

// UPDATE all attributes of a specific project by id
router.put('/api/projects/:id', function(req, res, next) {
    var id = req.params.id;
    Project.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        return res.json(project);
    });
});

// UPDATE selected attributes of a specific project by id
router.patch('/api/projects/:id', function(req, res, next) {
    var id = req.params.id;
    Project.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        return res.json(project);
    });
});

// DELETE a specific project by id
router.delete('/api/projects/:id', function(req, res, next) {
    var id = req.params.id;

    Project.findOneAndDelete( {_id: id}, function (err, project) {
        if (err) { return next(err); }
        if (project == null) {
            return res.status(404).json({"message": "Project not found"});
        }
       return res.status(200).json(project);
    });
});

//DELETE all projects in collection
router.delete('/api/projects', function (req, res, next) {

    Project.deleteMany(function (err, project) {
        if (err) { return next(err); }
        return res.status(200).json(project);
    });
});

module.exports = router;
