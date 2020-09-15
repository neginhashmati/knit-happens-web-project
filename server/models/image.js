var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Set schema for Images
var imageSchema = new Schema({
	user_id: {type: Schema.Types.ObjectId, ref: 'User'},
	img: {
        data: Buffer,
        contentType: String
        }
});

module.exports = mongoose.model('images', imageSchema);