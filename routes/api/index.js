const router = require("express").Router();
const userRoutes = require("./users");

const deckRoutes = require("./decks");

const cardRoutes = require("./cards");

// article routes
router.use("/users", userRoutes);
router.use("/decks", deckRoutes);
router.use("/cards", cardRoutes);

module.exports = router;
