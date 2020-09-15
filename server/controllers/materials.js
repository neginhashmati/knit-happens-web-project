var express = require ('express');
var bodyParser = require ('bodyParser');
var mongoose = require ('mongoose');
var morgan = require ('morgan');
var router = express.Router();

var Material = require('../models/material');


// POST - Create a new material 'item'
router.post('users/:id/materials', function(req, res, next) {
	var material = new Material(req.body);
	material.save(function(err) {
		if (err) { return next(err); }
		res.status(201).json(material);
	});
});



// GET - Show all materials from user (owned and unowned)
router.get('/users/:_id/materials', function(req, res, next) {
	var id = req.params._id;
	User.findById(req.params._id, function(err, user) {
		if (err) { return next(err); }
		if (material == null) {
			return res.status(404).json({"message": "Material not found"});
		}
		res.json(user.material);
	});
});


// GET - Show material specified by user_id and material_id
router.get('/users/:user_id/materials/:material_id', function(req, res, next) {
	var user_id = req.params.user_id;
	var material_id = req.params.material_id;
	Users.findById(req.params.user_id, function(err, user) {
		if (err) { return next(err); }
		if (user == null) {
			return res.status(404).json(
					{"message": "User not found"});
		}
		res.json(material);
	});
});


// GET - Show materials that are owned (true or false)
router.get('/users/:user_id/materials/:owned', function(req, res, next) {
	var owned = req.params.owned;
	Material.findById(req.params.owned, function(err, material) {
		if (err) { return next(err); }
		if (material == null) {
			return res.status(404).json({"message": "Material not found"});
		}
		res.json(material);
	});
});


// GET - Show materials from a specified source
router.get('users/:id/materials/:source_name', function(req, res, next) {
	var id = req.params.source_name;
	Material.findBySourceName(req.params.source_name, function(err, material) {
		if (err) { return next(err); }
		if (material == null) {
			return res.status(404).json({"message": "Material not found"});
		}
		res.json(material);
	});
});


// PUT - Update all information in material specified by _id
router.put('users/:id/materials/:_id', function(req, res, next) {
	var _id = req.params._id;
	Material.findById(_id, function(err, material) {
		if (err) { return next(err); }
		if (material == null) {
			return res.status(404).json({"message": "Material not found"});
		}
		material._id = req.body._id;
		material.name = req.body.name;
		material.source_name = req.body.source_name;
		material.cost = req.body.cost;
		material.owned = req.body.owned;
		material.note_id = req.body.note_id;
		material.image_id = req.body.image_id;
		material.save();
		res.json(material);
	});
});

// PATCH - Update only changed information in material specified by _id
router.patch('users/:id/materials/:_id', function(req, res, next) {
	var _id = req.params._id;
	Material.findById(_id, function(err, material) {
		if (err) { return next(err); }
		if (material == null) {
			return res.status(404).json({"message": "Material not found"});
		}

		material._id = (req.body._id || material._id);
		material.name = (req.body.name || material.name);
		material.source_name = (req.body.source_name || material.source_name);
		material.cost = (req.body.cost || material.cost);
		material.owned = (req.body.owned || material.owned);
		material.note_id = (req.body.note_id || material.note_id);
		material.image_id = (req.body.image_id || material.image_id);
		material.save();
		res.json(material);

	});
});


// Delete material specified by _id
router.delete('users/:id/materials/:_id', function(req, res, next) {
	var _id = req.params._id;
	Material.findOneAndDelete({_id: _id}, function(err, material) {
		if (err) { return next(err); }
		if (material == null) {
			return res.status(404).json(
					{"message": "Material not found"});
		}
		res.json(material);
	});
});