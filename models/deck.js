const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deckSchema = new Schema({
  name: { type: String, required: true },
  cards: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Card model
      ref: "Card"
    }
  ],
  userID: {type: Schema.Types.ObjectId}
});

const Deck = mongoose.model("Deck", deckSchema);

module.exports = Deck;
