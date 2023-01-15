const userRouter = require("express").Router();
const User = require("../models/User");
const { hash } = require("bcryptjs");
userRouter.post("/register", async (req, res) => {
  try {
    if (req.body.hashedPassWord.length < 6)
      throw new Error("비밀번호는 6자 이상 및 20자 미만으로 입력해주세요.");
    if (req.body.username.length < 3)
      throw new Error("유저네임은 3자 이상 10자 미만으로 입력해주세요.");
    // hash(비밀번호 요청 리퀘스트값, salt 값);
    const hashedPassWord = await hash(req.body.password, 10);
    console.log({ hashedPassWord });
    await new User({
      name: req.body.name,
      username: req.body.username,
      hashedPassWord,
    }).save();
    // promise를 리턴해줌
    res.json({ message: "user registered" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = { userRouter };
