const router = require("express").Router();
const decksController = require("../../controllers/decksController");

// Matches with "/api/articles"
router.route("/")
  .get(decksController.findAll)
  .post(decksController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(decksController.findById)
  .put(decksController.update)
  // .post(decksController.create)
  .delete(decksController.remove);

module.exports = router;
