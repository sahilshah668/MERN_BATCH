const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = Schema({
  googleID: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserModel);
