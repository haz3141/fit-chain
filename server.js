// Import Dependencies !! Refactor
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Require Dot Env
require('dotenv').config();

// Set Port & Instantiate Express
const PORT = process.env.PORT || 3001;
const app = express();

// Configure Express Server Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(cors());

// // Enable CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000/*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Set MongoDB Path
const MONGODB_URI = process.env.MONGODB_URI;

// Connect MongoDB
// added useFindAndModify for updating User with workout > findOneandUpdate
mongoose
	.connect(MONGODB_URI, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(console.log('(>^_^)> ==> MongoDB Connection Successful!')); // Catch error !! CB or .catch()

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// Import Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start Express Listener
app.listen(PORT, function() {
	console.log(`(>^_^)> ==> API server now on port ${PORT}!`);
});
