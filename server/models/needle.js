var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var needleSchema = new Schema({
	size: {type: String},
	material_id: {type: Schema.Types.ObjectId, ref: 'Material'}
});

module.exports = mongoose.model('notes', noteSchema);