/*
var express = require ('express');
var bodyParser = require ('bodyParser');
var mongoose = require ('mongoose');
var morgan = require ('morgan');
var router = express.Router();

var Image = require('../models/image');


// POST - Uploading the image 
router.post('/images', upload.single('image'), (req, res, next) => { 
  
    var obj = { 
        _id: req.body._id, 
        img: { 
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
            contentType: 'image/jpg'
        } 
    } 
    imgModel.create(obj, (err, item) => { 
        if (err) { 
            console.log(err); 
        } 
        else { 
            // item.save(); 
            res.redirect('/images'); 
        } 
    }); 
}); 


// GET - Retriving the image 
router.get('/images/:_id', (req, res) => { 
    imgModel.find({}, (err, items) => { 
        if (err) { 
            console.log(err); 
        } 
        else { 
            res.render('app', { items: items }); 
        } 
    }); 
}); 



router.delete('/images/:_id', function(req, res, next) {
	var _id = req.params._id;
	Image.findOneAndDelete({_id: _id}, function(err, image) {
		if (err) { return next(err); }
		if (image == null) {
			return res.status(404).json(
					{"message": "Image not found"});
		}
		res.json(image);
	});
});
*/