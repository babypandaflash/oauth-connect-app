const passport = require("../../../passport");
const app = require("../../../server");

app.get("/api/auth/twitter-callback",
  passport.authenticate("twitter", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

module.exports = app;