var express = require('express');
const app = require('../app');
var router = express.Router();

var Yarn = require('../models/yarn');
const yarn = require('../models/yarn');

// CREATE/POST - create a new yarn
router.post('/api/yarns', function(req, res, next) {
    var yarn = new Yarn(req.body); //contains request body sent with the postman request
    yarn.save(function(err, yarn) {
        if (err) { return next(err); }
        res.status(201).json(yarn)
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
            return res.status(404).json({ "message": "yarn not found"});
        }
        res.json(yarn);
    });
});

//UPDATE/PUT - update all of the information for a particular yarn
router.put('/api/yarns/:id', function(req, res) {
    var id = req.params.id;
    var id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({  "message": "Illegal ID format" });
      }
    Yarn.findById(id, function(err, yarn) {
        if (err) {  return next(err);   }
        if (yarn === null) {
            return res.status(404).json({"message": "yarn not found"});
        }
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

        // LANGUAGE CONSTRUCT (STATEMENt ? TRUE : FALSE)
        /// ( IF THIS IS TRUE ? DO THIS : OTHERWISE DO THIS)
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
    });
});

/*
// DELETE - remove all yarns
router.delete('/api/yarns', function(req, res, next) {
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
*/

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