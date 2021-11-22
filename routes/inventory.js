var express = require('express');
var router = express.Router();

var part_controller = require('../controllers/partController');
var make_controller = require('../controllers/makeController');
var model_controller = require('../controllers/modelController');
var category_controller = require('../controllers/categoryController');

// *** Main page *** //
router.get('/', part_controller.part_list);

// *** Part Routes *** //
router.get('/part/new', part_controller.new_part_get);
router.post('/part/new', part_controller.new_part_post);
router.get('/part/:id/edit', part_controller.edit_part_get);
router.post('/part/:id/edit', part_controller.edit_part_post);
router.get('/part/:id/delete', part_controller.delete_part_get);
router.post('/part/:id/delete', part_controller.delete_part_post);
router.get('/part/:id', part_controller.part_detail);

// *** Make Routes *** //
router.get('/make/new', make_controller.new_make_get);
router.post('/make/new', make_controller.new_make_post);
router.get('/make/:id/edit', make_controller.edit_make_get);
router.post('/make/:id/edit', make_controller.edit_make_post);
router.get('/make/:id/delete', make_controller.delete_make_get);
router.post('/make/:id/delete', make_controller.delete_make_post);
router.get('/makes&models', make_controller.make_list);

// *** Model Routes *** //
router.get('/model/new', model_controller.new_model_get);
router.post('/model/new', model_controller.new_model_post);
router.get('/model/:id/edit', model_controller.edit_model_get);
router.post('/model/:id/edit', model_controller.edit_model_post);
router.get('/model/:id/delete', model_controller.delete_model_get);
router.post('/model/:id/delete', model_controller.delete_model_post);
router.get('/model/:modelName', model_controller.model_detail);

// *** Category Routes *** //
router.get('/category/new', category_controller.new_category_get);
router.post('/category/new', category_controller.new_category_post);
router.get('/category/:id/edit', category_controller.edit_category_get);
router.post('/category/:id/edit', category_controller.edit_category_post);
router.get('/category/:id/delete', category_controller.delete_category_get);
router.post('/category/:id/delete', category_controller.delete_category_post);
router.get('/categories/:category', category_controller.category_detail);
router.get('/categories', category_controller.category_list);

// *** 404 Error Route *** //
router.get('/*', (req, res) => {
  res.render('404');
});

module.exports = router;