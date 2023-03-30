const scalesRouter = require("./controllers/scales");
const express = require("express");

const app = express();
app.get("/ping", (request, response) => {
  response.json({ response: "pong" });
});
app.use("/api/scales", scalesRouter);

module.exports = app;
