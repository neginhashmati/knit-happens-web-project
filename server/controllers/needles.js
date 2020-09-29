var express = require('express');
const app = require('../app');
var router = express.Router();

var Needle = require('../models/needle');
var Project = require('../models/project');
const needle = require('../models/needle');
const project = require('../models/project');

// CREATE/POST - create a new needle
router.post('/api/needles', function(req, res, next) {
    var needle = new Needle(req.body); //contains request body sent with the postman request
    needle.save(function(err, needle) {
        if (err) { return next(err); }
        res.status(201).json(needle)
    });
}); 

// CREATE/POST - create a new needle for a project
router.post('/api/needles/:project_id/needles', function(req, res) {

    var needle = new Needle(req.body);   
    needle.save();

    var project_id = req.params.project_id;
    const update = {$push: { needles: needle._id }}; 
    Project.findOneAndUpdate({_id: project_id}, update, {new: true}, function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        return res.json(needle);
    });
}); 

// READ/GET - Retrieve all needles for a user
router.get('/api/projects/needles', function(req, res, next) {
    var project_id = req.params.project_id;
    Project.findById(project_id).populate('needles').exec(function(err, project){
        if (err) {  return next(err);}
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        var needles = projects.needles;
        return res.json({'needles': needles });
    });
});

// READ/GET - Retrieve a specific needle
router.get('/api/needles/:id', function(req, res, next) {
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Needle.findById(id, function(err, needle)   {
        if (err) {  return next(err);   }
        if (needle === null) {
            return res.status(404).json({ "message": "Needle not found"});
        }
        res.json(needle);
    });
});

// READ/GET - get needles for a project
router.get('/api/projects/:project_id/needles', function(req, res, next) {
    var project_id = req.params.project_id;
    if (!project_id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Project.findById(project_id).populate('needles').exec(function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        var needles = project.needles;
        return res.json({'needles': needles});

       // return res.json(needles);
    });
});

// UPDATE/PUT - update all of the information for a particular 2needle
router.put('/api/needles/:id', function(req, res) {
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Needle.findById(id, function(err, needle) {
        if (err) {  return next(err);   }
        if (needle === null) {
            return res.status(404).json({"message": "Needle not found"});
        }
        else {
            needle.name = req.body.name;
            needle.source_name = req.body.source_name;
            needle.cost = req.body.cost;
            needle.owned = req.body.owned;
            needle.size = req.body.size;
            needle.note = req.body.note;
            needle.save();
            res.json(needle);
        }
        
    });
});

// UPDATE/PATCH - update only some of the information for a particular needle
router.patch('/api/needles/:id', function(req, res) {
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Needle.findById(id, function(err, needle) {
        if (err) {  return next(err);   }
        if (needle === null) {
            return res.status(404).json({"message": "Needle not found"});
        }
        else {
            // LANGUAGE CONSTRUCT (STATEMENt ? TRUE : FALSE)
            // ( IF THIS IS TRUE ? DO THIS : OTHERWISE DO THIS)
            needle.name = ((typeof req.body.name === 'undefined') ? needle.name : req.body.name);
            needle.source_name = ((typeof req.body.source_name === 'undefined') ? needle.source_name : req.body.source_name);
            needle.cost = ((typeof req.body.cost === 'undefined') ? needle.cost : req.body.cost);
            needle.note = ((typeof req.body.note === 'undefined') ? needle.note : req.body.note);
            needle.size = ((typeof req.body.size === 'undefined') ? needle.size : req.body.size);
            needle.owned = ((typeof req.body.owned === 'undefined') ? needle.owned : req.body.owned);
            needle.save();
            res.json(needle);  
        }

        
    });
});

/*
// DELETE - remove all needles

router.delete('/api/needles/:id', function(req, res, next) {
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Needle.findOneAndDelete({_id: id}, function(err, needle) {
        if (err) { return next(err); }
        if (needle === null) {
            return  res.status(404).json(    {"message": "Needle not found"});
        }
        res.json(needle);
    });
});
*/

//DELETE - remove all needles for a project

router.delete('/api/projects/:project_id/needles', function(req, res, next) {
    var project_id = req.params.project_id;
    if (!project_id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Project.findByIdAndDelete(project_id).populate('needles').exec(function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        var needles = projects.needles;
        return res.json({'needles': needles });
    });
});

// DELETE - remove a particular needle

router.delete('/api/needles/:id', function(req, res, next) {
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Needle.findOneAndDelete({_id: id}, function(err, needle) {
        if (err) { return next(err); }
        if (needle === null) {
            return  res.status(404).json(    {"message": "Needle not found"});
        }
        res.json(needle);
    });
});

module.exports = router; 