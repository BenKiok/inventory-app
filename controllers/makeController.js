var Make = require('../models/Make');

exports.make_list = function(req, res) {
  res.send('Error: no view for makes list');
}

exports.new_make_get = function(req, res) {
  res.send('Error: no view for new make');
}

exports.new_make_post = function(req, res) {
  res.send('Error: cannot create new make');
}

exports.edit_make_get = function(req, res) {
  res.send('Error: no view for make edit');
}

exports.edit_make_post = function(req, res) {
  res.send('Error: cannot edit make');
}

exports.delete_make_get = function(req, res) {
  res.send('Error: no view for make delete');
}

exports.delete_make_post = function(req, res) {
  res.send('Error: cannot delete make');
}