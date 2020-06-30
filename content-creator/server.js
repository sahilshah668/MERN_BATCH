const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const Handlebars = require("handlebars");
// const passport = require('passport')
// const methodOverride = require("method-override");
// const session = require('express-session')
// const flash = require('express-flash')

// const {
//   allowInsecurePrototypeAccess,
// } = require("@handlebars/allow-prototype-access");

// how to use middleware
// app.use((req,res,next) => {
//     req.greetings = "hello"
//     return next()
// })
// const mongoDbURI = require("./config/keys");
// mongoose
//   .connect(mongoDbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("mongodb connected"))
//   .catch((err) => console.log(err));

//requiring mongoose model

//template setup
app.engine("handlebars", exphbs());


app.set("view engine", "handlebars");

//body parser setup

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//method overirde
// app.use(methodOverride("_method"));

const Auth = require("./routes/Auth");
const Content = require('./routes/Content')
const Profile = require('./routes/Profile')
app.use("/", Auth,Content,Profile);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});
