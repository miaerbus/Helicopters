var Rent = require('../models/rent');
var Helicopter = require('../models/helicopter');

module.exports = function(router) {

	// RENT ROUTE
	// http://localhost:8888/rents in POSTMAN
	router.post('/rents', function(req, res) {
		var rent = new Rent();
		rent.name = req.body.name;
		rent.duration = req.body.duration;

		if (req.body.name == null || req.body.name == '' || req.body.duration == null || req.body.duration == '') {
			res.json({ success: false, message: 'Name and/or duration is missing!' });
		} else {
			rent.save(function(err) {
				if (err) {
					res.json({ success: false, message: 'Name already exists!' });
				} else {
					res.json({ success: true, message: 'Rent successful'});
				}
			});
		}
	});

	router.post('/helicopters', function(req, res) {
		//res.send('testing helicopters route');
		var helicopter = new Helicopter();
		helicopter.picture = req.body.picture;
		helicopter.name = req.body.name;
		helicopter.power = req.body.power;
		helicopter.passengers = req.body.passengers;
		helicopter.speed = req.body.speed;

		if (req.body.name == null || req.body.name == '') {
			res.json({ success: false, message: 'Name is missing!' });
		} else {
			helicopter.save(function(err) {
				if (err) {
					res.json({ success: false, message: 'Name already exists!' });
				} else {
					res.json({ success: true, message: 'Helicopter successful'});
				}
			});
		}
	});

	router.get('/helicopters', function(req, res) {
		Helicopter.find({}, function(err, helicopters) {
			//console.log('HERE: ' + helicopters);
			res.json( { success: true, helicopters: helicopters });

			/*if (err) throw err;
			console.log('decoded: ' + req.decoded);
			Helicopter.findOne({ name: req.decoded.name }, function(err, mainHelicopter) {
				if (err) throw err;
				if (!mainHelicopter) {
					res.json( { success: false, message: 'No helicopter found' });
				} else {
					if (!helicopters) {
						res.json( { success: false, message: 'No helicopters found' });
					} else {
						
					}
				}
			});*/
		});
		
	});
	
	return router;
}
