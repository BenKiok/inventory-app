var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partSchema = new Schema({
  name: {type: String, required: true},
  model: {type: Schema.Types.ObjectId, ref: 'Model', required: true},
  description: String,
  in_stock: {type: Number, required: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  part_number: {type: Number, required: true}
});

partSchema.virtual('url').get(function() {
  return '/part/' + this._id;
});

module.exports = mongoose.model('Part', partSchema);