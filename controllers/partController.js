var Part = require('../models/Part');

// default page, shows all parts with search function
exports.part_list = function(req, res) {
  Part.find({}, (err, allParts) => {
    if (err) {
      res.send(err);
    } else {
      res.render('inventory', { title: 'Inventory', catalog: allParts });
    }
  });
}

exports.part_detail = function(req, res) {
  Part.findById(req.params.id, (err, part) => {
    if (err) {
      res.send(err);
    } else {
      res.render('part_detail', { title: `${part.name}`, part });
    }
  });
}

exports.new_part_get = function(req, res) {
  res.send('Error: no view for new part');
}

exports.new_part_post = function(req, res) {
  res.send('Error: cannot create new part');
}

exports.edit_part_get = function(req, res) {
  res.send('Error: no view for part edit');
}

exports.edit_part_post = function(req, res) {
  res.send('Error: cannot edit part');
}

exports.delete_part_get = function(req, res) {
  res.send('Error: no view for part delete');
}

exports.delete_part_post = function(req, res) {
  res.send('Error: cannot delete part');
}