var express = require ('express');
var router = express.Router();

var Material = require('../models/material');
const material = require('../models/material');


// CREATE/POST - Create a new material 'item'
router.post('/api/users/:user_id/materials', function(req, res, next) {
	var material = new Material(req.body);
	Material.save(function(err, material) {
		if (err) { return next(err); }
		res.status(201).json(material);
	});
});

// READ/GET - Show all materials from user (owned and unowned)
router.get('/api/users/:user_id/materials', function(req, res, next) {
	var id = req.params.id;
	Material.findById(req.params.id, function(err, material) {
		if (err) { return next(err); }
		if (material == null) {
			return res.status(404).json({"message": "Material not found"});
		}
		res.json(material);
	});
});

// READ/GET - Show material specified by user_id and material_id
router.get('/api/users/:user_id/materials/:material_id', function(req, res, next) {
	var material_id = req.params.material_id;
	Materials.findById(req.params.material_id, function(err, material) {
		if (err) { return next(err); }
		if (user == null) {
			return res.status(404).json(
					{"message": "Material not found"});
		}
		res.json(material);
	});
});

// READ/GET - Show materials that are owned (true or false)
router.get('/api/users/:user_id/materials/:owned', function(req, res, next) {
	var owned = req.params.owned;
	Material.findById(req.params.owned, function(err, material) {
		if (err) { return next(err); }
		if (material == null) {
			return res.status(404).json({"message": "Material not found"});
		}
		res.json(material);
	});
});

// READ/GET - Show materials from a specified source
router.get('/api/users/:id/materials/:source_name', function(req, res, next) {
	var id = req.params.source_name;
	Material.findBySourceName(req.params.source_name, function(err, material) {
		if (err) { return next(err); }
		if (material == null) {
			return res.status(404).json({"message": "Material not found"});
		}
		res.json(material);
	});
});

// UPDATE/PUT - Update all information in material specified by _id
router.put('/api/api/users/:id/materials/:_id', function(req, res, next) {
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
		material.needle = req.body.needle;
		material.yarn = req.body.yarn;
		material.note = req.body.note;
		material.image = req.body.image;
		material.save();
		res.json(material);
	});
});

// UPDATE/PATCH - Update only changed information in material specified by _id
router.patch('/api/users/:id/materials/:_id', function(req, res, next) {
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
		material.needle = (req.body.needle || material.needle);
		material.yarn = (req.body.yarn || material.yarn);
		material.note = (req.body.note || material.note);
		material.image = (req.body.image || material.image);
		material.save();
		res.json(material);

	});
});

// DELETE - Delete material specified by _id
router.delete('/api/users/:user_id/materials/:material_id', function(req, res, next) {
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

module.exports = router;