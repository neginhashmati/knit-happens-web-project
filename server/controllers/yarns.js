var express = require('express');
const app = require('../app');
var router = express.Router();

var Yarn = require('../models/yarn');

// CREATE
router.post('/api/materials/:material_id/yarns', function(req, res, next) {
    var yarn = new Yarn(req.body); //contains request body sent with the postman request
    yarn.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(yarn)
    });
});

//UPDATE
router.put('/api/users/:user_id/materials/:material_id/yarns/:id', function(req, res) {
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

/* router.put('/api/users/:user_id/materials/:material_id/yarns/:yarn_id', function(req, res, next) {
    var id = req.params.id;
    Yarn.findById(id, function(err, yarn) {
        if (err) { return next(err); }
        if (yarn == null) {
            return res.status(404).json({"message": "Yarn not found."});
        }
        yarn.brand = req.body.brand;
        yarn.color = req.body.color;
        yarn.weight = req.body.weight;
        yarn.fiber = req.body.fiber;
        yarn.save();
        res.json(yarn);
    });
}); */

router.patch('/api/users/:user_id/materials/:material_id/yarns/:id', function(req, res) {
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

/* router.patch('/api/users/:user_id/materials/:material_id/yarns/:id', function(req, res, next) {
    var id = req.params.id;
    Yarn.findById(id, function(err, yarn) {
        if (err) { return next(err); }
        if (yarn == null) {
            return res.status(404).json({"message":"Yarn not found"});
        }
        yarn.brand = (req.body.brand || yarn.brand);
        yarn.color = (req.body.color || yarn.color);
        yarn.weight = (req.body.weight || yarn.weight);
        yarn.weight = (req.body.fiber || yarn.fiber);
        yarn.save();
        res.json(yarn);
    });
}); */

// DELETE
// delete all yarns
router.delete('/api/yarns', function(req, res) {
    var id = req.params.id;

    Yarn.deleteMany( {_id: id}, function(err, yarn) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json(
                {"message": "User deleted."});
        }
        res.json(yarn);
    });
});
// delete specific yarn
router.delete('/api/yarns/:id', function(req, res) {
    var id = req.params.id;

    Yarn.deleteOne( {_id: id}, function(err, yarn) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json(
                {"message": "User deleted."});
        }
        res.json(yarn);
    });
});

module.exports = router;