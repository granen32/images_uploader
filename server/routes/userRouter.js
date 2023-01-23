const userRouter = require("express").Router();
const User = require("../models/User");
const { hash, compare } = require("bcrypt");
userRouter.post("/register", async (req, res) => {
  try {
    if (req.body.password.length < 6)
      throw new Error("비밀번호는 6자 이상 및 20자 미만으로 입력해주세요.");
    if (req.body.username.length < 3)
      throw new Error("유저네임은 3자 이상 10자 미만으로 입력해주세요.");
    // hash(비밀번호 요청 리퀘스트값, salt 값);
    const hashedPassWord = await hash(req.body.password, 10);
    console.log({ hashedPassWord });
    const sessions = user.sessions[0];
    await new User({
      name: req.body.name,
      username: req.body.username,
      hashedPassWord,
      sessions: [
        { createedAt: new Date(), sessionId: sessions, name: user.name },
      ],
    }).save();
    // promise를 리턴해줌
    res.json({ message: "user registered" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// api 생성
userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    // compare()도 프라미스이기 때문에 await 필요 ->프라미스 반환 후 불리언값 제공
    const isVaild = await compare(req.body.password, user.hashedPassWord);
    if (!isVaild) throw new Error("입력하신 정보가 옳바르지 않습니다.");
    user.sessions.push({ createedAt: new Date() });
    const sessions = user.sessions[user.length - 1];
    await user.save();
    res.json({
      message: "user validated",
      sessionId: sessions,
      name: user.name,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = { userRouter };
