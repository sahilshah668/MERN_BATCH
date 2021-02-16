const express = require("express");
const passport = require("passport");
const router = express.Router();
const {ensureGuest} = require('../helper/authHelper')

router.get("/", ensureGuest ,(req, res) => {
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


router.get('/verify',(req,res) => {
  if(req.user) {
    console.log(req.user)
  }else {
    console.log('no auth')
  }
})

module.exports = router;
