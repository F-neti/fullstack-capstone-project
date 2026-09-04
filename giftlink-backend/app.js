const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/search", (req, res) => {
  res.json({
    message: "Search results",
    query: req.query
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;