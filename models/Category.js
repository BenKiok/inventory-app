var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: {type: String, required: true},
  description: String,
  parts: [{type: Schema.Types.ObjectId, ref: 'Part', required: true}]
});

categorySchema.virtual('url').get(function() {
  return '/' + this.name;
});

module.exports = mongoose.model('Category', categorySchema);