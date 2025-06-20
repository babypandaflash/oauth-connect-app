const passport = require("../../../passport");
const app = require("../../../server");

app.get("/api/auth/discord", passport.authenticate("discord"));

module.exports = app;