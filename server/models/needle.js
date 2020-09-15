var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var needleSchema = new Schema({
	size: {type: String}
});

module.exports = mongoose.model('needles', needleSchema);