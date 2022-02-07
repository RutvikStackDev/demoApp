const userModel = require("../models/models");
const router = require("express").Router();

router.post("/adduser", async (request, response) => {
  const user = new userModel(request.body);

  try {
    await user.save();
    response.status(200).json(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/users", async (request, response) => {
  const users = await userModel.find();

  try {
    response.send(users); // Gets all the data from DB
    console.log("users in post :", users);
  } catch (error) {
    response.status(500).send(error);
  }
});

// router.delete("/delete/(:id)", async (req, res) => {
//   const users = await userModel.findByIdAndRemove(req.params.id);

//   try {
//     res.send(users); // Gets all the data from DB
//     // console.log("users in post :", users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
