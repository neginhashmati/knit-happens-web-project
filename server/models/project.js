var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema( {
   name: { type: String },
   date: { type: Date },
   status: { type: String, enum: ['Not started', 'In progress', 'Completed']},
   priority: { type: String, enum: ['Low', 'High', 'Medium']},
   note: { type: String },
   needles: [{ type: Schema.Types.ObjectId, ref: 'Needle' }],
   yarns: [{ type: Schema.Types.ObjectId, ref: 'Yarn' }]
});

module.exports  = mongoose.model('Project', projectSchema);

