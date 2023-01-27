const userRouter = require('express').Router()
const User = require('../models/User')
const { hash, compare } = require('bcrypt')

userRouter.post('/register', async (req, res) => {
  try {
    if (req.body.password.length < 6)
      throw new Error('비밀번호를 6자 이상으로 해주세요.')
    if (req.body.username.length < 3)
      throw new Error('username은 3자 이상으로 해주세요.')
    const hashedPassword = await hash(req.body.password, 10)
    const user = await new User({
      name: req.body.name,
      username: req.body.username,
      hashedPassword,
      sessions: [{ createdAt: new Date() }],
    }).save()
    const session = user.sessions[0]
    return res.json({
      message: 'user registered',
      sessionId: session._id,
      name: user.name,
      userId: user._id,
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message })
  }
})
// api 생성
// post -> patch 포스트 유저 리소스를 생성하는 거지만 patch -> 유저 포스트를 수정 할 때
// post 생성 /patch 수정
userRouter.patch('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) throw new Error('가입되지 않은 이메일입니다.')
    const isValid = await compare(req.body.password, user.hashedPassword)
    if (!isValid) throw new Error('입력하신 정보가 올바르지 않습니다.')
    user.sessions.push({ createdAt: new Date() })
    const session = user.sessions[user.sessions.length - 1]
    await user.save()
    res.json({
      message: 'user validated',
      sessionId: session._id,
      name: user.name,
      userId: user._id,
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message })
  }
})

userRouter.patch('/logout', async (req, res) => {
  // 세션 아이디를 헤더스로 보내줌
  try {
    console.log(req.user)
    if (!req.user) throw new Error('invaild sessions Id2')
    await User.updateOne(
      { _id: req.user.id },
      { $pull: { sessions: { _id: req.headers.sessionId } } }
    )
    res.json({ message: 'user is logged out' })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: '에러' })
  }
})

module.exports = { userRouter }
