const passport = require("../../../passport");
const app = require("../../../server");

app.get("/api/auth/discord-callback",
  passport.authenticate("discord", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

module.exports = app;