var Rent = require('../models/rent');
var Helicopter = require('../models/helicopter');

module.exports = function(router) {

  // CREATE RENT
  router.post('/rents', function(req, res) {
    var rent = new Rent();
    rent.name = req.body.name;
    rent.duration = req.body.duration;
    rent.price = req.body.price;

    if (req.body.name == null || req.body.name == '' || req.body.duration == null || req.body.duration == '') {
      res.json({ success: false, message: 'Name and/or duration is missing!' });
    } else {
      rent.save(function(err) {
        if (err) {
          res.json({ success: false, message: 'Name already exists!' });
        } else {
          res.json({ success: true, message: 'Rent added'});
        }
      });
    }
  });

  // GET ALL RENTS
  router.get('/rents', function(req, res) {
    Rent.find({}, function(err, rents) {
      res.json({ success: true, rents: rents });
    });
  });

  // CREATE HELICOPTER
  router.post('/helicopters', function(req, res) {
    var helicopter = new Helicopter();
    helicopter.picture = req.body.picture;
    helicopter.name = req.body.name;
    helicopter.power = req.body.power;
    helicopter.passengers = req.body.passengers;
    helicopter.speed = req.body.speed;
    helicopter.isAvailable = req.body.isAvailable;

    if (req.body.name == null || req.body.name == '') {
      res.json({ success: false, message: 'Name is missing!' });
    } else {
      helicopter.save(function(err) {
        if (err) {
          res.json({ success: false, message: 'Name already exists!' });
        } else {
          res.json({ success: true, message: 'Helicopter added'});
        }
      });
    }
  });

  // GET ALL HELICOPTERS
  router.get('/helicopters', function(req, res) {
    Helicopter.find({}, function(err, helicopters) {
      res.json({ success: true, helicopters: helicopters });
    });
  });

  // GET HELICOPTER BY ID
  router.get('/helicopters/:helicopterId', function(req, res) {
    Helicopter.findOne({ _id: req.params.helicopterId }, function (err, helicopter) {
      if (err) return res.send(err)
      res.json({ success: true, helicopter: helicopter });
    });
  });
  
  return router;
}
