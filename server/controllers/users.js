var express = require('express');
const user = require('../models/user.js');
var router = express.Router();

// import * as jsonpatch from 'fast-json-patch/index.mjs';
// import { applyPatch } from 'fast-json-patch/index.mjs';
// import { update } from '../models/Project.js';

var User = require('../models/user.js');

// CREATE a user document
router.post('/api/users', function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err, user) {
        if (err) { return next(err); }
        return res.status(201).json(user);
    });   
});       

// READ all users in the user collection
router.get('/api/users', function(req, res, next) {
    User.find(function(err, users) {
        if (err) { return next(err); }
        return res.json({'users': users });
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
        return res.json(user);
    });
});

// UPDATE all attributes of a specific user by id
router.put('/api/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        return res.json(user);
    });
});

// UPDATE selected attributes of a specific user by id
router.patch('/api/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        return res.json(user);
    });
});

// DELETE a specific user by id
router.delete('/api/users/:id', function(req, res, next) {
    var id = req.params.id;

    User.findOneAndDelete( {_id: id}, function (err, user) {
        if (err) { return next(err); }
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
       return res.status(200).json(user);
    });
});

module.exports = router;