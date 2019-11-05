// Import Dependencies !! Refactor
const express = require("express");
const path = require("path");
const logger = require('morgan');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const withAuth = require("./middleware/withAuth");

// Set Protected Environment Variables
// Define Token Signing Key
require("dotenv").config();
const secret = process.env.SECRET_KEY;

// Set Port & Instantiate Express
const PORT = process.env.PORT || 3001;
const app = express();

// Import User Model !! Remove
const { User } = require('./models');

// Configure Express Server Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));
app.use(cookieParser());

// Set MongoDB Path
const MONGODB_URI = process.env.MONGODB_URI;

// Connect MongoDB
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("(>^_^)> ==> MongoDB Connection Successful!")); // Catch error !! CB or .catch()

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// GET Route !! API Test
app.get("/api/home", function(req, res) {
  res.send("Welcome!");
});

// GET Route !! API Test
app.get("/api/landing", function(req, res) {
  res.send("Landing Page!");
});

// GET Route !! Authenticated API Test
app.get("/api/secret", withAuth, function(req, res) {
  res.send("The password is potato!");
});

// GET Route !! Token Check API Test
app.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});

// POST Route to Register User !! API Test
app.post("/api/register", function(req, res) {
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

// POST Route to Authenticate User !! API Test
app.post("/api/authenticate", function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Internal error please try again."
      });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect email or password."
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again."
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password."
          });
        } else {
          // Issue JWT
          const payload = { email };
          const token = jwt
            .sign(payload, secret, {
              expiresIn: "1h"
            });
          res.cookie("token", token, {
            httpOnly: true
          }).sendStatus(200);
        }
      });
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
  console.log(`(>^_^)> ==> API server now on port ${PORT}!`);
});
