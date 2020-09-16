var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema( {
   name: { type: String },
   date: { type: Date },
   status: { type: String, enum: ['Not started', 'In progress', 'Completed']},
   priority: { type: String, enum: ['Low', 'High', 'Medium']},
   note: { type: String }
});

//module.exports = mongoose.model('projects', projectSchema);

module.exports  = mongoose.model('projects', projectSchema);

