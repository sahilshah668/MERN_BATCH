const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Handlebars = require("handlebars");
const methodOverride = require("method-override");

const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const app = express();

const port = 5000;

// how to use middleware
// app.use((req,res,next) => {
//     req.greetings = "hello"
//     return next()
// })
const mongoDbURI = require("./config/keys");
mongoose
  .connect(mongoDbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

//requiring mongoose model
const Task = require("./models/Tasks");

//template setup
app.engine(
  "handlebars",
  exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set("view engine", "handlebars");

//body parser setup

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//method overirde
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  const greet = "Welcome to CRUD application";
  //render method is used to render the handlebars template first parameter
  //  will be the name of the template file and second paramter you can send the data from server (like  greet)
  res.render("index", {
    greetMessage: greet,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

const TaskRoute = require('./router/TaskRoute')
const UserRoute = require('./router/UserRoute')

app.use('/',TaskRoute,UserRoute)


app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
