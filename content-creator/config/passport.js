const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const keys = require("./keys");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken);
        console.log(profile);
      }
    )
  );
};
