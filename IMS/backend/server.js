const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

const PORT = process.env.PORT || 5000;

const keys = require("./config/keys");
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("mongodb is connected");
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

passport.initialize()
require("./config/passport")(passport);

const Resource = require("./routes/Resources");
const Auth = require("./routes/Auth");

app.use("/", Resource, Auth);

app.listen(PORT, () => {
  console.log(`port is runny on ${PORT}`);
});
