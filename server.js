const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const _ = require('underscore');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/flashyflashycards"
);


// PASSPORT.JS
// ========================
// parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
// app.use(passport.initialize());

// load passport strategies
// const localSignupStrategy = require('./server/passport/local-signup');
// const localLoginStrategy = require('./server/passport/local-login');
// passport.use('local-signup', localSignupStrategy);
// passport.use('local-login', localLoginStrategy);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
