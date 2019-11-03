// Import Dependencies ?? Refactor
const express = require("express");
const path = require("path");
const logger = require('morgan');
const mongoose = require("mongoose");

// Set Port & Instantiate Express
const PORT = process.env.PORT || 3001;
const app = express();

// Import User Model ?? Remove
const { User } = require('./models');

// Configure Express Server ?? Refactor
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// Set MongoDB Path
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://haz3141:Pw3141!@ds241278.mlab.com:41278/heroku_pjvjkvk7";

// Connect MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("DB CONNECTED: ", MONGODB_URI));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// GET Routes ?? Test
app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});
app.get('/api/secret', function(req, res) {
  res.send('The password is potato');
});

// POST Route ?? Test
app.post('/api/register', function(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });

  user.save(function(err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start Express Listener
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
