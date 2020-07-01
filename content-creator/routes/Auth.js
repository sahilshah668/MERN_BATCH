const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("unAuthenticated/login");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/newsfeed");
  }
);

module.exports = router;
