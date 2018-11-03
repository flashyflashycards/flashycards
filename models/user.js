const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// const validators = require("validators");

const userSchema = new Schema({
  firstName: { type: String, required: "First Name required"},
  lastName: { type: String, required: "Last Name required"},
  username: { type: String, unique: true, required: "Username required"},
  password: { type: String, required: true,
    validate: [
      // Function takes in the new `longstring` value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 6;
      },
      // Error Message
      "Password should be longer."
    ]
},
  decks: [
    {
      // Store ObjectIds in the array
      // type: Schema.Types.ObjectId,
      type: mongoose.Schema.ObjectId,
      // The ObjectIds will refer to the ids in the Card model
      ref: "User"
    }
  ]
});



module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});


const User = mongoose.model("User", userSchema);

module.exports = User;
