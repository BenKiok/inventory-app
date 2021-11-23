console.log('This script pushes specific makes, models, parts, and categories into the database.');

var async = require('async');
var Make = require('./models/Make');
var Model = require('./models/Model');
var Part = require('./models/Part');
var Category = require('./models/Category');

var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://mongodbenben:km3RCxMKgM!*_UT@cluster0.qvd2w.mongodb.net/inventory_app?retryWrites=true&w=majority';

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

var makes = [];
var models = [];
var parts = [];
var categories  = [];

async.series([
  createMakesAndCategories,
  createModels,
  createParts
  ],
  function(err, results) {
    if (err) {
      console.log('End process error: ' + err);
    }

    console.log('Database filled!');
    mongoose.connection.close();
  }
);

function createMake(name, func) {
  var make = new Make({ name: name });

  make.save(function(err) {
    if (err) {
      func(err, null);
      return;
    }
    console.log('New make: ' + make);
    makes.push(make);
    func(null, make);
  });
}

function createModel(name, make, func) {
  var model = new Model({ name: name, make: make });

  model.save(function(err) {
    if (err) {
      func(err, null);
      return;
    }
    console.log('New model: ' + model);
    models.push(model);
    func(null, model);
  });
}

function createPart(name, model, desc, inStock, category, partNumber, func) {
  var partObj = {
    name: name,
    model: model,
    description: desc,
    in_stock: inStock,
    category: category,
    part_number: partNumber
  }

  var part = new Part(partObj);
  part.save(function(err) {
    if (err) {
      func(err, null);
      return;
    }
    console.log('New part: ' + part);
    parts.push(part);
    func(null, part);
  });
}

function createCategory(name, desc, func) {
  var category = new Category({ name: name, description: desc });

  category.save(function(err) {
    if (err) {
      func(err, null);
      return;
    }
    console.log('New category: ' + category);
    categories.push(category);
    func(null, category);
  });
}

function createMakesAndCategories(cb) {
  async.series([
      function(callback) {
        createMake('Toyota', callback);
      },
      function(callback) {
        createMake('Subaru', callback);
      },
      function(callback) {
        createMake('Mazda', callback);
      },
      function(callback) {
        createCategory('suspension', '', callback);
      },
      function(callback) {
        createCategory('engine', '', callback);
      },
      function(callback) {
        createCategory('exhaust', '', callback);
      },
      function(callback) {
        createCategory('miscellaneous', '', callback);
      }
    ],
    cb
  );
}

function createModels(cb) {
  async.parallel([
      function(callback) {
        createModel('Camry', makes[0], callback);
      },
      function(callback) {
        createModel('Corolla', makes[0], callback);
      },
      function(callback) {
        createModel('CX5', makes[2], callback);
      },
      function(callback) {
        createModel('Mazda3', makes[2], callback);
      },
      function(callback) {
        createModel('Impreza', makes[1], callback);
      },
      function(callback) {
        createModel('Legacy', makes[1], callback);
      }
    ],
    cb
  );
}

function createParts(cb) {
  async.parallel([
      function(callback) {
        createPart('front shocks', models[0], 'one pair of OEM front shocks with a replacement set of three 14 mm bolts and washers', randVal(), categories[0], randVal(1), callback);
      },
      function(callback) {
        createPart('tie rods', models[0], 'one pair of front tie rods with included nuts for both ends and tightened to OEM specifications', randVal(), categories[0], randVal(1), callback);
      },
      function(callback) {
        createPart('lower control arms', models[1], 'one pair of OEM control arms with included replacement 17 mm bolts and spin washers and 14 mm nuts', randVal(), categories[0], randVal(1), callback);
      },
      function(callback) {
        createPart('air filter', models[1], 'made to OEM specification, comes with a 1 year warranty', randVal(), categories[1], randVal(1), callback);
      },
      function(callback) {
        createPart('spark plugs', models[3], 'one pair of OEM ceramic spark plugs, comes pregapped', randVal(), categories[1], randVal(1), callback);
      },
      function(callback) {
        createPart('mass airflow sensor', models[3], 'an OEM sensor with instructions on replacements and an included 1 year warranty', randVal(), categories[1], randVal(1), callback);
      },
      function(callback) {
        createPart('oxygen sensor (upstream)', models[3], 'one upstream sensor, made to OEM specifications', randVal(), categories[2], randVal(1), callback);
      },
      function(callback) {
        createPart('muffler', models[4], 'OEM muffler, made for 1st and 2nd gen Mazda3', randVal(), categories[2], randVal(1), callback);
      },
      function(callback) {
        createPart('exhaust mount', models[4], 'a set of three hard rubber exhaust hook mounts, rated for 5 years or 100,000 miles', randVal(), categories[2], randVal(1), callback);
      },
      function(callback) {
        createPart('shift knob', models[4], 'made with carbon fiber, built for 2nd generation of Impreza', randVal(), categories[3], randVal(1), callback);
      },
      function(callback) {
        createPart('carbon fiber spoiler', models[4], 'break necks with this oversized spoiler built with real carbon fiber that adds no real downforce whatsoever', randVal(), categories[3], randVal(1), callback);
      },
      function(callback) {
        createPart('alcantera steering wheel', models[5], 'built for 2nd generation of Legacy, comes with wires for horn and a quick release mount', randVal(), categories[3], randVal(1), callback);
      },
    ],
    cb
  );
}

function randVal(forID = 0) {
  if (forID) {
    let partID = Math.ceil(Math.random() * 9999999999);

    if (partID < 10000000) {
      do {
        partID *= Math.ceil(Math.random() * 10);
      } while (partID < 10000000);
    }

    return partID;
  }

  return (Math.floor(Math.random() * 100));
}