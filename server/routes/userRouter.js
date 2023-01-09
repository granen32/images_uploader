const userRouter = require("express").Router();

userRouter.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: "user Register" });
});

module.exports = { userRouter };
