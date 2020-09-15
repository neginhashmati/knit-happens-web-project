var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var yarnSchema = new Schema({
    brand: {type: String},
    color: {type: String},
    weight: {type: String},
    fiber: {type: String},
    material_id: {type: Schema.Types.ObjectId, ref ‘Material’}
});    

module.exports = mongoose.model('notes', noteSchema); 