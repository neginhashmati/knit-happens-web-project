var express = require('express');
const app = require('../app');
var router = express.Router();

var Yarn = require('../models/yarn');
// const yarn = require('../models/yarn');

// CREATE
router.post('api/materials/yarns', function(req, res, next) {
    var yarn = new Yarn(req.body); //contains request body sent with the postman request
    yarn.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(yarn)
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

router.patch('api/yarns/:id', function(req, res) {
    var id = req.params.id;
    var yarn = yarns[id];
    var updated_yarn = {
        "_id": id,
        "brand": (req.body.brand || yarn.brand),
        "color": (req.body.color || yarn.color),
        "weight": (req.body.weight || yarn.weight),
        "fiber": (req.body.fiber || yarn.fiber)
    }
    yarns[id] = updated_yarn;
    res.json(updated_yarn);
});

// DELETE
router.delete('api/yarns', function(req, res) {
    var id = req.params.id;
    var yarn = yarns[id];
    delete yarns[id];
    res.json(yarn);
});

router.delete('api/yarns/:id', function(req, res) {
    var id = req.params.id;
    var yarn = yarns[id];
    delete yarns[id];
    res.json(yarn);
});

module.exports = router;