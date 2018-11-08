const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  thumbsUp: { type: Number}, 
  thumbsDown: { type: Number}, 
  comments: { type: Array},
  deckID: {type: Schema.Types.ObjectId}
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
