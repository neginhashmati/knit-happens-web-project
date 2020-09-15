var express = require('express');
const app = require('../app');
var router = express.Router();

var Note = require('../models/note');
const note = require('../models/note');

// register new endpoints here
router.post('api/notes', function(req, res, next) {
    var note = new Note(req.body); //contains request body sent with the postman request
    note.save(function(err, note) {
        if (err) { return next(err); }
        res.status(201).json(note)
    });
});

router.get('/api/notes', function(req, res, next) {
    Note.find(function(err, notes) {
        if (err) { return next(err); }
        res.json({'notes': note });
    })
});

router.get('/api/notes/:id', function(req, res, next) { //:id is a placeholder for a parameter
    var id = req.params.id;
    Note.findById(id, function(err, note) {
        if (err) {return next(err); }
        if (note === null) {
            return res.status(404).json({'message': 'Note not found.'});
        }
        res.json(note);
    });
});  

module.exports = router; 
