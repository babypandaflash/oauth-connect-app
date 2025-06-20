const passport = require("../../../passport");
const app = require("../../../server");

app.get("/api/auth/youtube", passport.authenticate("google", { scope: ["profile", "email"] }));

module.exports = app;