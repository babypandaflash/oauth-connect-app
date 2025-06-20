const app = require("../server");

app.get("/api/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = app;