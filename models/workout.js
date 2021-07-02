const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "What type of workout are you doing"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter a name for your workout"
    },
    duration: {
      type: Number,
      required: "How long is your workout in minutes"
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    }
  }],

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;