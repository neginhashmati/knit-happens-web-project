var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Set schema for Images
var imageSchema = new Schema({
	path: String,
        url: String
});

module.exports = mongoose.model('images', imageSchema);