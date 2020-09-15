var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
	date_added: {type: date},
	content: {type: String},
    project_id: {type: Schema.Types.ObjectId, ref ‘Project’},
});

module.exports = mongoose.model('notes', noteSchema); 