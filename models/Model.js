var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelSchema = new Schema({
	name: {type: String, required: true},
  make: {type: Schema.Types.ObjectId, ref: 'Make', required: true},
  parts: [{type: Schema.Types.ObjectId, ref: 'Part'}]
});

modelSchema.virtual('url').get(function() {
  return '/' + this.make.name + '/' + this.name;
});

module.exports = mongoose.model('Model', modelSchema);