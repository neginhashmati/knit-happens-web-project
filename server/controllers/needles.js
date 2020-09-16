var express = require('express');
const app = require('../app');
var router = express.Router();

var Needle = require('../models/needle');
const needle = require('../models/needle');

// CREATE
router.post('api/needles', function(req, res, next) {
    var needle = new Needle(req.body); //contains request body sent with the postman request
    needle.save(function(err, needle) {
        if (err) { return next(err); }
        res.status(201).json(needle)
    });
}); 

//UPDATE
router.put('api/needles/:id', function(req, res) {
    var id = req.params.id;
    var updated_needles = {
        "_id": id,
        "size": req.params.size
    }
    needles[id] = updated_needles;
    res.json(updated_needles);
});

router.patch('api/needles/:id', function(req, res) {
    var id = req.params.id;
    var needle = needles[id];
    var updated_needle = {
        "_id": id,
        "size": (req.params.size || needle.size)
    }
    needles[id] = updated_needle;
    res.json(updated_needle);
});

// DELETE
router.delete('api/needles', function(req, res) {
    var id = req.params.id;
    var needle = needles[id];
    delete needles[id];
    res.json(needle);
});

router.delete('api/needles/:id', function(req, res) {
    var id = req.params.id;
    var needle = needles[id];
    delete needles[id];
    res.json(needle);
});

module.exports = router; 