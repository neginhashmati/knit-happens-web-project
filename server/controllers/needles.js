var express = require('express');
const app = require('../app');
var router = express.Router();

var Needle = require('../models/needle');
const needle = require('../models/needle');
const user = require('../models/user');

// CREATE/POST - create a new needle
router.post('/api/needles', function(req, res, next) {
    var needle = new Needle(req.body); //contains request body sent with the postman request
    needle.save(function(err, needle) {
        if (err) { return next(err); }
        res.status(201).json(needle)
    });
}); 

// READ/GET - Retrieve all needles

router.get('/api/needles', function(req, res, next) {
    Needle.find(function(err, needles) {
    if (err) { return next(err); }
    res.json({"needles": needles});
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
        needle.name = req.body.name;
        needle.source_name = req.body.source_name;
        needle.cost = req.body.cost;
        needle.owned = req.body.owned;
        needle.size = req.body.size;
        needle.note = req.body.note;
        needle.save();
        res.json(needle);
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

        // LANGUAGE CONSTRUCT (STATEMENt ? TRUE : FALSE)
        /// ( IF THIS IS TRUE ? DO THIS : OTHERWISE DO THIS)
        needle.name = ((typeof req.body.name === 'undefined') ? needle.name : req.body.name);
        needle.source_name = ((typeof req.body.source_name === 'undefined') ? needle.source_name : req.body.source_name);
        needle.cost = ((typeof req.body.cost === 'undefined') ? needle.cost : req.body.cost);
        needle.note = ((typeof req.body.note === 'undefined') ? needle.note : req.body.note);
        needle.size = ((typeof req.body.size === 'undefined') ? needle.size : req.body.size);
        needle.owned = ((typeof req.body.owned === 'undefined') ? needle.owned : req.body.owned);
        needle.save();
        res.json(needle);
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