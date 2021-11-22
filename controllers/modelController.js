var Model = require('../models/Model');

exports.model_detail = function(req, res) {
  res.send('Error: no view for model detail');
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