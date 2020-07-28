const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = Schema({
  adminId: {
    type: String,
    //todo add required
  },
  class: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    // required: true,
  },
});

module.exports = Resource = mongoose.model("resource", ResourceSchema);
