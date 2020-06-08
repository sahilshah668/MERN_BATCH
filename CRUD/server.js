const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//body parser setup

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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

app.get("/add/tasks", (req, res) => {
  let title = "title";
  res.render("add", {
    title,
  });
});

app.post("/add/tasks", (req, res) => {
  let errors = [];

  if (!req.body.title) {
    errors.push({ text: "Title should not be empty" });
  }
  if (!req.body.details) {
    errors.push({ text: "Details should not be empty" });
  }
  if (errors.length > 0) {
    res.render("add", {
      title: req.body.title,
      details: req.body.details,
      errors: errors,
    });
  } else {
    const newTask = {
      title: req.body.title,
      details: req.body.details,
    };
    const task = new Task(newTask);
    task
      .save()
      .then((data) => {
        res.redirect("/add/tasks");
      })
      .catch((err) => console.log(err));
  }
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
