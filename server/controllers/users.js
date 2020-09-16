var express = require('express');
const user = require('../models/user.js');
var router = express.Router();

var User = require('../models/user.js');

// CREATE users collection in database
router.post('/api/users', function(req, res) {
    var user = new User ( req.body);
    user.save(function(err, user) {
        if (err) { return console.error(err); }
        res.status(201).json(user);
    });   
});       

// READ all users in database
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

// router.patch('api/users/:id'), function(req, res) {
//     User.findByIdAndUpdate(req.params.id, req.body)
//     User.save()
//     res.send(users)
// });

// UPDATE selected attributes of a specific user by id
router.patch('/users/:id', function(req, res) {
    var id = req.params.id;
    var user = users[id];
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
router.delete('api/users/:id', function(req, res) {
    var id = req.params.id;
    var user = users[id];
    delete users[id];
    res.json(user);
});

module.exports = router;