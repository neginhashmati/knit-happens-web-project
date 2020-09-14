var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//used an array of subdocuments for projects and materials??
var userSchema = new Schema( {
   email: { type: String },
   password: { type: String },
   name: { type: String},
   projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
   materials: [{ type: Schema.Types.ObjectId, ref: 'Material' }],
});

//module.exports = mongoose.model('users', userSchema);

//var user = mongoose.model('user', userSchema);

module.exports = mongoose.model('user', userSchema);



