const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentSchema = Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Public",
  },
  commentAllowance: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Content = mongoose.model("Content", ContentSchema);
