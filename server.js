const express = require("express");
const passport = require("./passport");
const session = require("express-session");
const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: 'lax',
    secure: true
  }
}));

app.use(passport.initialize());
app.use(passport.session());

module.exports = app;