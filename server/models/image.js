var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Set schema for Images
var imageSchema = new Schema({
	img: {
        data: Buffer,
        contentType: String
        }
});

module.exports = mongoose.model('images', imageSchema);