var express = require('express');
const app = require('../app');
var router = express.Router();

var Yarn = require('../models/yarn');
var Project = require('../models/project');
const yarn = require('../models/yarn');
const project = require('../models/project');

// CREATE/POST - create a new yarn
router.post('/api/yarns', function(req, res, next) {
    var yarn = new Yarn(req.body); //contains request body sent with the postman request
    yarn.save(function(err, yarn) {
        if (err) { return next(err); }
        res.status(201).json(yarn)
    });
});

// CREATE/POST - create a new yarn for a project
router.post('/api/yarns/:project_id/yarns', function(req, res) {

    var yarn = new Yarn(req.body);   
    yarn.save();

    var project_id = req.params.project_id;
    if (!project_id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    const update = {$push: { yarns: yarn._id }}; 
    Project.findOneAndUpdate({_id: project_id}, update, {new: true}, function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        return res.json(yarn);
    });
}); 

// READ/GET - Retrieve all yarns
router.get('/api/yarns', function(req, res, next) {
    Yarn.find(function(err, yarns) {
    if (err) { return next(err); }
    res.json({"yarns": yarns});
    });
});

// READ/GET - Retrieve a specific yarn
router.get('/api/yarns/:id', function(req, res, next) {
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Yarn.findById(id, function(err, yarn)   {
        if (err) {  return next(err);   }
        if (yarn === null) {
            return res.status(404).json({ "message": "Yarn not found"});
        }
        res.json(yarn);
    });
});

// READ/GET - get yarns for a project
router.get('/api/projects/:project_id/yarns', function(req, res, next) {
    var project_id = req.params.project_id;
    if (!project_id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Project.findById(project_id).populate('yarns').exec(function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        var yarns = project.yarns;
        return res.json({'yarns': yarns});
    });
});

//UPDATE/PUT - update all of the information for a particular yarn
router.put('/api/yarns/:id', function(req, res) {
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Yarn.findById(id, function(err, yarn) {
        if (err) {  return next(err);   }
        if (yarn === null) {
            return res.status(404).json({"message": "yarn not found"});
        }
        else {
            yarn.name = req.body.name;
            yarn.source_name = req.body.source_name;
            yarn.cost = req.body.cost;
            yarn.owned = req.body.owned;
            yarn.size = req.body.size;
            yarn.note = req.body.note;
            yarn.brand = req.body.brand;
            yarn.color = req.body.color;
            yarn.weight = req.body.weight;
            yarn.fiber = req.body.fiber;
            yarn.save();
            res.json(yarn); 
        }
        
    });
});

// UPDATE/PATCH - update only some of the information for a particular yarn
router.patch('/api/yarns/:id', function(req, res) {
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Yarn.findById(id, function(err, yarn) {
        if (err) {  return next(err);   }
        if (yarn === null) {
            return res.status(404).json({"message": "yarn not found"});
        }
        else {
            // LANGUAGE CONSTRUCT (STATEMENt ? TRUE : FALSE)
            // ( IF THIS IS TRUE ? DO THIS : OTHERWISE DO THIS)
            yarn.name = ((typeof req.body.name === 'undefined') ? yarn.name : req.body.name);
            yarn.source_name = ((typeof req.body.source_name === 'undefined') ? yarn.source_name : req.body.source_name);
            yarn.cost = ((typeof req.body.cost === 'undefined') ? yarn.cost : req.body.cost);
            yarn.owned = ((typeof req.body.owned === 'undefined') ? yarn.owned : req.body.owned);
            yarn.brand = ((typeof req.body.brand === 'undefined') ? yarn.brand : req.body.brand);
            yarn.color = ((typeof req.body.color === 'undefined') ? yarn.color : req.body.color);
            yarn.weight = ((typeof req.body.weight === 'undefined') ? yarn.weight : req.body.weight);
            yarn.fiber = ((typeof req.body.fiber === 'undefined') ? yarn.fiber : req.body.fiber);
            yarn.note = ((typeof req.body.note === 'undefined') ? yarn.note : req.body.note);
            yarn.save();
            res.json(yarn);  
        }

    });
});

//DELETE - remove all needles for a project
router.delete('/api/projects/:project_id/needles', function(req, res, next) {
    var project_id = req.params.project_id;
    if (!project_id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
    }
    Project.findById(project_id).populate('needles').exec(function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        projects.needles.forEach(element => {
            needles.findOneAndDelete(element._id)
        });
        return res.json({'needles': needles });
    });
});

//DELETE - remove all yarns for a project
router.delete('/api/projects/:project_id/yarns', function(req, res, next) {
    var project_id = req.params.project_id;
    if (!project_id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
    }
    Project.findById(project_id).populate('yarns').exec(function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        projects.yarns.forEach(element => {
            yarns.findOneAndDelete(element._id)
        });
        return res.json({'yarns': yarns });
    });
});

// DELETE - remove a particular yarn
router.delete('/api/yarns/:id', function(req, res, next) {
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Yarn.findOneAndDelete({_id: id}, function(err, yarn) {
        if (err) { return next(err); }
        if (yarn === null) {
            return  res.status(404).json(    {"message": "yarn not found"});
        }
        res.json(yarn);
    });
});

module.exports = router;