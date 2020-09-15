var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
	date_added: {type: Date},
	content: {type: String}
});

module.exports = mongoose.model('notes', noteSchema); 