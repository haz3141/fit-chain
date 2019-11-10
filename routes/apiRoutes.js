const jwt = require('jsonwebtoken');
const withAuth = require('../middleware/withAuth');

// Import Activity Model
const { User, Activity } = require('../models');

// Set Protected Environment Variables
// Define Token Signing Key
require('dotenv').config();
const secret = process.env.SECRET_KEY;

module.exports = function(app) {
	// GET Route !! API Test
	app.get('/api/home', function(req, res) {
		res.send('Welcome!');
	});
	// GET Route !! API Test
	app.get('/api/landing', function(req, res) {
		res.send('Landing Page!');
	});
	// GET Route !! Authenticated API Test
	app.get('/api/secret', withAuth, function(req, res) {
		res.send('The password is potato!');
	});
	// GET Route !! Token Check API Test
	app.get('/checkToken', withAuth, function(req, res) {
		res.sendStatus(200);
	});

	// POST Route to Register User !! API Test
	app.post('/api/register', function(req, res) {
		const { email, password } = req.body;
		const user = new User({ email, password });

		user.save(function(err) {
			if (err) {
				res.status(500).send('Error registering new user please try again.');
			} else {
				res.status(200).send('Welcome to the club!');
			}
		});
	});

	// GET Route - find activity in Database
	app.get('/api/return/activity', function(req, res) {
		Activity.find({}).then((activities) => res.json(activities)).catch((err) => res.status(422).json(err));
	});

	// POST Route to Register ACTIVITY
	app.post('/api/activity', function(req, res) {
		// console.log(req.body.activity);
        Activity.create(req.body.activity)
        .then((activity) => res.json(activity))
        .catch(function(err) {
			// If an error occurs, send it back to the client
			res.json(err);
		});
	});

	// POST Route to Authenticate User !! API Test
	app.post('/api/authenticate', function(req, res) {
        console.log({req})
		const { email, password } = req.body;
		User.findOne({ email }, function(err, user) {
			if (err) {
				console.error(err);
				res.status(500).json({
					error: 'Internal error please try again.'
				});
			} else if (!user) {
				res.status(401).json({
					error: 'Incorrect email or password.'
				});
			} else {
				user.isCorrectPassword(password, function(err, same) {
					if (err) {
						res.status(500).json({
							error: 'Internal error please try again.'
						});
					} else if (!same) {
						res.status(401).json({
							error: 'Incorrect email or password.'
						});
					} else {
						// Issue JWT
						const payload = { email };
						const token = jwt.sign(payload, secret, {
							expiresIn: '1h'
						});
						res
							.cookie('token', token, {
								httpOnly: true
							})
							.sendStatus(200);
					}
				});
			}
		});
	});
};
