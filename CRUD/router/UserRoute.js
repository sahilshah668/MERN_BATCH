const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/Register", (req, res) => {
  res.render("register");
});

router.post("/Register", (req, res) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let errors = [];
  if (!emailRegex.test(req.body.email)) {
    console.log("email is not valid");
    errors.push({ message: "email is not valid" });
  }
  if (req.body.password.length < 6) {
    errors.push({ message: "password length should be more then six " });
  }
  if (req.body.password !== req.body.password2) {
    errors.push({ message: "password not matched" });
  }
  if (errors.length > 0) {
    res.render("register", {
      email: req.body.email,
      name: req.body.name,
      error: errors,
    });
  }
  res.send("passed");
});

module.exports = router;
