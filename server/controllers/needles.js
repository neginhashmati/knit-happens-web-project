var express = require('express');
const app = require('../app');
var router = express.Router();

var Needle = require('../models/needle');
const needle = require('../models/needle');

// register new endpoints here
router.post('api/needles', function(req, res, next) {
    var needle = new Needle(req.body); //contains request body sent with the postman request
    needle.save(function(err, needle) {
        if (err) { return next(err); }
        res.status(201).json(needle)
    });
});

router.get('/api/needles', function(req, res, next) {
    Needle.find(function(err, needles) {
        if (err) { return next(err); }
        res.json({'needles': needle });
    })
});

router.get('/api/needles/:id', function(req, res, next) { // :id is a placeholder for a parameter
    var id = req.params.id;
    Needle.findById(id, function(err, needle) {
        if (err) {return next(err); }
        if (needle === null) {
            return res.status(404).json({'message': 'Needle not found.'});
        }
        res.json(needle);
    });
});  

module.exports = router; 