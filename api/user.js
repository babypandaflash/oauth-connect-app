const app = require("../server");

app.get("/api/user", (req, res) => {
  res.json({ user: req.user || null });
});

module.exports = app;