var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var yarnSchema = new Schema({
    brand: {type: String},
    color: {type: String},
    weight: {type: String},
    fiber: {type: String}
});    

module.exports = mongoose.model('yarns', yarnSchema); 