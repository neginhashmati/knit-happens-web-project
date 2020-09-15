var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema( {
   name: { type: String },
   date: { type: Date },
   status: { type: String, enum: ['Not started', 'In progress', 'Completed']},
   priority: { type: String, enum: ['Low', 'High', 'Medium']},
   note: {type: Schema.Types.ObjectId, ref: 'Note'},
   image: {type: Schema.Types.ObjectId, ref: 'Image'}
});

//module.exports = mongoose.model('projects', projectSchema);

var project  = mongoose.model('project', ProjectSchema);

