var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var yarnSchema = new Schema({
    name: {type: String},
	source_name: {type: String},
	cost: {type: Number},
	owned: {type: Boolean},
    brand: {type: String},
    color: {type: String},
    weight: {type: String},
    fiber: {type: String},
    note: {type: String},  
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
});    

module.exports = mongoose.model('yarns', yarnSchema); 