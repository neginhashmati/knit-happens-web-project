var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Set schema for Materials
var materialSchema  = new Schema({
	name: {type: String},
	source_name: {type: String},
	cost: {type: double},
	owned: {type: boolean},
	note_id: {type: Schema.Types.ObjectId, ref: 'Note'},
	image_id: {type: Schema.Types.ObjectId, ref: 'Image'}
});

module.exports = mongoose.model('materials', materialSchema);