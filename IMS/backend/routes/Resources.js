const express = require("express");
const router = express.Router();

const Resource = require("../models/Resources");

//Get Request
//for getting the resource data

router.get("/admin/resource", async (req, res) => {
  await Resource.find({}).then((resource) => {
    if (resource.length > 0) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({ msg: "no resource found" });
    }
  });
});

//Post Request

router.post("/admin/resources", (req, res) => {
  const newResource = Resource({
    class: req.body.class,
    board: req.body.board,
    subject: req.body.subject,
    title: req.body.title,
    description: req.body.description,
  });

  newResource
    .save()
    .then((resource) => {
      res.status(200).json({ msg: "successfully addedd" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "something went wrong" });
    });
});

router.put("/admin/resource/:id", (req, res) => {
  Resource.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        subject: req.body.subject,
        class: req.body.class,
        board: req.body.board,
        title: req.body.title,
        description: req.body.description,
      },
    }
  )
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get single Resource

router.get("/admin/resource/:id", (req, res) => {
  Resource.findOne({ _id: req.params.id })
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
