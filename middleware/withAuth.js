// Import Dependencies
const jwt = require("jsonwebtoken");

// Set Protected Environment Variables
// Define Token Signing Key
require("dotenv").config();
const secret = process.env.SECRET_KEY;

const withAuth = function(req, res, next) {
  // console.log(req.body);
  // console.log(res);

  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

    if (!token) {
      res.status(401).send(
        "Unauthorized: No token provided."
      );
    } else {
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          res.status(401).send(
            "Unauthorized: Invalid token."
          );
        } else {
          req.email = decoded.email;
          next();
        }
      });
    }
}

module.exports = withAuth;
