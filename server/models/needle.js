var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var needleSchema = new Schema({
	name: {type: String},
	source_name: {type: String},
	cost: {type: Number},
	owned: {type: Boolean},
	size: {type: String},
    note: {type: String},
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('needles', needleSchema);