const express = require("express");
const programRoutes = require("./routes/program.routes.cjs");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "express-digitalocean-app",
  });
});

app.use("/api/programs", programRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

module.exports = app;
