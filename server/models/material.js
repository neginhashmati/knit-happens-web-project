var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Set schema for Materials
var materialSchema  = new Schema({
	name: {type: String},
	source_name: {type: String},
	cost: {type: Number},
	owned: {type: Boolean},
	needle: {type: Schema.Types.ObjectId, ref: 'Needle'},
    yarn: {type: Schema.Types.ObjectId, ref: 'Yarn'},
    note: {type: String},
    image: {type: Schema.Types.ObjectId, ref: 'Image'},
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('materials', materialSchema);