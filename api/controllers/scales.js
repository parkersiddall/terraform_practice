const scalesRouter = require("express").Router();

scalesRouter.get("/", async (request, response, next) => {
  try {
    const responseJson = {
      foo: "bar",
    };
    response.json(responseJson);
  } catch (error) {
    next(error);
  }
});

module.exports = scalesRouter;
