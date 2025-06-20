const passport = require("../../../passport");
const app = require("../../../server");

app.get("/api/auth/twitter", passport.authenticate("twitter"));

module.exports = app;