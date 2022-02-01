const userModel = require("../models/models");
const router = require("express").Router();

router.post("/adduser", async (request, response) => {
  console.log("Response :", response);
  // response.send(request);
  const user = new userModel(request.body);

  try {
    await user.save().then((res) => res.json("saved"));
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
