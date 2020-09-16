var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

//create a user CREATE
router.post('/api/users', function(req, res) {
    var user = new User ( req.body);
    user.save(function(err, user) {
        if (err) { return console.error(err); }
        res.status(201).json(user);
    });   
});       

// retrieve all users READ
router.get('/api/users', function (req, res, next) {
    User.find(function(err, users) {
        if (err) { return next(err); }
        res.json( {'users': users });

    })
});

// retrieve a specific user READ
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

//specific user UPDATE
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

// specific user DELETE 
router.delete('api/users/:id', function(req, res) {
    var id = req.params.id;
    var user = users[id];
    delete users[id];
    res.json(user);
});












module.exports = router;