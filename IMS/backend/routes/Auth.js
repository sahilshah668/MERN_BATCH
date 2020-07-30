const express = require("express");
const router = express.Router();

const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      res.status(400).json({ msg: "user with this email not exist" });
    } else {
      bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
        if (isMatch) {
          const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            branch: user.branch,
          };
          jwt.sign(payload, keys.secretOrKey, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          });
        } else {
          res.status(400).json({ msg: "password not matched" });
        }
      });
    }
  });
});

router.post("/register", (req, res) => {
  //you have to validation using regex

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(400).json({ msg: "user with this email already exist" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        branch: req.body.branch,
        password: req.body.password,
      });
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          newUser.password = hash;
          newUser.save().then((user) => {
            res.status(200).json({ msg: "successfully registered" });
          });
        });
      });
    }
  });
});

router.get(
  "/verify-user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
