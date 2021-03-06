var express = require('express');
const user = require('../models/user.js');
var router = express.Router();

var User = require('../models/user.js');

// UPDATE all attributes of a specific document by id 
function putDocument(Type) {
    return function (req, res, next) {
        var id = req.params.id;
        Type.findOneAndUpdate({ _id: id }, req.body, { new: true }, function (err, document) {
            if (err) { return next(err); }
            if (document === null) {
                return res.status(404).json({ 'message': 'Document not found' });
            }
            return res.json(document);
        });
    };
}

// CREATE a user document
router.post('/api/users', function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err, user) {
        if (err) { return next(err); }
        return res.status(201).json(user);
    });   
});      

router.get('/api/auth/', function(req, res, next) {
    var password = req.query.password;    
    var emailAddress = req.query.email;
    User.findOne({ email: emailAddress }).exec(function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(200).json({'error': 'User not found'});
        }
        if(user.password !== password) {
            return res.status(200).json({'error': 'Wrong password'})
        }
        return res.status(200).json(user);
    });
});

// READ all users in the user collection
router.get('/api/users', function(req, res, next) {
    var userMoongose = User.find();
    if(req.query.sort !== null) {
        userMoongose.sort(req.query.sort);
    }
    //User.find(function(err, users) {
    userMoongose.populate('projects').exec(function(err, users) {
        if (err) { return next(err); }
        return res.json({"users": users });
    })
});

// READ a specific user by id
router.get('/api/users/:id', function(req, res, next) {
    var id = req.params.id;
    //User.findById(id, function(err, user){
    User.findById(id).populate('projects').exec(function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        return res.json(user);
    });
});

// READ all users and return them sorted alphabetically by name
router.get('/api/users', function(req, res, next) {

    User.find(function(err, users) {
        if (err) { return next(err); }

        if(req.query.sort != undefined) {
            users.sort();
        }
        return res.json({'users': users });
    })
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

//DELETE all users in collection
router.delete('/api/users', function (req, res, next) {

    User.deleteMany(function (err, user) {
        if (err) { return next(err); }
        return res.status(200).json(user);
    });
});

module.exports = router;


