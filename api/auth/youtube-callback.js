const passport = require("../../../passport");
const app = require("../../../server");

app.get("/api/auth/youtube-callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

module.exports = app;