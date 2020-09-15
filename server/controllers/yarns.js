var express = require('express');
const { delete } = require('../app');
const app = require('../app');
var router = express.Router();

var Yarn = require('../models/yarn');
const yarn = require('../models/yarn');

// CREATE
router.post('api/yarns', function(req, res, next) {
    var yarn = new Yarn(req.body); //contains request body sent with the postman request
    yarn.save(function(err, yarn) {
        if (err) { return next(err); }
        res.status(201).json(yarn)
    });
});

// READ
router.get('/api/yarns', function(req, res, next) {
    Yarn.find(function(err, yarns) {
        if (err) { return next(err); }
        res.json({'yarns': yarn });
    })
});

router.get('/api/yarns/:id', function(req, res, next) { // :id is a placeholder for a parameter
    var id = req.params.id;
    Yarn.findById(id, function(err, yarn) {
        if (err) {return next(err); }
        if (yarn === null) {
            return res.status(404).json({'message': 'Yarn not found.'});
        }
        res.json(yarn);
    });
});  

//UPDATE
router.put('api/yarns/:id', function(req, res) {
    var id = req.params.id;
    var updated_yarn = {
        "_id": id,
        "brand": req.body.brand,
        "color": req.body.color,
        "weight": req.body.weight,
        "fiber": req.body.fiber
    }
    yarns[id] = updated_yarn;
    res.json(updated_yarn);
});

router.patch('/yarns/:id', function(req, res) {
    var id = req.params.id;
    var yarn = yarns[id]:
    var updated_yarn = {
        "_id": id,
        "brand": req.body.brand,
        "color": (req.body.color || yarn.color),
        "weight": (req.body.weight || yarn.weight),
        "fiber": (req.body.fiber || yarn.fiber)
    }
    yarns[id] = updated_yarn;
    res.json(updated_yarn);
});

// DELETE
router.delete('api/yarns/:id', function(req, res) {
    var id = req.params.id;
    var yarn = yarns[id];
    delete yarns[id];
    res.json(yarn);
});

module.exports = router;