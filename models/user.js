const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const validators = require("validators");

const userSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  username: { type: String, unique: true, required: true},
  password: { type: String, required: true},
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

const User = mongoose.model("User", userSchema);

module.exports = User;
