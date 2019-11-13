const jwt = require('jsonwebtoken');
const withAuth = require('../middleware/withAuth');

// Import Activity Model
const { User, Activity } = require('../models');

// const mongoose = require('mongoose');
// let ObjectId = require('mongoose').Types.ObjectId;
// const ObjectId = mongoose.Types.ObjectId

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

	// TODO: return only current email associated actions/activities
	// GET Route - find activity in Database
	app.get('/api/user/all/actions', function(req, res) {
		let userToken = req.cookies.token;
		let userEmail = '';
		if (!userToken) {
			res.status(401).send('Unauthorized: No token provided.');
		} else {
			jwt.verify(userToken, secret, function(err, decoded) {
				if (err) {
					res.status(401).send('Unauthorized: Invalid token.');
				} else {
					userEmail = decoded.email;
					console.log('REQ.EMAIL ==> ', userEmail);
					return userEmail;
					//   console.log({req})
					// next();
				}
			});
		}

		// * Find current User - - Parse to get user associated workout IDs Activities
		// * find Activities for user Workout IDs - - respond with workouts with these IDs only
		User.find({ email: userEmail })
			.then(function(user) {
				let activities = user[0].activities;

				console.log('user find by email > .then(res = = user[0].activities ==activities= ', activities);

				// let checked = ObjectId.toString(activities)
				// console.log( { checked });
				// TODO: need to map over these and transform in to "Object("-id") strings to pass into $in

				activities.forEach((userAction) => {
					const results = [];

					// ObjectId.toString(userAction)
					
					let sammy = ObjectId(`"${userAction}"`)
					console.log("sammy: ", sammy)

					Activities.find({ _id:  ObjectId(`"${userAction}"`)})
					.then((res) => {
						console.log('THIS IS RES == ', res);
						results.push(res);
					});

					// return results
					// 	console.log(userAction)
					// .then(function(activity) {
					// 	console.log('activity ==== ', activity);
					// 	res.json(activity)
					// });
					// console.log(userActivities)
					// return userActivities
				});

				// res.json(activities)
				// Activities( { status: { $in: [ "A", "D" ] } } ) >
				// console.log({ userActions })

				// return userActivities;

				// RESPOND IN next .then with those matching workouts found
				//  TODO: multi id() query - $in("WithVariable")?
			})
			.then(function(userActivities) {
				console.log({ userActivities });
				res.json(userActivities);
			})
			.catch(function(err) {
				// If an error occurs, send it back to the client
				res.json(err);
			});
	});

	// POST Route to Register ACTIVITY
	app.post('/api/activity', function(req, res) {
		// console.log(req.cookies)
		// console.log({userToken})
		// let token = userToken.split(' ');
		// let decoded = jwt.verify(token[1], secret);
		// console.log(decoded);

		let userToken = req.cookies.token;
		let userEmail = '';
		if (!userToken) {
			res.status(401).send('Unauthorized: No token provided.');
		} else {
			jwt.verify(userToken, secret, function(err, decoded) {
				if (err) {
					res.status(401).send('Unauthorized: Invalid token.');
				} else {
					userEmail = decoded.email;
					console.log('REQ.EMAIL ==> ', userEmail);
					return userEmail;
					//   console.log({req})
					// next();
				}
			});
		}

		// console.log(req.body.activity);
		Activity.create(req.body.activity)
			.then(function(activity) {
				console.log(activity);
				// If a Book was created successfully, find one library (there's only one) and push the new Book's _id to the Library's `books` array
				// { new: true } tells the query that we want it to return the updated Library -- it returns the original by default
				// , { new: true }
				// Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query

				return User.findOneAndUpdate({ email: userEmail }, { $push: { activities: activity._id } });
			})
			.then(function(activity) {
				// If the User was updated successfully, send it back to the client
				res.json(activity);
			})
			.catch(function(err) {
				// If an error occurs, send it back to the client
				res.json(err);
			});
		// .then((activity) => res.json(activity))
	});

	// POST Route to Authenticate User !! API Test
	app.post('/api/authenticate', function(req, res) {
		console.log({ req });
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
