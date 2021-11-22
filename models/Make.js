var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var makeSchema = new Schema({
	name: {type: String, required: true},
  models: [{type: Schema.Types.ObjectId, ref: 'Model'}]
});

makeSchema.virtual('url').get(function() {
  return '/' + this.name;
});

module.exports = mongoose.model('Make', makeSchema);