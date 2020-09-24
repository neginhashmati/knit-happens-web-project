var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//used an array of subdocuments for projects and materials??
var userSchema = new Schema( {
   email: { type: String },
   password: { type: String },
   name: { type: String},
   projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('User', userSchema);



