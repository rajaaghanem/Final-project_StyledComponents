const mongoose = require("mongoose");
const validator = require("validator");

//Saved component schema
const savedComponentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  styledComponent: {
    type: String,
    required: true,
  },
  jsComponent: {
    type: String,
    required: true,
  },
  cssComponent: {
    type: String,
    required: true,
  },
  global: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const SavedComponent = mongoose.model("SavedComponent", savedComponentSchema);

module.exports = SavedComponent;
