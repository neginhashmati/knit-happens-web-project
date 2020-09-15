var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

//create a user
router.post('/api/users', function(req, res) {
    var user = new User ( req.body);
    user.save(function(err, user) {
        if (err) { return console.error(err); }
        res.status(201).json(user);
    });   
});

// retrieve all users
router.get('/api/users', function (req, res, next) {
    User.find(function(err, users) {
        if (err) { return next(err); }
        res.json( {'users': users });

    })
});

// retrieve a specific user
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

module.exports = router;