const asyncHandler = require("express-async-handler");
const Player = require("../models/playerModel");
var _ = require("lodash");
// @desc GET all players sorted from highest to lowest score
// @route GET /api/Players
// @access Public
const getPlayers = asyncHandler(async (req, res) => {
  Player.find()
    .sort({ "data.rank": 1 })
    .exec((err, players) => {
      if (err) {
        res.status(500).json({
          message: "Error retrieving players",
          error: err,
        });
      } else {
        res.status(200).json(players);
      }
    });
});
// @desc GET player with id
// @route GET /api/Player/:id
// @access Public
const getPlayerWithId = asyncHandler(async (req, res) => {
  Player.findOne({ id: req.params.id }, (err, player) => {
    if (err) {
      res.status(500).json({
        message: "Error retrieving player",
        error: err,
      });
    } else {
      res.status(200).json(player);
    }
  });
});

const median = (arr) => {
  let middle = Math.floor(arr.length / 2);
  arr = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? arr[middle]
    : (arr[middle - 1] + arr[middle]) / 2;
};
const getStatistics = asyncHandler(async (req, res) => {
  Player.find()
    .sort({ "data.rank": 1 })
    .exec((err, players) => {
      if (err) {
        res.status(500).json({
          message: "Error retrieving players",
          error: err,
        });
      } else {
        players.sort((a, b) => {
          return _.sum(a.data.last) - _.sum(b.data.last);
        });
        const bmiList = [];
        const heightList = [];
        players.map((player) => {
          bmiList.push(player.data.weight / Math.pow(player.data.height, 2));
          heightList.push(player.data.height);
        });
        const statistics = {
          CountryWMostWins: players.reverse()[0].country.code,
          AverageIMC: _.mean(bmiList),
          MedianHeight: median(heightList),
        };
        res.status(200).json(statistics);
      }
    });
});

module.exports = {
  getPlayers,
  getPlayerWithId,
  getStatistics,
};
