const express = require("express");
const router = express.Router()
const Task = require("../models/Tasks");




//add task @get
router.get("/add/tasks", (req, res) => {
    let title = "title";
    res.render("add", {
      title,
    });
  });
  
  //edit task @get
  router.get("/edit/task/:id", (req, res) => {
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
  router.get("/tasks", (req, res) => {
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
  router.post("/add/tasks", (req, res) => {
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
  
  router.put("/tasks/:id", (req, res) => {
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
  
  
  router.delete('/delete/task/:id',(req,res) => {
      Task.remove({_id:req.params.id}) 
            .then(() => {
              res.redirect('/tasks')
            })
            .catch(err => {
              console.log(err)
            })
  })


  module.exports = router