const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentSchema = Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
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
  comments:[{
    commentBody:{
      type:String,
    },
    commentingUser:{
      type:String
    },
    commentDate:{
      type:Date,
      default:Date.now()
    }
  }],
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Content = mongoose.model("Content", ContentSchema);
