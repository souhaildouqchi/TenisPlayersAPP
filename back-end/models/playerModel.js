const mongoose = require("mongoose");

const playerSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    shortname: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    country: {
      picture: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
    },
    picture: {
      type: String,
      required: true,
    },
    data: {
      rank: {
        type: Number,
        required: true,
      },
      points: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      last: {
        type: [Number],
      },
    },
  },
  { _id: false }
);

module.exports = mongoose.model("Player", playerSchema);
