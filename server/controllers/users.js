var express = require('express');
const user = require('../models/user.js');
var router = express.Router();

// import * as jsonpatch from 'fast-json-patch/index.mjs';
// import { applyPatch } from 'fast-json-patch/index.mjs';
// import { update } from '../models/Project.js';

var User = require('../models/user.js');

// CREATE a user document
router.post('/api/users', function(req, res) {
    var user = new User ( req.body);
    user.save(function(err, user) {
        if (err) { return console.error(err); }
        res.status(201).json(user);
    });   
});       

// READ all users in the user collection
router.get('/api/users', function (req, res, next) {
    User.find(function(err, users) {
        if (err) { return next(err); }
        res.json( {'users': users });

    })
});

// READ a specific user by id
router.get('/api/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        res.json(user);
    });
});

// UPDATE all attributes of a specific user by id
router.put('api/users/:id', function(req, res) {
    var id = req.params.id;
    var updated_user = {
        "_id": id,
        "email": req.body.email,
        "password": req.body.password,
        "name": req.body.name,
        "projects": req.body.projects,
	    "materials": req.body.material
    }
    users[id] = updated_user;
    res.json(updated_user);
});

// UPDATE selected attributes of a specific user by id
router.patch('/users/:id', function(req, res) {
    var id = req.params.id;
    var user = users[id];

    // console.log(user); 
    // jsonpatch.applyPatch(user.)

    var updated_user = {
        "_id": id,
        "email": (req.body.email || user.email),
        "password": (req.body.password || user.password),
        "name": (req.body.name || user.name),
        "projects": (req.body.projects || user.projects),
        "materials": (req.body.material || user.material)
    }
    users[id] = updated_user;
    res.json(updated_user);
});

// DELETE a specific user by id
router.delete('/api/users/:id', function(req, res) {
    var id = req.params.id;

    User.findOneAndDelete( {_id: id}, function (err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json(
                    {"message": "User not found"});
        }
        res.json(user);
    });
});

// DELETE all users
// router.delete('/api/users', function(req, res) {
//     var id = req.params.id;

//     User.deleteMany( {_id: id}, function (err, user) {
//         if (err) { return next(err); }
//         if (user == null) {
//             return res.status(404).json(
//                     {"message": "User not found"});
//         }
//         res.json(user);
//     });
// });

module.exports = router;