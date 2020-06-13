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

//add task @get
app.get("/add/tasks", (req, res) => {
  let title = "title";
  res.render("add", {
    title,
  });
});

//edit task @get
app.get("/edit/task/:id", (req, res) => {
  Task.findOne({ _id: req.params.id })
    .then((data) => {
      res.render("edit", {
        task: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//get tasks
app.get("/tasks", (req, res) => {
  Task.find({})
    .sort({ date: "desc" })
    .then((data) => {
      console.log(data);
      res.render("viewTasks", {
        task: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//add task @post
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
        res.redirect("/tasks");
      })
      .catch((err) => console.log(err));
  }
});

app.put("/tasks/:id", (req, res) => {
  Task.findOne({ _id: req.params.id })
    .then((data) => {
      data.title = req.body.title;
      data.details = req.body.details;
      data
        .save()
        .then((data) => {
          res.redirect("/tasks");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
});

//example
//  here passbook is an schema which we are importing from model folder
// const PassBook = require("./model/passbook");

// app.get("/budget", (req, res) => {
//   PassBook.find({}).then((data) => {
//     //block scope
//     let creditTotal;
//     let debitTotal;
//     // here res will be in array
//     data.forEach((value) => {
//       if (value.type === "credit") {
//         //in this we are storing value of credit
//          creditTotal = res.reduce((total, val) => {
//           return (total += val.credit);
//         }, 0);
//       } else {
//         //in this we are storing value of debit
//         debitTotal = res.reduce((total, val) => {
//           return (total += val.debit);
//         }, 0);
//       }
//     });
//     res.render('budget',{
//       // you will use this data in handlebars 
//       //{{debiTotal}} {{creditTotal}} 
//       //budgetAll is an array of object (hint using each helper in handleabars)
//       debitTotal,
//       creditTotal,
//       budgetAll:data
//     })
//   });
// });

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
