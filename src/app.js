const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/citas", (req, res) => {
  const { fecha, hora, duracion, email } = req.body;
  res.status(201).json({ id: 1, fecha, hora, duracion, email });
});

module.exports = app;
