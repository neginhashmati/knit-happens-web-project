var express = require('express');
const app = require('../app');
var router = express.Router();

var Yarn = require('../models/yarn');
const yarn = require('../models/yarn');

// register new endpoints here
router.post('api/yarns', function(req, res, next) {
    var yarn = new Yarn(req.body); //contains request body sent with the postman request
    yarn.save(function(err, yarn) {
        if (err) { return next(err); }
        res.status(201).json(yarn)
    });
});

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

module.exports = router;