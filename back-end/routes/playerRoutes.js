const express = require("express");
const router = express.Router();
const {
  getPlayers,
  getPlayerWithId,
  getStatistics,
} = require("../controllers/playerController");

// route to get country with most wins
// IMC of all players
// mean height of all players
router.get("/statistics", getStatistics);
// route to get the players list sorted from highest to lowest score
router.get("/", getPlayers);
// route to get player info using his id
router.get("/:id", getPlayerWithId);

module.exports = router;
