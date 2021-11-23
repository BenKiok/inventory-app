var Category = require('../models/Category');
var Part = require('../models/Part');
var async = require('async');

exports.category_list = function(req, res) {
  Category.find({}, (err, allCategories) => {
    if (err) {
      res.send(err);
    } else {
      res.render('category_list', { title: 'All Categories', allCategories });
    }
  });
}

exports.category_detail = function(req, res) {
  Category.findOne({ name: req.params.category })
  .exec((err, category) => {
    if (err) {
      res.send(err);
    } else {
      Part.find({ category: category._id })
      .exec((err, parts) => {
        if (err) {
          res.send(err);
        } else {
          res.render('category_detail', { title: category.name, category, parts });
        }
      });
    }
  });
}

exports.new_category_get = function(req, res) {
  res.send('Error: no view for new category');
}

exports.new_category_post = function(req, res) {
  res.send('Error: cannot create new category');
}

exports.edit_category_get = function(req, res) {
  res.send('Error: no view for category edit');
}

exports.edit_category_post = function(req, res) {
  res.send('Error: cannot edit category');
}

exports.delete_category_get = function(req, res) {
  res.send('Error: no view for category delete');
}

exports.delete_category_post = function(req, res) {
  res.send('Error: cannot delete category');
}