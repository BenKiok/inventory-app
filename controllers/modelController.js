var Model = require('../models/Model');
var Part = require('../models/Part');

exports.model_detail = function(req, res) {
  Model.findOne({ name: req.params.modelName })
  .populate('make')
  .exec((err, model) => {
    if (err) {
      res.send(err);
    } else {
      Part.find({ model: model._id })
      .exec((err, parts) => {
        if (err) {
          res.send(err);
        } else {
          res.render('model_detail', { title: model.name + ' parts', model, parts });
        }
      });
    }
  })
}

exports.new_model_get = function(req, res) {
  res.send('Error: no view for new model');
}

exports.new_model_post = function(req, res) {
  res.send('Error: cannot create new model');
}

exports.edit_model_get = function(req, res) {
  res.send('Error: no view for model edit');
}

exports.edit_model_post = function(req, res) {
  res.send('Error: cannot edit model');
}

exports.delete_model_get = function(req, res) {
  res.send('Error: no view for model delete');
}

exports.delete_model_post = function(req, res) {
  res.send('Error: cannot delete model');
}