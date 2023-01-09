const userRouter = require("express").Router();
const User = require("../models/User");
userRouter.post("/register", async (req, res) => {
  await new User(req.body).save();
  // promise를 리턴해줌
  res.json({ message: "user registered" });
});

module.exports = { userRouter };
